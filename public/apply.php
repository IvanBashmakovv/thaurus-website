<?php
/**
 * Partner application endpoint for the static landing.
 *
 * The browser (src/lib/apply.ts) POSTs JSON here. This script validates the
 * same rules again and forwards the application to the spreadsheet webhook.
 * The webhook address and secret are read from a config file that sits OUTSIDE
 * the web root: /home/thaurus/affiliate-apply-config.php (one level above the
 * document root /home/thaurus/affiliate.thaurus.com/).
 *
 * A webhook failure never blocks the applicant: it is logged with error_log()
 * and the response is still {"ok":true}.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    echo '{"ok":false,"error":"method"}';
    exit;
}

$raw = file_get_contents('php://input');
$in = json_decode($raw ?: '', true);
if (!is_array($in)) {
    http_response_code(400);
    echo '{"ok":false,"error":"json"}';
    exit;
}

/** Same rules as the zod schema in src/lib/apply.ts; returns the field keys that failed. */
function validate(array $in): array
{
    $s = static fn(string $k): string => trim((string)($in[$k] ?? ''));
    $errors = [];
    if (mb_strlen($s('name')) < 2) $errors[] = 'name';
    if (filter_var($s('email'), FILTER_VALIDATE_EMAIL) === false) $errors[] = 'email';
    if (mb_strlen($s('contact')) < 3) $errors[] = 'contact';
    if (mb_strlen($s('traffic')) < 3) $errors[] = 'traffic';
    if (!in_array($s('program'), ['ib', 'affiliate'], true)) $errors[] = 'program';
    if (mb_strlen($s('message')) > 2000) $errors[] = 'message';
    return $errors;
}

$errors = validate($in);
if ($errors) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'errors' => $errors]);
    exit;
}

$configFile = dirname(__DIR__) . '/affiliate-apply-config.php';
$cfg = is_file($configFile) ? (include $configFile) : null;
$url = is_array($cfg) ? (string)($cfg['APPLICATIONS_WEBHOOK_URL'] ?? '') : '';
$secret = is_array($cfg) ? (string)($cfg['APPLICATIONS_WEBHOOK_SECRET'] ?? '') : '';

$t = static fn(string $k): string => trim((string)($in[$k] ?? ''));
$payload = [
    'secret' => $secret,
    'submittedAt' => gmdate('Y-m-d\TH:i:s.000\Z'),
    'program' => $t('program') === 'ib' ? 'IB Partners (revenue share)' : 'Affiliates (CPA)',
    'name' => $t('name'),
    'email' => $t('email'),
    // Leading apostrophe: Sheets would otherwise parse "+234..." as a formula (#ERROR!).
    'contact' => "'" . $t('contact'),
    'traffic' => $t('traffic'),
    'message' => $t('message'),
];

if ($url === '') {
    error_log('[apply] config missing or APPLICATIONS_WEBHOOK_URL empty (' . $configFile . '); application not stored: ' . $payload['email']);
} else {
    $body = json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    $status = 0;
    $err = '';
    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $body,
            CURLOPT_HTTPHEADER => ['Content-Type: text/plain;charset=utf-8'],
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_MAXREDIRS => 5,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 15,
            CURLOPT_CONNECTTIMEOUT => 10,
        ]);
        curl_exec($ch);
        $status = (int)curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
        $err = (string)curl_error($ch);
        curl_close($ch);
    } else {
        $ctx = stream_context_create(['http' => [
            'method' => 'POST',
            'header' => "Content-Type: text/plain;charset=utf-8\r\n",
            'content' => $body,
            'follow_location' => 1,
            'max_redirects' => 5,
            'timeout' => 15,
            'ignore_errors' => true,
        ]]);
        $res = @file_get_contents($url, false, $ctx);
        if ($res === false) {
            $err = 'file_get_contents failed';
        } elseif (isset($http_response_header[0]) && preg_match('/\s(\d{3})\s/', $http_response_header[0], $m)) {
            $status = (int)$m[1];
        }
    }
    if ($err !== '' || $status < 200 || $status >= 300) {
        error_log('[apply] webhook failed: status ' . $status . ($err !== '' ? ' ' . $err : '') . ' for ' . $payload['email']);
    }
}

echo '{"ok":true}';

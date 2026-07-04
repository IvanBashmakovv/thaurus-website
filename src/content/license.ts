/**
 * License & Regulation page content — localized (en/es; pt/th/ar fall back).
 * Facts verbatim (FSC Mauritius, SEC-2.1B, GB22200432). Machine-translated copy
 * SHOULD BE REVIEWED by a native speaker before go-live.
 */
import type { IconName } from "@/components/ui/Icon";
import type { Locale } from "@/i18n/routing";
import { byLocale } from "@/lib/i18n-content";

type Pillar = { icon: IconName; title: string; body: string };
type VStep = { step: number; title: string; body: string };
type Faq = { q: string; a: string };

export type LicenseData = {
  fundProtection: Pillar[];
  verificationSteps: VStep[];
  licenseFaq: Faq[];
  ui: {
    heroEyebrow: string;
    heroTitle: string;
    heroIntro: string;
    verifyBtn: string;
    regulatorEyebrow: string;
    regulatorTitle: string;
    regulatorP1: string;
    regulatorP2: string;
    protectionEyebrow: string;
    protectionTitle: string;
    protectionSub: string;
    midTitle: string;
    midSub: string;
    verifyEyebrow: string;
    verifyTitle: string;
    verifySub: string;
    openRegister: string;
    complianceQ: string;
    faqEyebrow: string;
    faqTitle: string;
    ctaTitle: string;
    openAccount: string;
    compareAccounts: string;
  };
};

const en: LicenseData = {
  fundProtection: [
    { icon: "globe", title: "Operational transparency", body: "Clear terms, published policies and a verifiable license — you always know who you trade with and under which rules." },
    { icon: "lock", title: "Fund segregation", body: "Client funds are held in segregated accounts, separate from the company’s operational capital." },
    { icon: "verified", title: "Independent audits", body: "Financial operations are subject to independent audits in line with FSC requirements." },
    { icon: "shield", title: "Dispute resolution & FSC oversight", body: "Ongoing supervision by the Financial Services Commission, with a defined complaints and dispute-resolution process." },
  ],
  verificationSteps: [
    { step: 1, title: "Open the FSC public register", body: "Go to the Financial Services Commission (Mauritius) register of licensees." },
    { step: 2, title: "Search for “Thaurus”", body: "Enter the company name to find Thaurus Ltd in the official records." },
    { step: 3, title: "Review the license details", body: "Confirm license GB22200432 and the SEC-2.1B Investment Dealer category." },
  ],
  licenseFaq: [
    { q: "Is Thaurus a regulated broker?", a: "Yes. Thaurus Ltd is licensed and regulated by the Financial Services Commission, Mauritius (FSC) under license GB22200432, as a SEC-2.1B Investment Dealer (Full Service Dealer excluding Underwriting)." },
    { q: "What services is Thaurus licensed to provide?", a: "As a full-service investment dealer (excluding underwriting), Thaurus is authorized to deal in securities and related financial instruments for clients across forex, stocks, futures, CFDs and commodities." },
    { q: "How are client funds protected?", a: "Client funds are held in segregated accounts separate from company capital, operations are independently audited, and the firm operates under continuous FSC supervision with a defined dispute-resolution process." },
    { q: "Is Thaurus a scam?", a: "No. Thaurus is a regulated entity whose license can be independently verified on the FSC public register. Be cautious of unofficial sources — always confirm regulatory status directly with the FSC." },
    { q: "Where is Thaurus licensed?", a: "Thaurus Ltd is licensed in the Republic of Mauritius by the Financial Services Commission (FSC), license GB22200432, with its registered office in Port Louis, Mauritius." },
    { q: "How long does verification take?", a: "After you submit your documents, our compliance team typically reviews and reverts within 24 hours." },
  ],
  ui: {
    heroEyebrow: "Regulation", heroTitle: "Thaurus Broker License & Regulation",
    heroIntro: "Trust is our first priority. Thaurus Ltd is licensed and regulated by the Financial Services Commission of Mauritius — and you can verify it yourself in seconds.",
    verifyBtn: "Verify on FSC register",
    regulatorEyebrow: "The regulator", regulatorTitle: "Regulated by the FSC Mauritius",
    regulatorP1: "The Financial Services Commission (FSC) is the integrated regulator for non-bank financial services in the Republic of Mauritius, established under the Financial Services Act 2007. It licenses, monitors and supervises firms to protect clients and uphold market integrity.",
    regulatorP2: "Thaurus Ltd holds a full investment-dealer license issued by the FSC. Our regulatory status is current and publicly verifiable, so you never have to take our word for it.",
    protectionEyebrow: "Client protection", protectionTitle: "How your funds are protected", protectionSub: "Four pillars of safety, backed by regulation — not promises.",
    midTitle: "Trade with confidence", midSub: "Open an account with a broker whose license you can verify, or try a free demo first.",
    verifyEyebrow: "Verify it yourself", verifyTitle: "Confirm our license in 3 steps", verifySub: "Don’t take our word for it — check the official source.",
    openRegister: "Open the FSC register", complianceQ: "Compliance questions?",
    faqEyebrow: "FAQ", faqTitle: "Regulation & safety questions",
    ctaTitle: "Trade with a broker you can verify", openAccount: "Open account", compareAccounts: "Compare account types",
  },
};

const es: LicenseData = {
  fundProtection: [
    { icon: "globe", title: "Transparencia operativa", body: "Términos claros, políticas publicadas y una licencia verificable — siempre sabes con quién operas y bajo qué reglas." },
    { icon: "lock", title: "Segregación de fondos", body: "Los fondos de los clientes se mantienen en cuentas segregadas, separadas del capital operativo de la empresa." },
    { icon: "verified", title: "Auditorías independientes", body: "Las operaciones financieras se someten a auditorías independientes conforme a los requisitos de la FSC." },
    { icon: "shield", title: "Resolución de disputas y supervisión de la FSC", body: "Supervisión continua de la Comisión de Servicios Financieros, con un proceso definido de quejas y resolución de disputas." },
  ],
  verificationSteps: [
    { step: 1, title: "Abre el registro público de la FSC", body: "Accede al registro de licenciatarios de la Comisión de Servicios Financieros (Mauricio)." },
    { step: 2, title: "Busca «Thaurus»", body: "Introduce el nombre de la empresa para encontrar a Thaurus Ltd en los registros oficiales." },
    { step: 3, title: "Revisa los detalles de la licencia", body: "Confirma la licencia GB22200432 y la categoría Investment Dealer SEC-2.1B." },
  ],
  licenseFaq: [
    { q: "¿Es Thaurus un bróker regulado?", a: "Sí. Thaurus Ltd está autorizada y regulada por la Comisión de Servicios Financieros de Mauricio (FSC) con la licencia GB22200432, como Investment Dealer SEC-2.1B (Full Service Dealer, excluyendo aseguramiento)." },
    { q: "¿Qué servicios está autorizado a prestar Thaurus?", a: "Como investment dealer de servicio completo (excluyendo aseguramiento), Thaurus está autorizada a operar valores e instrumentos financieros relacionados para clientes en Forex, acciones, futuros, CFD y materias primas." },
    { q: "¿Cómo se protegen los fondos de los clientes?", a: "Los fondos de los clientes se mantienen en cuentas segregadas, separadas del capital de la empresa; las operaciones se auditan de forma independiente y la firma opera bajo supervisión continua de la FSC, con un proceso definido de resolución de disputas." },
    { q: "¿Es Thaurus una estafa?", a: "No. Thaurus es una entidad regulada cuya licencia puede verificarse de forma independiente en el registro público de la FSC. Desconfía de fuentes no oficiales — confirma siempre el estado regulatorio directamente con la FSC." },
    { q: "¿Dónde está licenciada Thaurus?", a: "Thaurus Ltd está licenciada en la República de Mauricio por la Comisión de Servicios Financieros (FSC), licencia GB22200432, con domicilio social en Port Louis, Mauricio." },
    { q: "¿Cuánto tarda la verificación?", a: "Tras enviar tus documentos, nuestro equipo de cumplimiento suele revisar y responder en un plazo de 24 horas." },
  ],
  ui: {
    heroEyebrow: "Regulación", heroTitle: "Licencia y regulación del bróker Thaurus",
    heroIntro: "La confianza es nuestra prioridad. Thaurus Ltd está autorizada y regulada por la Comisión de Servicios Financieros de Mauricio — y puedes verificarlo tú mismo en segundos.",
    verifyBtn: "Verificar en el registro de la FSC",
    regulatorEyebrow: "El regulador", regulatorTitle: "Regulado por la FSC de Mauricio",
    regulatorP1: "La Comisión de Servicios Financieros (FSC) es el regulador integrado de los servicios financieros no bancarios de la República de Mauricio, creada bajo la Financial Services Act 2007. Licencia, supervisa y monitorea a las firmas para proteger a los clientes y preservar la integridad del mercado.",
    regulatorP2: "Thaurus Ltd cuenta con una licencia completa de investment dealer emitida por la FSC. Nuestro estado regulatorio está vigente y es verificable públicamente, así que nunca tienes que creer solo en nuestra palabra.",
    protectionEyebrow: "Protección del cliente", protectionTitle: "Cómo se protegen tus fondos", protectionSub: "Cuatro pilares de seguridad respaldados por la regulación, no por promesas.",
    midTitle: "Opera con confianza", midSub: "Abre una cuenta con un bróker cuya licencia puedes verificar, o prueba antes una demo gratuita.",
    verifyEyebrow: "Verifícalo tú mismo", verifyTitle: "Confirma nuestra licencia en 3 pasos", verifySub: "No nos creas solo de palabra — comprueba la fuente oficial.",
    openRegister: "Abrir el registro de la FSC", complianceQ: "¿Preguntas de cumplimiento?",
    faqEyebrow: "Preguntas frecuentes", faqTitle: "Preguntas sobre regulación y seguridad",
    ctaTitle: "Opera con un bróker que puedes verificar", openAccount: "Abrir cuenta", compareAccounts: "Comparar tipos de cuenta",
  },
};

const LICENSE: Record<Locale, LicenseData> = { en, es, pt: en, th: en, ar: en };

// Back-compat exports (English).
export const fundProtection = en.fundProtection;
export const verificationSteps = en.verificationSteps;
export const licenseFaq = en.licenseFaq;

export function getLicense(locale: string): LicenseData {
  return byLocale(LICENSE, locale);
}

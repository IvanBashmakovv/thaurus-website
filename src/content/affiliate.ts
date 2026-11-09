/** Affiliate / partners landing — structure mirrors a best-in-class partner
 *  landing (hero → trust → programs → benefits → comparison → steps →
 *  testimonials → CTA). Localized en/es; pt/th/ar fall back to en.
 *
 *  IMPORTANT (compliance): no commission rates, payout figures or partner
 *  counts are stated anywhere. Wording with TODO(ivan) is placeholder copy
 *  Thaurus will replace with approved program terms. Testimonials are
 *  EMPTY SLOTS — real partner quotes must be supplied; never invent reviews. */
import type { Locale } from "@/i18n/routing";
import type { IconName } from "@/components/ui/Icon";
import type { Testimonial } from "@/components/affiliate/Testimonials";
import { byLocale } from "@/lib/i18n-content";

export type ProgramCard = {
  brand: string; // "Thaurus"
  name: string; // "IB Partners" / "Affiliates"
  model: string; // "Revenue share model" / "CPA model"
  bullets: string[];
  cta: string;
  learnMore: string;
};

export type AffiliateData = {
  hero: { title: string; sub: string; cta: string; pills: string[] };
  trusted: {
    eyebrow: string;
    title: string;
    stats: { value: string; label: string }[];
  };
  programs: { eyebrow: string; title: string; cards: [ProgramCard, ProgramCard] };
  benefits: {
    eyebrow: string;
    title: string;
    items: { icon: IconName; title: string; body: string }[];
  };
  comparison: {
    eyebrow: string;
    title: string;
    colA: string;
    colB: string;
    rows: { label: string; a: string; b: string }[];
    ctaA: string;
    ctaB: string;
  };
  steps: {
    eyebrow: string;
    title: string;
    sub: string;
    stepLabel: string; // "STEP"
    items: { title: string; body: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: Testimonial[];
    note: string;
    prev: string;
    next: string;
  };
  finalCta: {
    title: string;
    cards: { headline: string; model: string; cta: string; learnMore: string }[];
  };
};

const en: AffiliateData = {
  hero: {
    title: "Maximize your earnings",
    sub: "Earn competitive revenue share commission for referring traders to a regulated broker.",
    cta: "Become a partner",
    // TODO(ivan): confirm program claims before launch.
    pills: ["Unlimited commission", "Fast payouts", "Dedicated partner support"],
  },

  trusted: {
    eyebrow: "Trusted by traders worldwide",
    title: "Refer traders to a broker they already trust",
    // Real, verifiable Thaurus facts (same as elsewhere on the site).
    stats: [
      { value: "4.4 / 5", label: "Trustpilot rating" },
      { value: "4.6 / 5", label: "Google rating" },
      { value: "120+", label: "Global media features" },
      { value: "FSC", label: "Licensed · GB22200432" },
    ],
  },

  programs: {
    eyebrow: "Choose your partnership",
    title: "Earn more with our high-paying partnerships",
    cards: [
      {
        brand: "Thaurus",
        name: "IB Partners",
        model: "Revenue share model",
        bullets: [
          "Benefit from competitive payouts",
          "Build long-term earning potential",
          "Earn commission based on your referred client's trading volume",
        ],
        cta: "Become a partner",
        learnMore: "Learn more",
      },
      {
        brand: "Thaurus",
        name: "Affiliates",
        model: "CPA model",
        bullets: [
          "Competitive CPA (Cost Per Action)",
          "Performance-based earnings",
          "Earn commission for every qualified referred client",
        ],
        cta: "Become an affiliate",
        learnMore: "Learn more",
      },
    ],
  },

  benefits: {
    eyebrow: "Key benefits of each program",
    title: "Why partner with Thaurus?",
    items: [
      { icon: "percent", title: "High commissions", body: "Earn competitive revenue share payouts from referred active traders." },
      { icon: "clock", title: "Fast payouts", body: "Enjoy quick, regular payout options, depending on the program." },
      { icon: "wallet", title: "Seamless withdrawals", body: "Easily access your earned commission whenever you need it." },
      { icon: "shield", title: "A trusted partner", body: "Thaurus Ltd is licensed and regulated by the FSC Mauritius (GB22200432)." },
      { icon: "creatives", title: "Free creatives", body: "Download a range of promotional materials to support your campaigns." },
      { icon: "tracking", title: "Advanced tracking", body: "Monitor your performance with real-time analytics in your partner dashboard." },
      { icon: "support", title: "Support team", body: "You can count on our expert assistance when you need it." },
    ],
  },

  comparison: {
    eyebrow: "Comparison",
    title: "What's the difference between programs?",
    colA: "Thaurus IB Partners",
    colB: "Thaurus Affiliates",
    // TODO(ivan): insert approved rates / payout schedule where relevant.
    rows: [
      {
        label: "Payment timing",
        a: "Lifetime payouts, based on referred clients' trading volume.",
        b: "One-time, fixed payouts.",
      },
      {
        label: "Payout amount",
        a: "A share of revenue from referred clients' trades.",
        b: "Performance-based payout per unique qualified client who starts actively trading with Thaurus.",
      },
      {
        label: "Model",
        a: "Revenue share – earnings based on trading volume.",
        b: "CPA (Cost Per Action) – earnings based on a trader's first-time deposit and trading activity.",
      },
      {
        label: "Specialization",
        a: "Trading experts and introducing brokers.",
        b: "Finance content creators and media buyers.",
      },
    ],
    ctaA: "Become a partner",
    ctaB: "Become an affiliate",
  },

  steps: {
    eyebrow: "How it works",
    title: "Start earning in four simple steps",
    sub: "Earn commission based on the program.",
    stepLabel: "Step",
    items: [
      { title: "Register", body: "Sign up as a Thaurus affiliate or IB partner." },
      { title: "Refer a trader", body: "Introduce a new client to Thaurus using your partner link." },
      { title: "Client trades", body: "Wait until your introduced client starts trading." },
      { title: "You earn", body: "Receive commission based on the program." },
    ],
  },

  testimonials: {
    eyebrow: "Testimonials",
    title: "See what our partners say about us",
    // PLACEHOLDER SLOTS — replace with real partner quotes (never invent reviews).
    items: [
      { quote: "Partner feedback will appear here once provided.", author: "Partner name", role: "Thaurus IB Partner" },
      { quote: "Partner feedback will appear here once provided.", author: "Partner name", role: "Thaurus Affiliate" },
      { quote: "Partner feedback will appear here once provided.", author: "Partner name", role: "Thaurus IB Partner" },
    ],
    note: "Reviews are based on feedback from Thaurus partners. Individual experiences may vary.",
    prev: "Previous testimonials",
    next: "Next testimonials",
  },

  finalCta: {
    title: "Start earning today",
    cards: [
      { headline: "Competitive commissions", model: "Revenue share model", cta: "Become a partner", learnMore: "Learn more" },
      { headline: "Performance-based commissions", model: "CPA model", cta: "Become an affiliate", learnMore: "Learn more" },
    ],
  },
};

const es: AffiliateData = {
  hero: {
    title: "Maximiza tus ganancias",
    sub: "Gana comisiones competitivas de reparto de ingresos por referir traders a un bróker regulado.",
    cta: "Hazte socio",
    pills: ["Comisión ilimitada", "Pagos rápidos", "Soporte dedicado para socios"],
  },

  trusted: {
    eyebrow: "La confianza de traders en todo el mundo",
    title: "Refiere traders a un bróker en el que ya confían",
    stats: [
      { value: "4.4 / 5", label: "Valoración en Trustpilot" },
      { value: "4.6 / 5", label: "Valoración en Google" },
      { value: "120+", label: "Apariciones en medios globales" },
      { value: "FSC", label: "Licencia · GB22200432" },
    ],
  },

  programs: {
    eyebrow: "Elige tu asociación",
    title: "Gana más con nuestras asociaciones de alto rendimiento",
    cards: [
      {
        brand: "Thaurus",
        name: "IB Partners",
        model: "Modelo de reparto de ingresos",
        bullets: [
          "Benefíciate de pagos competitivos",
          "Construye un potencial de ingresos a largo plazo",
          "Gana comisiones según el volumen de trading de tus clientes referidos",
        ],
        cta: "Hazte socio",
        learnMore: "Saber más",
      },
      {
        brand: "Thaurus",
        name: "Affiliates",
        model: "Modelo CPA",
        bullets: [
          "CPA (coste por acción) competitivo",
          "Ganancias basadas en el rendimiento",
          "Gana comisión por cada cliente referido cualificado",
        ],
        cta: "Hazte afiliado",
        learnMore: "Saber más",
      },
    ],
  },

  benefits: {
    eyebrow: "Beneficios clave de cada programa",
    title: "¿Por qué asociarte con Thaurus?",
    items: [
      { icon: "percent", title: "Comisiones altas", body: "Gana pagos competitivos de reparto de ingresos por los traders activos referidos." },
      { icon: "clock", title: "Pagos rápidos", body: "Disfruta de opciones de pago rápidas y regulares, según el programa." },
      { icon: "wallet", title: "Retiros sin fricción", body: "Accede fácilmente a tu comisión ganada cuando la necesites." },
      { icon: "shield", title: "Un socio de confianza", body: "Thaurus Ltd está autorizada y regulada por la FSC de Mauricio (GB22200432)." },
      { icon: "creatives", title: "Creatividades gratis", body: "Descarga materiales promocionales para apoyar tus campañas." },
      { icon: "tracking", title: "Seguimiento avanzado", body: "Supervisa tu rendimiento con analíticas en tiempo real en tu panel de socio." },
      { icon: "support", title: "Equipo de soporte", body: "Cuenta con nuestra asistencia experta cuando la necesites." },
    ],
  },

  comparison: {
    eyebrow: "Comparación",
    title: "¿Cuál es la diferencia entre los programas?",
    colA: "Thaurus IB Partners",
    colB: "Thaurus Affiliates",
    rows: [
      { label: "Momento del pago", a: "Pagos de por vida, según el volumen de trading de los clientes referidos.", b: "Pagos únicos y fijos." },
      { label: "Importe del pago", a: "Una parte de los ingresos generados por las operaciones de los clientes referidos.", b: "Pago basado en el rendimiento por cada cliente cualificado único que empieza a operar activamente con Thaurus." },
      { label: "Modelo", a: "Reparto de ingresos: ganancias según el volumen de trading.", b: "CPA (coste por acción): ganancias según el primer depósito y la actividad de trading." },
      { label: "Especialización", a: "Expertos en trading e introducing brokers.", b: "Creadores de contenido financiero y media buyers." },
    ],
    ctaA: "Hazte socio",
    ctaB: "Hazte afiliado",
  },

  steps: {
    eyebrow: "Cómo funciona",
    title: "Empieza a ganar en cuatro pasos sencillos",
    sub: "Gana comisiones según el programa.",
    stepLabel: "Paso",
    items: [
      { title: "Regístrate", body: "Inscríbete como afiliado o IB partner de Thaurus." },
      { title: "Refiere a un trader", body: "Presenta un nuevo cliente a Thaurus con tu enlace de socio." },
      { title: "El cliente opera", body: "Espera a que tu cliente presentado empiece a operar." },
      { title: "Tú ganas", body: "Recibe comisiones según el programa." },
    ],
  },

  testimonials: {
    eyebrow: "Testimonios",
    title: "Qué dicen nuestros socios sobre nosotros",
    items: [
      { quote: "Aquí aparecerán los comentarios de los socios cuando estén disponibles.", author: "Nombre del socio", role: "IB Partner de Thaurus" },
      { quote: "Aquí aparecerán los comentarios de los socios cuando estén disponibles.", author: "Nombre del socio", role: "Afiliado de Thaurus" },
      { quote: "Aquí aparecerán los comentarios de los socios cuando estén disponibles.", author: "Nombre del socio", role: "IB Partner de Thaurus" },
    ],
    note: "Las reseñas se basan en comentarios de socios de Thaurus. Las experiencias individuales pueden variar.",
    prev: "Testimonios anteriores",
    next: "Siguientes testimonios",
  },

  finalCta: {
    title: "Empieza a ganar hoy",
    cards: [
      { headline: "Comisiones competitivas", model: "Modelo de reparto de ingresos", cta: "Hazte socio", learnMore: "Saber más" },
      { headline: "Comisiones basadas en el rendimiento", model: "Modelo CPA", cta: "Hazte afiliado", learnMore: "Saber más" },
    ],
  },
};

const DATA: Record<Locale, AffiliateData> = { en, es, pt: en, th: en, ar: en };

export function getAffiliate(locale: string): AffiliateData {
  return byLocale(DATA, locale);
}

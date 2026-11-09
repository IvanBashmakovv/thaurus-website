import type { AffiliateData } from "./types";

export const es: AffiliateData = {
  cta: "Hazte socio",
  nav: {
    items: [
      { label: "IB Partners", href: "#programs" },
      { label: "Afiliados", href: "#programs" },
      { label: "Respuestas", href: "#answers" },
      { label: "Cómo funciona", href: "#steps" },
      { label: "FAQ", href: "#faq" },
    ],
    language: "Idioma",
  },
  hero: {
    title: "Gana con cada trader que refieres",
    sub: "Revenue share o CPA de Thaurus Ltd, con licencia de la FSC de Mauricio. Tus traders operan en MetaTrader 5.",
    pills: [
      { icon: "shield", text: "Licencia FSC GB22200432" },
      { icon: "chart", text: "MetaTrader 5" },
      { icon: "percent", text: "Revenue share o CPA" },
    ],
  },
  press: { eyebrow: "Aparecemos en" },
  trusted: {
    eyebrow: "Cifras que los traders ya ven",
    title: "La marca a la que los envías",
    stats: [
      { num: 4.4, decimals: 1, suffix: " / 5", label: "Valoración en Trustpilot" },
      { num: 4.6, decimals: 1, suffix: " / 5", label: "Valoración en Google" },
      { num: 120, suffix: "+", label: "Apariciones en medios" },
      { text: "FSC", label: "Licencia GB22200432" },
    ],
    wikifx: "WikiFX",
    verified: "Verificado",
  },
  programs: {
    eyebrow: "Dos formas de ganar",
    title: "Elige el modelo para tu tráfico",
    compare: "Comparar los dos modelos",
    cards: [
      { name: "IB Partners", model: "Revenue share",
        bullets: ["Comisión sobre el volumen operado por tus clientes", "Se paga mientras el cliente opere", { todo: "tasa de revenue share" }] },
      { name: "Affiliates", model: "CPA",
        bullets: ["Importe fijo por cliente cualificado", "Se paga una vez, tras el primer depósito y la primera operación", { todo: "importe CPA por cliente" }] },
    ],
  },
  promote: {
    eyebrow: "Qué promocionas",
    title: "MetaTrader 5 y cinco clases de activos",
    body: "Tus referidos reciben la misma plataforma y las mismas cuentas que cualquier cliente de Thaurus.",
    facts: [
      "Forex, acciones, futuros, CFD y materias primas",
      "MT5 en escritorio, web y móvil",
      "Cuentas desde $50, en USD o EUR",
      "Cuenta demo gratuita",
      "Thaurus Ltd, licencia FSC GB22200432",
    ],
  },
  answers: {
    eyebrow: "Respuestas directas",
    title: "Lo primero que preguntan los socios",
    items: [
      { art: "trusted", title: "Quién te paga", body: "Thaurus Ltd, autorizada y regulada por la FSC de Mauricio (GB22200432). 8th Floor, Hennessy Tower, Pope Hennessy Street, Port Louis." },
      { art: "payouts", title: "Cómo cobras", body: { todo: "métodos de pago, mínimo y calendario" } },
      { art: "commissions", title: "Qué ganas", body: "Revenue share sobre el volumen operado o un CPA fijo por cliente cualificado. Tu tasa se confirma por escrito al aprobar tu cuenta." },
      { art: "tracking", title: "Cómo lo sigues", body: { todo: "confirmar panel de socio: enlaces, clics, registros, traders activos" } },
      { art: "creatives", title: "Con qué promocionas", body: { todo: "confirmar creatividades: banners, landings, pack de logos" } },
      { art: "support", title: "Quién te ayuda", body: "El equipo de socios en support@thaurus.com, o por teléfono en +44 121 225 8747 y +230 5297 0374." },
    ],
  },
  comparison: {
    eyebrow: "Cara a cara",
    title: "Revenue share frente a CPA",
    colA: "IB Partners",
    colB: "Affiliates",
    rows: [
      { label: "Cómo ganas", a: "Una parte de los ingresos que generan tus clientes", b: "Un importe fijo por cliente cualificado" },
      { label: "Cuándo", a: "Recurrente, mientras el cliente opere", b: "Una vez, tras el primer depósito y actividad de trading" },
      { label: "Tasa", a: { todo: "tasa de revenue share" }, b: { todo: "importe CPA" } },
      { label: "Ideal para", a: "Introducing brokers, formadores de trading, comunidades", b: "Media buyers, creadores de contenido financiero" },
    ],
  },
  steps: {
    eyebrow: "Cómo funciona",
    title: "Cuatro pasos hasta tu primera comisión",
    stepLabel: "Paso",
    items: [
      { title: "Postula", body: "Rellena el formulario de abajo. La aprobación llega por email." },
      { title: "Comparte tu enlace", body: "Usa tu enlace de seguimiento en tu web, canal o anuncios." },
      { title: "Tu cliente opera", body: "Abre cuenta, deposita y empieza a operar en MT5." },
      { title: "Cobras", body: "La comisión se abona en tu cuenta de socio." },
    ],
  },
  testimonials: {
    eyebrow: "Socios",
    title: "Lo que dicen los socios",
    items: [],
    pending: "Aquí van citas reales de socios, con nombre y cargo. No se publica nada hasta que cada socio confirme sus palabras.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Preguntas habituales",
    items: [
      { q: "¿Quién puede unirse?", a: "Introducing brokers, formadores de trading, comunidades, media buyers y dueños de webs con una audiencia interesada en el trading. Postula abajo; el equipo revisa cada solicitud." },
      { q: "¿Cómo sigo a mis referidos?", a: "Recibes un enlace de seguimiento personal. Los detalles de los informes se confirman al aprobar tu cuenta." },
      { q: "¿Cómo y cuándo se pagan las comisiones?", a: "Los métodos de pago, el mínimo y el calendario se confirman por escrito al aprobar tu cuenta." },
      { q: "¿Está regulado Thaurus?", a: "Sí. Thaurus Ltd está autorizada y regulada por la Comisión de Servicios Financieros de Mauricio (FSC) con la licencia GB22200432, como Investment Dealer SEC-2.1B." },
      { q: "¿Tiene algún coste?", a: "No. Unirse es gratis." },
    ],
  },
  apply: {
    eyebrow: "Solicitud",
    title: "Postula al programa",
    sub: "Cuéntanos sobre tu audiencia. El equipo de socios responde por email.",
    name: "Nombre completo", email: "Email",
    contact: "Teléfono o Telegram", contactHint: "Cómo debemos contactarte",
    traffic: "Web, canal o fuente de tráfico", trafficHint: "Dónde promocionarás Thaurus",
    program: "Programa", programIb: "IB Partners (revenue share)", programAffiliate: "Affiliates (CPA)",
    message: "Mensaje (opcional)",
    submit: "Enviar solicitud", sending: "Enviando…",
    successTitle: "Solicitud recibida", successBody: "El equipo de socios responderá por email.",
    errorHint: "Revisa los campos marcados.",
    errors: { name: "Escribe tu nombre completo.", email: "Escribe un email válido.", contact: "Dinos cómo contactarte.", traffic: "Dinos dónde promocionarás.", program: "Elige un programa." },
    // Compliance text stays verbatim in English until a translation is approved.
    risk: "Trading foreign exchange on margin carries a high level of risk, and may not be suitable for all investors.",
  },
};

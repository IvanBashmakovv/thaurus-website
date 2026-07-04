/**
 * Account types — figures VERBATIM from audit §2.6. Numbers are kept canonical
 * across locales ($1,500, 1.8 pips, 1:100). Only labels/descriptions translated.
 * Recommended plan: Prestige Plus. Machine-translated — needs native review.
 */
import type { Locale } from "@/i18n/routing";
import { byLocale } from "@/lib/i18n-content";

export type Plan = {
  id: string;
  name: string;
  tagline: string;
  minDeposit: string;
  oldDeposit: string | null;
  badge: string | null;
  recommended: boolean;
  highlights: string[];
};
type Row = { label: string; values: [string, string, string] };

export type AccountUi = {
  heroEyebrow: string;
  heroTitle: string;
  heroIntro: string;
  recommended: string;
  minDeposit: string;
  open: (name: string) => string;
  riskNote: string;
  compareEyebrow: string;
  compareTitle: string;
  compareSub: string;
  featureHeader: string;
  midTitle: string;
  midSub: string;
  finalTitle: string;
  finalSub: string;
  tryDemo: string;
  contactSupport: string;
};

export const planNames: [string, string, string] = ["Bullion Power", "Prestige Plus", "Royal Elite"];

const plansEN: Plan[] = [
  { id: "bullion-power", name: "Bullion Power", tagline: "Start trading with a low entry point and the essential tools.", minDeposit: "$50", oldDeposit: null, badge: null, recommended: false, highlights: ["Leverage up to 1:100", "Spread from 1.8 pips", "No commission", "5 free withdrawals / month", "Free access to advanced tools"] },
  { id: "prestige-plus", name: "Prestige Plus", tagline: "Tighter spreads and a deposit bonus.", minDeposit: "$1,500", oldDeposit: "$3,000", badge: "Limited offer", recommended: true, highlights: ["Deposit bonus up to 30%", "Leverage up to 1:200", "Spread from 0.5 pips", "Commission 6 USD/lot", "Unlimited withdrawals"] },
  { id: "royal-elite", name: "Royal Elite", tagline: "Our finest pricing and tightest spreads.", minDeposit: "$25,000", oldDeposit: "$50,000", badge: "Limited offer", recommended: false, highlights: ["Individual leverage", "Spread from 0.2 pips", "Commission 3 USD/lot", "Unlimited withdrawals", "Priority access to new products"] },
];
const comparisonEN: Row[] = [
  { label: "Minimum deposit", values: ["$50", "$1,500", "$25,000"] },
  { label: "Deposit bonus", values: ["—", "Up to 30%", "—"] },
  { label: "Leverage", values: ["Up to 1:100", "Up to 1:200", "Individual"] },
  { label: "Markets", values: ["Forex, Metals, Energies, Stocks, Indices", "Forex, Metals, Energies, Indices, US Shares", "Forex, Metals, Energies, Indices, US Shares"] },
  { label: "Spread from", values: ["1.8 pips", "0.5 pips", "0.2 pips"] },
  { label: "Commission", values: ["No commission", "6 USD/lot", "3 USD/lot"] },
  { label: "Account currency", values: ["USD / EUR", "USD / EUR", "USD / EUR"] },
  { label: "Demo account", values: ["Yes", "Yes", "Yes"] },
  { label: "Margin call", values: ["100%", "100%", "100%"] },
  { label: "Stop out", values: ["30%", "30%", "20%"] },
  { label: "Withdrawals", values: ["5 free / month", "Unlimited", "Unlimited"] },
];

const plansES: Plan[] = [
  { id: "bullion-power", name: "Bullion Power", tagline: "Empieza a operar con una entrada baja y las herramientas esenciales.", minDeposit: "$50", oldDeposit: null, badge: null, recommended: false, highlights: ["Apalancamiento hasta 1:100", "Spread desde 1.8 pips", "Sin comisión", "5 retiros gratis / mes", "Acceso gratuito a herramientas avanzadas"] },
  { id: "prestige-plus", name: "Prestige Plus", tagline: "Spreads más ajustados y bono de depósito.", minDeposit: "$1,500", oldDeposit: "$3,000", badge: "Oferta limitada", recommended: true, highlights: ["Bono de depósito hasta 30%", "Apalancamiento hasta 1:200", "Spread desde 0.5 pips", "Comisión 6 USD/lote", "Retiros ilimitados"] },
  { id: "royal-elite", name: "Royal Elite", tagline: "Nuestros mejores precios y los spreads más ajustados.", minDeposit: "$25,000", oldDeposit: "$50,000", badge: "Oferta limitada", recommended: false, highlights: ["Apalancamiento individual", "Spread desde 0.2 pips", "Comisión 3 USD/lote", "Retiros ilimitados", "Acceso prioritario a nuevos productos"] },
];
const comparisonES: Row[] = [
  { label: "Depósito mínimo", values: ["$50", "$1,500", "$25,000"] },
  { label: "Bono de depósito", values: ["—", "Hasta 30%", "—"] },
  { label: "Apalancamiento", values: ["Hasta 1:100", "Hasta 1:200", "Individual"] },
  { label: "Mercados", values: ["Forex, Metales, Energías, Acciones, Índices", "Forex, Metales, Energías, Índices, Acciones de EE. UU.", "Forex, Metales, Energías, Índices, Acciones de EE. UU."] },
  { label: "Spread desde", values: ["1.8 pips", "0.5 pips", "0.2 pips"] },
  { label: "Comisión", values: ["Sin comisión", "6 USD/lote", "3 USD/lote"] },
  { label: "Moneda de la cuenta", values: ["USD / EUR", "USD / EUR", "USD / EUR"] },
  { label: "Cuenta demo", values: ["Yes", "Yes", "Yes"] },
  { label: "Margin call", values: ["100%", "100%", "100%"] },
  { label: "Stop out", values: ["30%", "30%", "20%"] },
  { label: "Retiros", values: ["5 gratis / mes", "Ilimitados", "Ilimitados"] },
];

const PLANS: Record<Locale, Plan[]> = { en: plansEN, es: plansES, pt: plansEN, th: plansEN, ar: plansEN };
const COMPARISON: Record<Locale, Row[]> = { en: comparisonEN, es: comparisonES, pt: comparisonEN, th: comparisonEN, ar: comparisonEN };

const uiEN: AccountUi = { heroEyebrow: "Pricing", heroTitle: "Choose the account that fits your goals", heroIntro: "Three account types, one regulated broker. Transparent spreads, clear commissions and benefits that scale with you.", recommended: "Recommended", minDeposit: "Minimum deposit", open: (n) => `Open ${n}`, riskNote: "Trading involves risk. Limited offers may change — check current terms before depositing.", compareEyebrow: "Compare", compareTitle: "Full feature comparison", compareSub: "Every detail, side by side — the exact terms for each account.", featureHeader: "Feature", midTitle: "Open your account in minutes", midSub: "Pick a plan and start trading on MetaTrader 5, or try a free demo first.", finalTitle: "Not sure which account is right?", finalSub: "Start with a free demo, or talk to our team — they’ll help you pick.", tryDemo: "Try a demo", contactSupport: "Contact support" };
const uiES: AccountUi = { heroEyebrow: "Precios", heroTitle: "Elige la cuenta que se ajusta a tus objetivos", heroIntro: "Tres tipos de cuenta, un bróker regulado. Spreads transparentes, comisiones claras y ventajas que crecen contigo.", recommended: "Recomendado", minDeposit: "Depósito mínimo", open: (n) => `Abrir ${n}`, riskNote: "Operar conlleva riesgo. Las ofertas limitadas pueden cambiar — revisa los términos vigentes antes de depositar.", compareEyebrow: "Comparar", compareTitle: "Comparación completa de características", compareSub: "Cada detalle, lado a lado — los términos exactos de cada cuenta.", featureHeader: "Característica", midTitle: "Abre tu cuenta en minutos", midSub: "Elige un plan y empieza a operar en MetaTrader 5, o prueba antes una demo gratuita.", finalTitle: "¿No sabes qué cuenta elegir?", finalSub: "Empieza con una demo gratuita o habla con nuestro equipo — te ayudarán a elegir.", tryDemo: "Probar demo", contactSupport: "Contactar con soporte" };
const uiPT: AccountUi = { heroEyebrow: "Preços", heroTitle: "Escolha a conta ideal para seus objetivos", heroIntro: "Três tipos de conta, uma corretora regulada. Spreads transparentes, comissões claras e vantagens que crescem com você.", recommended: "Recomendado", minDeposit: "Depósito mínimo", open: (n) => `Abrir ${n}`, riskNote: "Operar envolve risco. Ofertas limitadas podem mudar — confira os termos vigentes antes de depositar.", compareEyebrow: "Comparar", compareTitle: "Comparação completa de recursos", compareSub: "Cada detalhe, lado a lado — os termos exatos de cada conta.", featureHeader: "Recurso", midTitle: "Abra sua conta em minutos", midSub: "Escolha um plano e comece a negociar no MetaTrader 5, ou teste antes uma demo gratuita.", finalTitle: "Não sabe qual conta escolher?", finalSub: "Comece com uma demo gratuita ou fale com nossa equipe — eles ajudam você a escolher.", tryDemo: "Testar demo", contactSupport: "Falar com o suporte" };
const uiTH: AccountUi = { heroEyebrow: "ราคา", heroTitle: "เลือกบัญชีที่เหมาะกับเป้าหมายของคุณ", heroIntro: "สามประเภทบัญชี หนึ่งโบรกเกอร์ที่อยู่ภายใต้การกำกับดูแล สเปรดโปร่งใส ค่าคอมมิชชันชัดเจน และสิทธิประโยชน์ที่เติบโตไปกับคุณ", recommended: "แนะนำ", minDeposit: "เงินฝากขั้นต่ำ", open: (n) => `เปิด ${n}`, riskNote: "การเทรดมีความเสี่ยง ข้อเสนอจำกัดอาจเปลี่ยนแปลง — ตรวจสอบเงื่อนไขปัจจุบันก่อนฝากเงิน", compareEyebrow: "เปรียบเทียบ", compareTitle: "เปรียบเทียบคุณสมบัติทั้งหมด", compareSub: "ทุกรายละเอียดเทียบกัน — เงื่อนไขที่แน่นอนของแต่ละบัญชี", featureHeader: "คุณสมบัติ", midTitle: "เปิดบัญชีได้ในไม่กี่นาที", midSub: "เลือกแพ็กเกจแล้วเริ่มเทรดบน MetaTrader 5 หรือทดลองเดโมฟรีก่อน", finalTitle: "ไม่แน่ใจว่าบัญชีไหนเหมาะ?", finalSub: "เริ่มด้วยเดโมฟรี หรือคุยกับทีมงานของเรา — เราจะช่วยคุณเลือก", tryDemo: "ทดลองเดโม", contactSupport: "ติดต่อฝ่ายสนับสนุน" };
const uiAR: AccountUi = { heroEyebrow: "الأسعار", heroTitle: "اختر الحساب الذي يناسب أهدافك", heroIntro: "ثلاثة أنواع حسابات، ووسيط مرخّص واحد. فروق أسعار شفّافة، وعمولات واضحة، ومزايا تكبر معك.", recommended: "موصى به", minDeposit: "الحد الأدنى للإيداع", open: (n) => `افتح ${n}`, riskNote: "ينطوي التداول على مخاطر. قد تتغيّر العروض المحدودة — تحقّق من الشروط الحالية قبل الإيداع.", compareEyebrow: "قارن", compareTitle: "مقارنة كاملة للمزايا", compareSub: "كل التفاصيل جنبًا إلى جنب — الشروط الدقيقة لكل حساب.", featureHeader: "الميزة", midTitle: "افتح حسابك في دقائق", midSub: "اختر خطة وابدأ التداول على MetaTrader 5، أو جرّب حسابًا تجريبيًا مجانيًا أولًا.", finalTitle: "غير متأكد أي حساب يناسبك؟", finalSub: "ابدأ بحساب تجريبي مجاني، أو تحدّث إلى فريقنا — سيساعدونك على الاختيار.", tryDemo: "تجربة حساب تجريبي", contactSupport: "تواصل مع الدعم" };
const ACCOUNT_UI: Record<Locale, AccountUi> = { en: uiEN, es: uiES, pt: uiPT, th: uiTH, ar: uiAR };

export const plans = plansEN;
export const comparison = comparisonEN;

export function getPlans(locale: string): Plan[] {
  return byLocale(PLANS, locale);
}
export function getComparison(locale: string): Row[] {
  return byLocale(COMPARISON, locale);
}
export function getAccountUi(locale: string): AccountUi {
  return byLocale(ACCOUNT_UI, locale);
}

/** Standalone FAQ page content — localized (en/es; pt/th/ar fall back to en).
 *  Machine-translated copy SHOULD BE REVIEWED by a native speaker. */
import type { FaqItem } from "@/components/ui/FaqAccordion";
import type { Locale } from "@/i18n/routing";
import { byLocale } from "@/lib/i18n-content";

export type FaqCategory = { title: string; items: FaqItem[] };

export type FaqUi = {
  heroEyebrow: string;
  heroTitle: string;
  heroIntro: string;
  stillTitle: string;
  stillSub: string;
  emailSupport: string;
  openAccount: string;
  ctaTitle: string;
  ctaSub: string;
};

const en: FaqCategory[] = [
  { title: "Getting started", items: [
    { q: "What is Thaurus?", a: "Thaurus is a regulated multi-asset broker that lets you trade forex, stocks, futures, CFDs and commodities on MetaTrader 5. Thaurus Ltd is licensed and regulated by the FSC Mauritius (license GB22200432)." },
    { q: "How do I open an account?", a: "Register online, verify your identity (KYC), fund your account in USD or EUR, and start trading on MetaTrader 5. Most verifications are reviewed within 24 hours." },
    { q: "Do I need experience to start?", a: "No. You can open a free demo account to practise with virtual funds, and use our courses, webinars and mentors to learn before trading live." },
    { q: "Is there a demo account?", a: "Yes. Every account type includes a demo so you can test strategies and the MT5 platform with virtual funds." },
  ]},
  { title: "Accounts & funding", items: [
    { q: "What account types are available?", a: "Three: Bullion Power (from $50), Prestige Plus (from $1,500, with a deposit bonus) and Royal Elite (from $25,000, with the tightest spreads)." },
    { q: "What is the minimum deposit?", a: "From $50 on Bullion Power. Prestige Plus starts at $1,500 and Royal Elite at $25,000." },
    { q: "Which currencies can I use?", a: "Accounts are available in USD and EUR." },
    { q: "How do withdrawals work?", a: "Bullion Power includes 5 free withdrawals per month; Prestige Plus and Royal Elite offer unlimited withdrawals. Processing follows our standard verification checks." },
  ]},
  { title: "Platform & trading", items: [
    { q: "What platform does Thaurus use?", a: "MetaTrader 5 (MT5) — available on desktop, web and mobile, with advanced charting, algorithmic trading and fast order management." },
    { q: "Which markets can I trade?", a: "Forex, stocks, futures, CFDs and commodities — including metals, energies and indices — all from one account." },
    { q: "What trading tools are included?", a: "Real-time market data, an economic calendar, trading signals and six free calculators (heatmap, margin, stop-loss, CFD profit/loss, pivot point and Fibonacci)." },
    { q: "How fast is order execution?", a: "Orders are routed for fast, reliable execution on MT5. Actual fill speed depends on market liquidity, volatility and your connection." },
  ]},
  { title: "Safety & regulation", items: [
    { q: "Is Thaurus regulated?", a: "Yes. Thaurus Ltd is licensed and regulated by the Financial Services Commission, Mauritius (FSC) under license GB22200432, as a SEC-2.1B Investment Dealer. You can verify this on the FSC public register." },
    { q: "How are my funds protected?", a: "Client funds are held in segregated accounts separate from company capital, operations are independently audited, and the firm operates under continuous FSC supervision." },
    { q: "How can I verify the license?", a: "Open the FSC Mauritius register of licensees, search for “Thaurus”, and confirm license GB22200432 and the SEC-2.1B category." },
  ]},
];

const es: FaqCategory[] = [
  { title: "Primeros pasos", items: [
    { q: "¿Qué es Thaurus?", a: "Thaurus es un bróker multiactivo regulado que te permite operar Forex, acciones, futuros, CFD y materias primas en MetaTrader 5. Thaurus Ltd está autorizada y regulada por la FSC de Mauricio (licencia GB22200432)." },
    { q: "¿Cómo abro una cuenta?", a: "Regístrate en línea, verifica tu identidad (KYC), deposita en USD o EUR y empieza a operar en MetaTrader 5. La mayoría de las verificaciones se revisan en 24 horas." },
    { q: "¿Necesito experiencia para empezar?", a: "No. Puedes abrir una cuenta demo gratuita para practicar con fondos virtuales y usar nuestros cursos, webinars y mentores para aprender antes de operar en real." },
    { q: "¿Hay cuenta demo?", a: "Sí. Cada tipo de cuenta incluye una demo para probar estrategias y la plataforma MT5 con fondos virtuales." },
  ]},
  { title: "Cuentas y fondos", items: [
    { q: "¿Qué tipos de cuenta hay?", a: "Tres: Bullion Power (desde $50), Prestige Plus (desde $1,500, con bono de depósito) y Royal Elite (desde $25,000, con los spreads más ajustados)." },
    { q: "¿Cuál es el depósito mínimo?", a: "Desde $50 en Bullion Power. Prestige Plus desde $1,500 y Royal Elite desde $25,000." },
    { q: "¿Qué divisas puedo usar?", a: "Las cuentas están disponibles en USD y EUR." },
    { q: "¿Cómo funcionan los retiros?", a: "Bullion Power incluye 5 retiros gratis al mes; Prestige Plus y Royal Elite ofrecen retiros ilimitados. El procesamiento sigue nuestras verificaciones estándar." },
  ]},
  { title: "Plataforma y trading", items: [
    { q: "¿Qué plataforma usa Thaurus?", a: "MetaTrader 5 (MT5), disponible en escritorio, web y móvil, con gráficos avanzados, trading algorítmico y gestión rápida de órdenes." },
    { q: "¿Qué mercados puedo operar?", a: "Forex, acciones, futuros, CFD y materias primas, incluidos metales, energías e índices, todo desde una cuenta." },
    { q: "¿Qué herramientas de trading se incluyen?", a: "Datos de mercado en tiempo real, calendario económico, señales de trading y seis calculadoras gratuitas (heatmap, margen, stop-loss, ganancias/pérdidas de CFD, puntos pivote y Fibonacci)." },
    { q: "¿Qué tan rápida es la ejecución?", a: "Las órdenes se enrutan para una ejecución rápida y fiable en MT5. La velocidad real depende de la liquidez, la volatilidad y tu conexión." },
  ]},
  { title: "Seguridad y regulación", items: [
    { q: "¿Está regulado Thaurus?", a: "Sí. Thaurus Ltd está autorizada y regulada por la Comisión de Servicios Financieros de Mauricio (FSC) con la licencia GB22200432, como Investment Dealer SEC-2.1B. Puedes verificarlo en el registro público de la FSC." },
    { q: "¿Cómo se protegen mis fondos?", a: "Los fondos de los clientes se mantienen en cuentas segregadas, separadas del capital de la empresa; las operaciones se auditan de forma independiente y la firma opera bajo supervisión continua de la FSC." },
    { q: "¿Cómo verifico la licencia?", a: "Abre el registro de licenciatarios de la FSC de Mauricio, busca «Thaurus» y confirma la licencia GB22200432 y la categoría SEC-2.1B." },
  ]},
];

const CATS: Record<Locale, FaqCategory[]> = { en, es, pt: en, th: en, ar: en };

const uiEN: FaqUi = { heroEyebrow: "Help centre", heroTitle: "Frequently asked questions", heroIntro: "Everything you need to know about trading with a regulated broker. Can’t find an answer? Our team is one message away.", stillTitle: "Still have questions?", stillSub: "Reach our multilingual support team — we typically reply within 24 hours.", emailSupport: "Email support", openAccount: "Open account", ctaTitle: "Ready to start trading?", ctaSub: "Open a regulated Thaurus account on MetaTrader 5, or try a free demo first." };
const uiES: FaqUi = { heroEyebrow: "Centro de ayuda", heroTitle: "Preguntas frecuentes", heroIntro: "Todo lo que necesitas saber sobre operar con un bróker regulado. ¿No encuentras la respuesta? Nuestro equipo está a un mensaje de distancia.", stillTitle: "¿Aún tienes dudas?", stillSub: "Escribe a nuestro equipo de soporte multilingüe — solemos responder en 24 horas.", emailSupport: "Escribir al soporte", openAccount: "Abrir cuenta", ctaTitle: "¿Listo para empezar a operar?", ctaSub: "Abre una cuenta regulada de Thaurus en MetaTrader 5 o prueba primero una demo gratuita." };
const uiPT: FaqUi = { heroEyebrow: "Central de ajuda", heroTitle: "Perguntas frequentes", heroIntro: "Tudo o que você precisa saber sobre operar com uma corretora regulada. Não achou a resposta? Nossa equipe está a uma mensagem de distância.", stillTitle: "Ainda tem dúvidas?", stillSub: "Fale com nossa equipe de suporte multilíngue — normalmente respondemos em 24 horas.", emailSupport: "Falar com o suporte", openAccount: "Abrir conta", ctaTitle: "Pronto para começar a operar?", ctaSub: "Abra uma conta regulada da Thaurus no MetaTrader 5 ou teste antes uma demo gratuita." };
const uiTH: FaqUi = { heroEyebrow: "ศูนย์ช่วยเหลือ", heroTitle: "คำถามที่พบบ่อย", heroIntro: "ทุกสิ่งที่คุณควรรู้เกี่ยวกับการเทรดกับโบรกเกอร์ที่อยู่ภายใต้การกำกับดูแล หาคำตอบไม่เจอใช่ไหม? ทีมงานของเราอยู่ห่างเพียงข้อความเดียว", stillTitle: "ยังมีคำถามอยู่ไหม?", stillSub: "ติดต่อทีมสนับสนุนหลายภาษาของเรา — โดยทั่วไปเราตอบกลับภายใน 24 ชั่วโมง", emailSupport: "อีเมลถึงฝ่ายสนับสนุน", openAccount: "เปิดบัญชี", ctaTitle: "พร้อมเริ่มเทรดหรือยัง?", ctaSub: "เปิดบัญชี Thaurus ที่อยู่ภายใต้การกำกับดูแลบน MetaTrader 5 หรือทดลองเดโมฟรีก่อน" };
const uiAR: FaqUi = { heroEyebrow: "مركز المساعدة", heroTitle: "الأسئلة الشائعة", heroIntro: "كل ما تحتاج معرفته عن التداول مع وسيط مرخّص. لم تجد إجابة؟ فريقنا على بُعد رسالة واحدة.", stillTitle: "ما زالت لديك أسئلة؟", stillSub: "تواصل مع فريق الدعم متعدد اللغات لدينا — نردّ عادةً خلال 24 ساعة.", emailSupport: "راسل الدعم", openAccount: "فتح حساب", ctaTitle: "هل أنت مستعد لبدء التداول؟", ctaSub: "افتح حساب Thaurus مرخّصًا على MetaTrader 5، أو جرّب حسابًا تجريبيًا مجانيًا أولًا." };
const FAQ_UI: Record<Locale, FaqUi> = { en: uiEN, es: uiES, pt: uiPT, th: uiTH, ar: uiAR };

export const faqCategories = en;
export const allFaqItems = en.flatMap((c) => c.items);

export function getFaqCategories(locale: string): FaqCategory[] {
  return byLocale(CATS, locale);
}
export function getAllFaqItems(locale: string): FaqItem[] {
  return getFaqCategories(locale).flatMap((c) => c.items);
}
export function getFaqUi(locale: string): FaqUi {
  return byLocale(FAQ_UI, locale);
}

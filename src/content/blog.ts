/** Blog content — localized (en/es; pt/th/ar fall back to en article bodies).
 *  Machine-translated; needs native review before go-live. */
import type { Locale } from "@/i18n/routing";
import { byLocale } from "@/lib/i18n-content";

export type Section = { heading?: string; paragraphs: string[]; bullets?: string[] };
export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readingMinutes: number;
  tag: string;
  sections: Section[];
};

export type BlogUi = {
  feedEyebrow: string;
  feedTitle: string;
  feedIntro: string;
  minRead: string;
  ctaTitle: string;
  ctaSub: string;
  relatedTitle: string;
  articleCtaTitle: string;
  articleCtaSub: string;
  openAccount: string;
  tryDemo: string;
};

const en: Article[] = [
  {
    slug: "why-thaurus-chose-metatrader-5",
    title: "Why Thaurus Chose MetaTrader 5 (MT5)",
    excerpt: "MetaTrader 5 is the engine behind every Thaurus account. Here’s why we chose it — and what it means for your trading.",
    author: "Thaurus Research", date: "2026-05-20", readingMinutes: 5, tag: "Platform",
    sections: [
      { paragraphs: ["When we built Thaurus, the platform decision was one of the most important we made. We chose MetaTrader 5 (MT5) — the industry-standard, multi-asset trading platform used by millions of traders worldwide. Here’s the reasoning behind that choice."] },
      { heading: "A true multi-asset platform", paragraphs: ["Unlike its predecessor, MT5 was designed from the ground up to handle more than just forex. It supports forex, stocks, futures, CFDs and commodities in a single environment — which maps perfectly to the five markets Thaurus offers. One login, every market."] },
      { heading: "Professional-grade analysis", paragraphs: ["MT5 ships with advanced charting and a deep toolkit for technical analysis:"], bullets: ["80+ built-in technical indicators and analytical objects", "21 timeframes, from one minute to one month", "Depth of Market (DOM) and one-click trading", "An economic calendar built into the terminal"] },
      { heading: "Automation and algorithmic trading", paragraphs: ["MT5 includes the MQL5 language and a strategy tester, so traders can build, back-test and run Expert Advisors (EAs) to automate their strategies. Whether you trade manually or algorithmically, the platform supports your workflow."] },
      { heading: "Everywhere you trade", paragraphs: ["MT5 is available on desktop, web and mobile, with your account synced across all of them. Open a position on your laptop and manage it from your phone — the experience is consistent and reliable."] },
      { heading: "The bottom line", paragraphs: ["MT5 gives Thaurus clients a powerful, trusted and familiar platform that scales from first trade to advanced strategy. Combined with our regulated foundation and real human support, it’s a setup we’re confident putting our name behind."] },
    ],
  },
  {
    slug: "what-is-leverage-beginners-guide",
    title: "What Is Leverage? A Beginner’s Guide",
    excerpt: "Leverage lets you control a larger position with a smaller deposit. Understand how it works — and how to use it responsibly.",
    author: "Thaurus Research", date: "2026-05-28", readingMinutes: 4, tag: "Education",
    sections: [
      { paragraphs: ["Leverage is one of the most powerful — and most misunderstood — tools in trading. Used wisely it can make your capital more efficient; used carelessly it can amplify losses. Here’s what every beginner should know."] },
      { heading: "How leverage works", paragraphs: ["Leverage lets you open a position larger than your account balance by putting down a fraction of the value (the margin). For example, 1:100 leverage means $1,000 of margin can control a $100,000 position. The same price move is magnified relative to your deposit."] },
      { heading: "The double-edged sword", paragraphs: ["Because leverage magnifies both gains and losses, risk management is essential. Always use a stop-loss, size your positions sensibly, and never risk more than you can afford to lose. Our stop-loss and margin calculators can help you plan."] },
      { heading: "Leverage at Thaurus", paragraphs: ["Leverage depends on your account type — up to 1:100 on Bullion Power and up to 1:200 on Prestige Plus, with individual terms on Royal Elite. Start on a demo account to get comfortable before trading live."] },
    ],
  },
  {
    slug: "understanding-forex-spreads",
    title: "Understanding Forex Spreads",
    excerpt: "The spread is the most common trading cost in forex. Learn what it is, why it changes, and how to keep costs low.",
    author: "Thaurus Research", date: "2026-06-05", readingMinutes: 4, tag: "Education",
    sections: [
      { paragraphs: ["If you trade forex, the spread is a cost you’ll meet on every position. Understanding it helps you trade more efficiently and choose the right account."] },
      { heading: "What is the spread?", paragraphs: ["The spread is the difference between the bid (sell) and ask (buy) price of a currency pair, measured in pips. It’s effectively the cost of entering a trade — you start each position slightly in the red by the size of the spread."] },
      { heading: "Why spreads change", paragraphs: ["Spreads widen and tighten with market liquidity and volatility. Major pairs during active sessions usually have the tightest spreads; exotic pairs and news events can widen them considerably."] },
      { heading: "Lower spreads at Thaurus", paragraphs: ["Spreads at Thaurus start from 1.8 pips on Bullion Power, 0.5 pips on Prestige Plus and 0.2 pips on Royal Elite. If you trade frequently, a tighter-spread account can meaningfully reduce your costs."] },
    ],
  },
];

const es: Article[] = [
  {
    slug: "why-thaurus-chose-metatrader-5",
    title: "Por qué Thaurus eligió MetaTrader 5 (MT5)",
    excerpt: "MetaTrader 5 es el motor de cada cuenta de Thaurus. Aquí te explicamos por qué lo elegimos — y qué significa para tu trading.",
    author: "Thaurus Research", date: "2026-05-20", readingMinutes: 5, tag: "Plataforma",
    sections: [
      { paragraphs: ["Cuando construimos Thaurus, la decisión sobre la plataforma fue una de las más importantes. Elegimos MetaTrader 5 (MT5), la plataforma multiactivo estándar del sector que usan millones de traders en todo el mundo. Este es el razonamiento detrás de esa elección."] },
      { heading: "Una verdadera plataforma multiactivo", paragraphs: ["A diferencia de su predecesora, MT5 se diseñó desde cero para manejar mucho más que Forex. Admite Forex, acciones, futuros, CFD y materias primas en un solo entorno, lo que encaja perfectamente con los cinco mercados que ofrece Thaurus. Un inicio de sesión, todos los mercados."] },
      { heading: "Análisis de nivel profesional", paragraphs: ["MT5 incluye gráficos avanzados y un completo conjunto de herramientas de análisis técnico:"], bullets: ["Más de 80 indicadores técnicos y objetos analíticos integrados", "21 marcos temporales, de un minuto a un mes", "Profundidad de mercado (DOM) y trading con un clic", "Un calendario económico integrado en la terminal"] },
      { heading: "Automatización y trading algorítmico", paragraphs: ["MT5 incluye el lenguaje MQL5 y un probador de estrategias, para que los traders puedan crear, hacer back-test y ejecutar Asesores Expertos (EA) que automaticen sus estrategias. Tanto si operas manual como algorítmicamente, la plataforma se adapta a tu flujo de trabajo."] },
      { heading: "Donde sea que operes", paragraphs: ["MT5 está disponible en escritorio, web y móvil, con tu cuenta sincronizada entre todos ellos. Abre una posición en tu portátil y gestiónala desde el móvil — la experiencia es consistente y fiable."] },
      { heading: "En resumen", paragraphs: ["MT5 ofrece a los clientes de Thaurus una plataforma potente, fiable y familiar que escala desde la primera operación hasta la estrategia avanzada. Junto con nuestra base regulada y la atención humana real, es una configuración que respaldamos con confianza."] },
    ],
  },
  {
    slug: "what-is-leverage-beginners-guide",
    title: "¿Qué es el apalancamiento? Guía para principiantes",
    excerpt: "El apalancamiento te permite controlar una posición mayor con un depósito menor. Entiende cómo funciona — y cómo usarlo de forma responsable.",
    author: "Thaurus Research", date: "2026-05-28", readingMinutes: 4, tag: "Educación",
    sections: [
      { paragraphs: ["El apalancamiento es una de las herramientas más potentes — y más malinterpretadas — del trading. Usado con criterio, hace tu capital más eficiente; usado a la ligera, puede amplificar las pérdidas. Esto es lo que todo principiante debería saber."] },
      { heading: "Cómo funciona el apalancamiento", paragraphs: ["El apalancamiento te permite abrir una posición mayor que tu saldo aportando una fracción del valor (el margen). Por ejemplo, un apalancamiento 1:100 significa que $1,000 de margen pueden controlar una posición de $100,000. El mismo movimiento de precio se magnifica respecto a tu depósito."] },
      { heading: "Un arma de doble filo", paragraphs: ["Como el apalancamiento magnifica tanto las ganancias como las pérdidas, la gestión del riesgo es esencial. Usa siempre un stop-loss, dimensiona tus posiciones con sensatez y nunca arriesgues más de lo que puedas permitirte perder. Nuestras calculadoras de stop-loss y de margen te ayudan a planificar."] },
      { heading: "Apalancamiento en Thaurus", paragraphs: ["El apalancamiento depende de tu tipo de cuenta — hasta 1:100 en Bullion Power y hasta 1:200 en Prestige Plus, con términos individuales en Royal Elite. Empieza en una cuenta demo para tomar confianza antes de operar en real."] },
    ],
  },
  {
    slug: "understanding-forex-spreads",
    title: "Entender los spreads en Forex",
    excerpt: "El spread es el coste de trading más común en Forex. Aprende qué es, por qué cambia y cómo mantener los costes bajos.",
    author: "Thaurus Research", date: "2026-06-05", readingMinutes: 4, tag: "Educación",
    sections: [
      { paragraphs: ["Si operas Forex, el spread es un coste que encontrarás en cada posición. Entenderlo te ayuda a operar de forma más eficiente y a elegir la cuenta adecuada."] },
      { heading: "¿Qué es el spread?", paragraphs: ["El spread es la diferencia entre el precio de venta (bid) y de compra (ask) de un par de divisas, medido en pips. Es, en la práctica, el coste de entrar en una operación — cada posición empieza ligeramente en negativo por el tamaño del spread."] },
      { heading: "Por qué cambian los spreads", paragraphs: ["Los spreads se amplían y se estrechan con la liquidez y la volatilidad del mercado. Los pares principales en sesiones activas suelen tener los spreads más ajustados; los pares exóticos y las noticias pueden ampliarlos considerablemente."] },
      { heading: "Spreads más bajos en Thaurus", paragraphs: ["En Thaurus los spreads parten de 1.8 pips en Bullion Power, 0.5 pips en Prestige Plus y 0.2 pips en Royal Elite. Si operas con frecuencia, una cuenta con spreads más ajustados puede reducir notablemente tus costes."] },
    ],
  },
];

const ARTICLES: Record<Locale, Article[]> = { en, es, pt: en, th: en, ar: en };

const uiEN: BlogUi = { feedEyebrow: "Blog", feedTitle: "Trading insights & education", feedIntro: "Guides, platform deep-dives and market context from the Thaurus team — to help you trade with more confidence.", minRead: "min read", ctaTitle: "Learn by doing", ctaSub: "Put these ideas into practice on a free demo, or open a live account with a regulated broker.", relatedTitle: "Related reading", articleCtaTitle: "Ready to put this into practice?", articleCtaSub: "Open an account with a regulated broker, or try a free demo first.", openAccount: "Open account", tryDemo: "Try a demo" };
const uiES: BlogUi = { feedEyebrow: "Blog", feedTitle: "Análisis y formación de trading", feedIntro: "Guías, análisis a fondo de la plataforma y contexto de mercado del equipo de Thaurus — para ayudarte a operar con más confianza.", minRead: "min de lectura", ctaTitle: "Aprende practicando", ctaSub: "Pon estas ideas en práctica en una demo gratuita, o abre una cuenta real con un bróker regulado.", relatedTitle: "Lecturas relacionadas", articleCtaTitle: "¿Listo para ponerlo en práctica?", articleCtaSub: "Abre una cuenta con un bróker regulado, o prueba antes una demo gratuita.", openAccount: "Abrir cuenta", tryDemo: "Probar demo" };
const uiPT: BlogUi = { feedEyebrow: "Blog", feedTitle: "Análises e educação de trading", feedIntro: "Guias, análises aprofundadas da plataforma e contexto de mercado da equipe Thaurus — para ajudar você a operar com mais confiança.", minRead: "min de leitura", ctaTitle: "Aprenda na prática", ctaSub: "Coloque estas ideias em prática em uma demo gratuita, ou abra uma conta real com uma corretora regulada.", relatedTitle: "Leituras relacionadas", articleCtaTitle: "Pronto para colocar em prática?", articleCtaSub: "Abra uma conta com uma corretora regulada, ou teste antes uma demo gratuita.", openAccount: "Abrir conta", tryDemo: "Testar demo" };
const uiTH: BlogUi = { feedEyebrow: "บล็อก", feedTitle: "บทวิเคราะห์และความรู้การเทรด", feedIntro: "คู่มือ บทเจาะลึกแพลตฟอร์ม และบริบทตลาดจากทีม Thaurus — เพื่อช่วยให้คุณเทรดอย่างมั่นใจยิ่งขึ้น", minRead: "นาทีในการอ่าน", ctaTitle: "เรียนรู้จากการลงมือทำ", ctaSub: "นำแนวคิดเหล่านี้ไปฝึกในเดโมฟรี หรือเปิดบัญชีจริงกับโบรกเกอร์ที่อยู่ภายใต้การกำกับดูแล", relatedTitle: "บทความที่เกี่ยวข้อง", articleCtaTitle: "พร้อมนำไปใช้จริงหรือยัง?", articleCtaSub: "เปิดบัญชีกับโบรกเกอร์ที่อยู่ภายใต้การกำกับดูแล หรือทดลองเดโมฟรีก่อน", openAccount: "เปิดบัญชี", tryDemo: "ทดลองเดโม" };
const uiAR: BlogUi = { feedEyebrow: "المدونة", feedTitle: "رؤى وتعليم في التداول", feedIntro: "أدلة، وتحليلات معمّقة للمنصّة، وسياق سوقي من فريق Thaurus — لمساعدتك على التداول بثقة أكبر.", minRead: "دقيقة قراءة", ctaTitle: "تعلّم بالممارسة", ctaSub: "طبّق هذه الأفكار على حساب تجريبي مجاني، أو افتح حسابًا حقيقيًا مع وسيط مرخّص.", relatedTitle: "قراءات ذات صلة", articleCtaTitle: "هل أنت مستعد لتطبيق ذلك؟", articleCtaSub: "افتح حسابًا مع وسيط مرخّص، أو جرّب حسابًا تجريبيًا مجانيًا أولًا.", openAccount: "فتح حساب", tryDemo: "تجربة حساب تجريبي" };
const BLOG_UI: Record<Locale, BlogUi> = { en: uiEN, es: uiES, pt: uiPT, th: uiTH, ar: uiAR };

/** English list — used for slugs/generateStaticParams. */
export const articles = en;
export const articleBySlug = Object.fromEntries(en.map((a) => [a.slug, a])) as Record<string, Article>;

export function getArticles(locale: string): Article[] {
  return byLocale(ARTICLES, locale);
}
export function getArticle(locale: string, slug: string): Article | undefined {
  return getArticles(locale).find((a) => a.slug === slug);
}
export function getBlogUi(locale: string): BlogUi {
  return byLocale(BLOG_UI, locale);
}

/**
 * Market pages content — localized (en/es/pt/th/ar). English is the fallback.
 * Non-English copy is machine-generated and SHOULD BE REVIEWED by a native
 * speaker before go-live. Slugs/structure are shared; only text is translated.
 */
import type { IconName } from "@/components/ui/Icon";
import type { Locale } from "@/i18n/routing";
import { byLocale } from "@/lib/i18n-content";

export type MarketFeature = { icon: IconName; title: string; body: string };
export type Step = { title: string; body: string };
export type Faq = { q: string; a: string };

export type MarketContent = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroIntro: string;
  features: MarketFeature[];
  why: string[];
  fact: { stat: string; label: string; text: string };
  steps: Step[];
  faq: Faq[];
};

/** UI strings for the market page template (per locale). */
export type MarketUi = {
  featuresEyebrow: string;
  featuresTitle: (name: string) => string;
  whyEyebrow: string;
  whyTitle: (name: string) => string;
  startEyebrow: string;
  startTitle: (name: string) => string;
  startSubtitle: string;
  faqEyebrow: string;
  faqTitle: (name: string) => string;
  ctaTitle: (name: string) => string;
  ctaMid: (name: string) => string;
  ctaSub: string;
  openAccount: string;
  tryDemo: string;
  exploreOther: string;
  hubTitle: string;
  hubIntro: string;
  hubTrade: (name: string) => string;
  hubNotSure: string;
  hubNotSureBody: string;
  hubCtaTitle: string;
  hubCtaSub: string;
};

const SLUGS = {
  forex: "forex-trading-platform",
  stocks: "stock-trading-platform",
  futures: "futures-trading-platform",
  cfd: "cfd-trading",
  commodities: "commodities-trading-platform",
};

const stepsEN: Step[] = [
  { title: "Open your account", body: "Register online and choose the account type that fits your goals." },
  { title: "Verify your identity", body: "Complete a quick KYC check — usually reviewed within 24 hours." },
  { title: "Fund your account", body: "Deposit using a supported method in USD or EUR." },
  { title: "Download MetaTrader 5", body: "Install MT5 on desktop, web or mobile and log in." },
  { title: "Place your first trade", body: "Analyse the market, set your risk, and open a position — or practise on a demo first." },
];
const stepsES: Step[] = [
  { title: "Abre tu cuenta", body: "Regístrate en línea y elige el tipo de cuenta que se ajuste a tus objetivos." },
  { title: "Verifica tu identidad", body: "Completa una rápida verificación KYC, revisada normalmente en 24 horas." },
  { title: "Deposita fondos", body: "Deposita con un método admitido en USD o EUR." },
  { title: "Descarga MetaTrader 5", body: "Instala MT5 en escritorio, web o móvil e inicia sesión." },
  { title: "Realiza tu primera operación", body: "Analiza el mercado, define tu riesgo y abre una posición — o practica antes en una demo." },
];
const stepsPT: Step[] = [
  { title: "Abra sua conta", body: "Cadastre-se on-line e escolha o tipo de conta ideal para seus objetivos." },
  { title: "Verifique sua identidade", body: "Faça uma rápida verificação KYC, geralmente analisada em 24 horas." },
  { title: "Deposite fundos", body: "Deposite por um método aceito em USD ou EUR." },
  { title: "Baixe o MetaTrader 5", body: "Instale o MT5 no desktop, web ou celular e faça login." },
  { title: "Faça sua primeira operação", body: "Analise o mercado, defina seu risco e abra uma posição — ou pratique antes em uma demo." },
];
const stepsTH: Step[] = [
  { title: "เปิดบัญชี", body: "สมัครออนไลน์และเลือกประเภทบัญชีที่เหมาะกับเป้าหมายของคุณ" },
  { title: "ยืนยันตัวตน", body: "ทำ KYC อย่างรวดเร็ว โดยทั่วไปตรวจสอบภายใน 24 ชั่วโมง" },
  { title: "ฝากเงิน", body: "ฝากด้วยวิธีที่รองรับเป็นสกุล USD หรือ EUR" },
  { title: "ดาวน์โหลด MetaTrader 5", body: "ติดตั้ง MT5 บนเดสก์ท็อป เว็บ หรือมือถือ แล้วเข้าสู่ระบบ" },
  { title: "เริ่มเทรดครั้งแรก", body: "วิเคราะห์ตลาด กำหนดความเสี่ยง แล้วเปิดสถานะ — หรือฝึกในเดโมก่อน" },
];
const stepsAR: Step[] = [
  { title: "افتح حسابك", body: "سجّل عبر الإنترنت واختر نوع الحساب المناسب لأهدافك." },
  { title: "تحقّق من هويتك", body: "أكمل فحص KYC سريعًا — يُراجَع عادةً خلال 24 ساعة." },
  { title: "مَوّل حسابك", body: "أودِع بطريقة مدعومة بالدولار أو اليورو." },
  { title: "حمّل MetaTrader 5", body: "ثبّت MT5 على سطح المكتب أو الويب أو الهاتف وسجّل الدخول." },
  { title: "نفّذ صفقتك الأولى", body: "حلّل السوق، وحدّد مخاطرتك، وافتح مركزًا — أو تدرّب على حساب تجريبي أولًا." },
];

// ---------------------------------------------------------------- ENGLISH
const marketsEN: MarketContent[] = [
  {
    slug: SLUGS.forex, name: "Forex",
    metaTitle: "Forex Trading | Regulated Forex Broker on MetaTrader 5",
    metaDescription: "Trade major, minor and exotic currency pairs on MetaTrader 5 with a regulated forex broker (FSC Mauritius). Spreads from 0.2 pips, fast execution and professional risk tools.",
    heroTitle: "Forex trading, done properly",
    heroIntro: "Trade the world’s most liquid market with a regulated broker. Major, minor and exotic currency pairs on MetaTrader 5 — with the spreads, speed and risk tools serious traders expect.",
    features: [
      { icon: "chart", title: "Deep liquidity", body: "Access the largest financial market in the world with tight, transparent pricing." },
      { icon: "tools", title: "Pro charting", body: "80+ indicators, multiple timeframes and one-click trading in MetaTrader 5." },
      { icon: "shield", title: "Risk management", body: "Stop-loss, take-profit and negative-balance-aware tools to protect your capital." },
      { icon: "globe", title: "Global pairs", body: "Trade USD, EUR, GBP, JPY and emerging-market crosses around the clock." },
      { icon: "support", title: "Real support", body: "Multilingual help and real human support, available to every client." },
      { icon: "lock", title: "Secure & regulated", body: "Segregated funds and FSC Mauritius oversight on every trade." },
    ],
    why: ["24/5 market access across global sessions", "Fast, reliable order execution on MT5", "Competitive spreads from 0.2 pips", "Leverage options to suit your strategy", "Demo account to practise risk-free", "Education, signals and an economic calendar"],
    fact: { stat: "≈ $7.5T", label: "traded every day", text: "The forex market is over-the-counter (OTC) and the most liquid in the world — roughly $7.5 trillion changes hands daily, which means tight spreads and the ability to enter and exit positions quickly." },
    steps: stepsEN,
    faq: [
      { q: "What is forex trading?", a: "Forex (foreign exchange) trading is buying one currency while selling another, aiming to profit from changes in their relative value. Pairs are quoted as, for example, EUR/USD." },
      { q: "Is forex trading available 24 hours?", a: "The forex market trades 24 hours a day, five days a week, across the Sydney, Tokyo, London and New York sessions." },
      { q: "What leverage can I use?", a: "Leverage depends on your account type — up to 1:100 on Bullion Power and up to 1:200 on Prestige Plus. Higher leverage increases both potential gains and losses." },
      { q: "What is a pip?", a: "A pip is the smallest standard price move in a currency pair, usually the fourth decimal place. Spreads are measured in pips." },
      { q: "Can I practise before trading live?", a: "Yes — every account includes a free demo so you can test strategies with virtual funds on MetaTrader 5." },
    ],
  },
  {
    slug: SLUGS.stocks, name: "Stocks",
    metaTitle: "Stock & Share CFD Trading on MetaTrader 5",
    metaDescription: "Trade leading US and global shares as CFDs on MetaTrader 5 with a regulated broker. Go long or short on stocks with transparent pricing and flexible leverage.",
    heroTitle: "Trade the companies you believe in",
    heroIntro: "Go long or short on leading US and global shares via MetaTrader 5. Transparent pricing, fast execution and the flexibility to trade both rising and falling markets.",
    features: [
      { icon: "chart", title: "Top shares", body: "Trade household-name US and international equities from one account." },
      { icon: "tools", title: "Long or short", body: "Profit from both rising and falling prices with share CFDs." },
      { icon: "shield", title: "Defined risk", body: "Built-in stop-loss and take-profit on every position." },
      { icon: "globe", title: "Global access", body: "Diversify across sectors and regions in a single platform." },
      { icon: "support", title: "Analyst insight", body: "Market commentary and ideas to inform your decisions." },
      { icon: "lock", title: "Regulated", body: "FSC Mauritius oversight and segregated client funds." },
    ],
    why: ["Access to leading US shares and indices", "Go long or short with flexible leverage", "Transparent commissions from 3 USD/lot", "Advanced charting and order types on MT5", "Demo account for risk-free practice", "Education and analysis built in"],
    fact: { stat: "Long & short", label: "both directions", text: "Trading shares as CFDs means you can take a position on a company’s price moving up or down — without owning the underlying stock — and use leverage to make your capital work harder." },
    steps: stepsEN,
    faq: [
      { q: "How do I trade stocks with Thaurus?", a: "You trade shares as CFDs (contracts for difference) on MetaTrader 5, which lets you go long or short with leverage instead of owning the underlying shares." },
      { q: "Can I short-sell shares?", a: "Yes. With share CFDs you can open a sell position to potentially profit from a falling share price." },
      { q: "What are the trading costs?", a: "Costs depend on your account: spreads plus a transparent commission (from 3 USD/lot on Royal Elite). Always review current terms before trading." },
      { q: "Do I own the actual shares?", a: "No. CFDs track the price of the underlying share, so you don’t take ownership or receive shareholder rights." },
      { q: "Is there a demo for stocks?", a: "Yes — practise share trading with virtual funds on a free demo account first." },
    ],
  },
  {
    slug: SLUGS.futures, name: "Futures",
    metaTitle: "Futures Trading on MetaTrader 5 | Regulated Broker",
    metaDescription: "Trade index, energy and metal futures on MetaTrader 5 with a regulated broker — standardised, transparent contracts on the markets that move the economy.",
    heroTitle: "Trade the markets that move the world",
    heroIntro: "Access index, energy and metal futures on MetaTrader 5 — standardised, transparent contracts on the markets that move the global economy.",
    features: [
      { icon: "chart", title: "Macro markets", body: "Trade indices, energies and metals that drive the global economy." },
      { icon: "tools", title: "Defined contracts", body: "Standardised futures with clear contract sizes and expiries." },
      { icon: "shield", title: "Risk controls", body: "Built-in stop-loss and take-profit on every position." },
      { icon: "globe", title: "Diversification", body: "Add a different asset class to broaden your portfolio." },
      { icon: "support", title: "Expert guidance", body: "Analysis and support to navigate fast-moving markets." },
      { icon: "lock", title: "Regulated", body: "FSC Mauritius oversight and segregated funds." },
    ],
    why: ["Trade major index, energy and metal futures", "Flexible leverage to suit your strategy", "Built-in risk-management tools (stop-loss / take-profit)", "Advanced MT5 charting and automation", "Demo account to learn the mechanics", "Education and market analysis included"],
    fact: { stat: "Macro markets", label: "indices, energy & metals", text: "Futures track the markets that move the global economy — stock indices, energy and metals — with standardised contract sizes and transparent, exchange-referenced pricing on MetaTrader 5." },
    steps: stepsEN,
    faq: [
      { q: "What are futures?", a: "Futures are standardised contracts to buy or sell an asset at a set price on a future date, referencing major indices, energies and metals." },
      { q: "What futures can I trade?", a: "Thaurus offers index, energy and metal futures on MetaTrader 5." },
      { q: "How is leverage applied?", a: "Futures are leveraged instruments, so you control a larger position with a smaller margin. This amplifies both gains and losses, so manage risk carefully." },
      { q: "What contract sizes are available?", a: "Futures are standardised, so each contract has a defined size and expiry, shown clearly in MetaTrader 5." },
      { q: "Is a demo available?", a: "Yes — practise futures trading with virtual funds before committing real capital." },
    ],
  },
  {
    slug: SLUGS.cfd, name: "CFDs",
    metaTitle: "CFD Trading | Multi-Asset CFDs on MetaTrader 5",
    metaDescription: "Trade CFDs across forex, shares, indices, metals and energies on MetaTrader 5 with a regulated CFD broker. Flexible leverage, go long or short from one account.",
    heroTitle: "One account, every market",
    heroIntro: "Trade contracts for difference across forex, shares, indices, metals and energies on MetaTrader 5 — with flexible leverage and the freedom to go long or short.",
    features: [
      { icon: "chart", title: "Multi-asset", body: "Forex, shares, indices, metals and energies from a single CFD account." },
      { icon: "tools", title: "Long or short", body: "Trade rising and falling markets without owning the underlying." },
      { icon: "shield", title: "Flexible leverage", body: "Scale your exposure to match your strategy and risk appetite." },
      { icon: "globe", title: "Global reach", body: "Diversify across markets and regions in one platform." },
      { icon: "support", title: "Guidance", body: "Analysis, signals and real human support." },
      { icon: "lock", title: "Regulated", body: "FSC Mauritius oversight and segregated client funds." },
    ],
    why: ["Trade many markets from one CFD account", "Go long or short with flexible leverage", "Transparent spreads and commissions", "Advanced MT5 tools and order types", "Demo account for risk-free practice", "Education and analysis included"],
    fact: { stat: "No ownership", label: "trade the price", text: "A CFD is an agreement to exchange the price difference of an asset between opening and closing a trade. You never own the underlying — which keeps things flexible and lets you trade both directions with leverage." },
    steps: stepsEN,
    faq: [
      { q: "What is CFD trading?", a: "A contract for difference (CFD) lets you trade the price movement of an asset without owning it. You profit (or lose) from the difference between the open and close price." },
      { q: "Which markets can I trade as CFDs?", a: "Forex, shares, indices, metals and energies — all from one MetaTrader 5 account." },
      { q: "Can I trade both up and down?", a: "Yes. CFDs let you open buy (long) or sell (short) positions to trade in either direction." },
      { q: "How does leverage work with CFDs?", a: "Leverage lets you open a larger position with a smaller deposit (margin). It magnifies both potential profits and losses, so manage risk carefully." },
      { q: "Is a demo account available?", a: "Yes — practise CFD trading with virtual funds before going live." },
    ],
  },
  {
    slug: SLUGS.commodities, name: "Commodities",
    metaTitle: "Commodities Trading | Gold, Silver & Oil on MetaTrader 5",
    metaDescription: "Trade gold, silver, oil and energies on MetaTrader 5 with a regulated commodities broker. Safe-haven metals and high-momentum energy markets in one account.",
    heroTitle: "Gold, silver, oil and beyond",
    heroIntro: "Trade precious metals and energies on MetaTrader 5 — from classic safe-havens like gold to high-momentum markets like crude oil — all from one regulated account.",
    features: [
      { icon: "chart", title: "Metals & energies", body: "Trade gold, silver, oil and energy products with transparent pricing." },
      { icon: "tools", title: "Long or short", body: "Position for both rising and falling commodity prices." },
      { icon: "shield", title: "Safe-haven access", body: "Add gold and silver exposure to balance your portfolio." },
      { icon: "globe", title: "Macro themes", body: "Trade inflation, supply and demand stories directly." },
      { icon: "support", title: "Analysis", body: "Commentary on the drivers behind commodity moves." },
      { icon: "lock", title: "Regulated", body: "FSC Mauritius oversight and segregated funds." },
    ],
    why: ["Trade gold, silver, oil and energies", "Go long or short with flexible leverage", "Diversify with safe-haven assets", "Advanced charting and automation on MT5", "Demo account to practise first", "Education and market analysis included"],
    fact: { stat: "Safe-haven", label: "gold & silver", text: "Commodities like gold and silver are classic safe-haven assets that traders use to diversify, while energies such as crude oil offer high-momentum opportunities driven by global supply and demand." },
    steps: stepsEN,
    faq: [
      { q: "What commodities can I trade?", a: "Precious metals such as gold and silver, plus energy products like crude oil — all on MetaTrader 5." },
      { q: "Why trade gold?", a: "Gold is widely regarded as a safe-haven asset and is often used to diversify a portfolio or balance market uncertainty." },
      { q: "Can I short commodities?", a: "Yes. Trading commodities as CFDs lets you take both long and short positions." },
      { q: "What moves commodity prices?", a: "Supply and demand, geopolitics, the US dollar, inflation expectations and seasonal factors all influence commodity prices." },
      { q: "Is a demo account available?", a: "Yes — practise commodities trading with virtual funds before trading live." },
    ],
  },
];

// ---------------------------------------------------------------- SPANISH
const marketsES: MarketContent[] = [
  {
    slug: SLUGS.forex, name: "Forex",
    metaTitle: "Trading de Forex | Bróker de Forex regulado en MetaTrader 5",
    metaDescription: "Opera pares de divisas mayores, menores y exóticos en MetaTrader 5 con un bróker de Forex regulado (FSC Mauricio). Spreads desde 0,2 pips, ejecución rápida y herramientas de riesgo profesionales.",
    heroTitle: "Trading de Forex, como debe ser",
    heroIntro: "Opera en el mercado más líquido del mundo con un bróker regulado. Pares de divisas mayores, menores y exóticos en MetaTrader 5, con los spreads, la velocidad y las herramientas de riesgo que esperan los traders serios.",
    features: [
      { icon: "chart", title: "Gran liquidez", body: "Accede al mayor mercado financiero del mundo con precios ajustados y transparentes." },
      { icon: "tools", title: "Gráficos pro", body: "Más de 80 indicadores, múltiples marcos temporales y trading con un clic en MetaTrader 5." },
      { icon: "shield", title: "Gestión del riesgo", body: "Stop-loss, take-profit y herramientas con protección de saldo negativo para cuidar tu capital." },
      { icon: "globe", title: "Pares globales", body: "Opera USD, EUR, GBP, JPY y cruces de mercados emergentes a toda hora." },
      { icon: "support", title: "Soporte real", body: "Ayuda multilingüe y soporte humano real, disponible para todos los clientes." },
      { icon: "lock", title: "Seguro y regulado", body: "Fondos segregados y supervisión de la FSC de Mauricio en cada operación." },
    ],
    why: ["Acceso al mercado 24/5 en sesiones globales", "Ejecución rápida y fiable en MT5", "Spreads competitivos desde 0,2 pips", "Opciones de apalancamiento para tu estrategia", "Cuenta demo para practicar sin riesgo", "Formación, señales y calendario económico"],
    fact: { stat: "≈ 7,5 B USD", label: "negociados a diario", text: "El mercado de Forex es extrabursátil (OTC) y el más líquido del mundo: cada día se negocian unos 7,5 billones de dólares, lo que se traduce en spreads ajustados y la posibilidad de entrar y salir rápido." },
    steps: stepsES,
    faq: [
      { q: "¿Qué es el trading de Forex?", a: "El trading de Forex (divisas) consiste en comprar una moneda mientras se vende otra, buscando beneficiarse del cambio en su valor relativo. Los pares se cotizan, por ejemplo, como EUR/USD." },
      { q: "¿El Forex está disponible 24 horas?", a: "El mercado de Forex opera 24 horas al día, cinco días a la semana, en las sesiones de Sídney, Tokio, Londres y Nueva York." },
      { q: "¿Qué apalancamiento puedo usar?", a: "El apalancamiento depende de tu cuenta: hasta 1:100 en Bullion Power y hasta 1:200 en Prestige Plus. Un mayor apalancamiento aumenta tanto las ganancias como las pérdidas potenciales." },
      { q: "¿Qué es un pip?", a: "Un pip es el movimiento de precio estándar más pequeño de un par de divisas, normalmente el cuarto decimal. Los spreads se miden en pips." },
      { q: "¿Puedo practicar antes de operar en real?", a: "Sí: cada cuenta incluye una demo gratuita para probar estrategias con fondos virtuales en MetaTrader 5." },
    ],
  },
  {
    slug: SLUGS.stocks, name: "Acciones",
    metaTitle: "Trading de acciones y CFD sobre acciones en MetaTrader 5",
    metaDescription: "Opera las principales acciones de EE. UU. y del mundo como CFD en MetaTrader 5 con un bróker regulado. Ponte largo o corto con precios transparentes y apalancamiento flexible.",
    heroTitle: "Opera las empresas en las que crees",
    heroIntro: "Ponte largo o corto en las principales acciones de EE. UU. y del mundo a través de MetaTrader 5. Precios transparentes, ejecución rápida y la flexibilidad de operar mercados al alza y a la baja.",
    features: [
      { icon: "chart", title: "Grandes acciones", body: "Opera acciones de EE. UU. e internacionales de primer nivel desde una cuenta." },
      { icon: "tools", title: "Largo o corto", body: "Benefíciate de precios al alza y a la baja con CFD sobre acciones." },
      { icon: "shield", title: "Riesgo definido", body: "Stop-loss y take-profit integrados en cada posición." },
      { icon: "globe", title: "Acceso global", body: "Diversifica por sectores y regiones en una sola plataforma." },
      { icon: "support", title: "Visión de analistas", body: "Comentarios de mercado e ideas para tus decisiones." },
      { icon: "lock", title: "Regulado", body: "Supervisión de la FSC de Mauricio y fondos de clientes segregados." },
    ],
    why: ["Acceso a las principales acciones e índices de EE. UU.", "Ponte largo o corto con apalancamiento flexible", "Comisiones transparentes desde 3 USD/lote", "Gráficos avanzados y tipos de orden en MT5", "Cuenta demo para practicar sin riesgo", "Formación y análisis integrados"],
    fact: { stat: "Largo y corto", label: "ambas direcciones", text: "Operar acciones como CFD te permite posicionarte sobre la subida o bajada del precio de una empresa — sin poseer la acción — y usar apalancamiento para que tu capital trabaje más." },
    steps: stepsES,
    faq: [
      { q: "¿Cómo opero acciones con Thaurus?", a: "Operas acciones como CFD (contratos por diferencia) en MetaTrader 5, lo que te permite ponerte largo o corto con apalancamiento en lugar de poseer las acciones." },
      { q: "¿Puedo vender acciones en corto?", a: "Sí. Con los CFD sobre acciones puedes abrir una posición de venta para beneficiarte potencialmente de una caída del precio." },
      { q: "¿Cuáles son los costes?", a: "Dependen de tu cuenta: spreads más una comisión transparente (desde 3 USD/lote en Royal Elite). Revisa siempre los términos vigentes antes de operar." },
      { q: "¿Poseo las acciones reales?", a: "No. Los CFD replican el precio de la acción subyacente, por lo que no obtienes propiedad ni derechos de accionista." },
      { q: "¿Hay demo para acciones?", a: "Sí: practica el trading de acciones con fondos virtuales en una cuenta demo gratuita." },
    ],
  },
  {
    slug: SLUGS.futures, name: "Futuros",
    metaTitle: "Trading de futuros en MetaTrader 5 | Bróker regulado",
    metaDescription: "Opera futuros de índices, energía y metales en MetaTrader 5 con un bróker regulado: contratos estandarizados y transparentes sobre los mercados que mueven la economía.",
    heroTitle: "Opera los mercados que mueven el mundo",
    heroIntro: "Accede a futuros de índices, energía y metales en MetaTrader 5: contratos estandarizados y transparentes sobre los mercados que mueven la economía global.",
    features: [
      { icon: "chart", title: "Mercados macro", body: "Opera índices, energías y metales que impulsan la economía global." },
      { icon: "tools", title: "Contratos definidos", body: "Futuros estandarizados con tamaños y vencimientos claros." },
      { icon: "shield", title: "Control del riesgo", body: "Stop-loss y take-profit integrados en cada posición." },
      { icon: "globe", title: "Diversificación", body: "Añade otra clase de activo para ampliar tu cartera." },
      { icon: "support", title: "Guía experta", body: "Análisis y soporte para navegar mercados de rápido movimiento." },
      { icon: "lock", title: "Regulado", body: "Supervisión de la FSC de Mauricio y fondos segregados." },
    ],
    why: ["Opera futuros de índices, energía y metales", "Apalancamiento flexible para tu estrategia", "Herramientas de gestión del riesgo integradas (stop-loss / take-profit)", "Gráficos avanzados y automatización en MT5", "Cuenta demo para aprender la mecánica", "Formación y análisis de mercado incluidos"],
    fact: { stat: "Mercados macro", label: "índices, energía y metales", text: "Los futuros siguen a los mercados que mueven la economía global — índices bursátiles, energía y metales — con tamaños de contrato estandarizados y precios transparentes y referenciados a mercado en MetaTrader 5." },
    steps: stepsES,
    faq: [
      { q: "¿Qué son los futuros?", a: "Los futuros son contratos estandarizados para comprar o vender un activo a un precio fijado en una fecha futura, referenciando índices, energías y metales principales." },
      { q: "¿Qué futuros puedo operar?", a: "Thaurus ofrece futuros de índices, energía y metales en MetaTrader 5." },
      { q: "¿Cómo se aplica el apalancamiento?", a: "Los futuros son instrumentos apalancados, así que controlas una posición mayor con un margen menor. Esto amplifica ganancias y pérdidas, así que gestiona el riesgo con cuidado." },
      { q: "¿Qué tamaños de contrato hay?", a: "Los futuros son estandarizados, por lo que cada contrato tiene un tamaño y vencimiento definidos, visibles en MetaTrader 5." },
      { q: "¿Hay demo disponible?", a: "Sí: practica el trading de futuros con fondos virtuales antes de arriesgar capital real." },
    ],
  },
  {
    slug: SLUGS.cfd, name: "CFD",
    metaTitle: "Trading de CFD | CFD multiactivo en MetaTrader 5",
    metaDescription: "Opera CFD sobre Forex, acciones, índices, metales y energías en MetaTrader 5 con un bróker de CFD regulado. Apalancamiento flexible, largo o corto desde una cuenta.",
    heroTitle: "Una cuenta, todos los mercados",
    heroIntro: "Opera contratos por diferencia sobre Forex, acciones, índices, metales y energías en MetaTrader 5, con apalancamiento flexible y libertad para ponerte largo o corto.",
    features: [
      { icon: "chart", title: "Multiactivo", body: "Forex, acciones, índices, metales y energías desde una cuenta de CFD." },
      { icon: "tools", title: "Largo o corto", body: "Opera mercados al alza y a la baja sin poseer el subyacente." },
      { icon: "shield", title: "Apalancamiento flexible", body: "Ajusta tu exposición a tu estrategia y tolerancia al riesgo." },
      { icon: "globe", title: "Alcance global", body: "Diversifica por mercados y regiones en una plataforma." },
      { icon: "support", title: "Acompañamiento", body: "Análisis, señales y soporte humano real." },
      { icon: "lock", title: "Regulado", body: "Supervisión de la FSC de Mauricio y fondos de clientes segregados." },
    ],
    why: ["Opera muchos mercados desde una cuenta de CFD", "Ponte largo o corto con apalancamiento flexible", "Spreads y comisiones transparentes", "Herramientas avanzadas y tipos de orden en MT5", "Cuenta demo para practicar sin riesgo", "Formación y análisis incluidos"],
    fact: { stat: "Sin propiedad", label: "opera el precio", text: "Un CFD es un acuerdo para intercambiar la diferencia de precio de un activo entre la apertura y el cierre de la operación. Nunca posees el subyacente, lo que aporta flexibilidad y te permite operar en ambas direcciones con apalancamiento." },
    steps: stepsES,
    faq: [
      { q: "¿Qué es el trading de CFD?", a: "Un contrato por diferencia (CFD) te permite operar el movimiento del precio de un activo sin poseerlo. Ganas (o pierdes) la diferencia entre el precio de apertura y de cierre." },
      { q: "¿Qué mercados puedo operar como CFD?", a: "Forex, acciones, índices, metales y energías, todo desde una cuenta de MetaTrader 5." },
      { q: "¿Puedo operar al alza y a la baja?", a: "Sí. Los CFD te permiten abrir posiciones de compra (largo) o de venta (corto) en cualquier dirección." },
      { q: "¿Cómo funciona el apalancamiento con CFD?", a: "El apalancamiento te permite abrir una posición mayor con un depósito menor (margen). Amplifica ganancias y pérdidas, así que gestiona el riesgo." },
      { q: "¿Hay cuenta demo?", a: "Sí: practica el trading de CFD con fondos virtuales antes de operar en real." },
    ],
  },
  {
    slug: SLUGS.commodities, name: "Materias primas",
    metaTitle: "Trading de materias primas | Oro, plata y petróleo en MetaTrader 5",
    metaDescription: "Opera oro, plata, petróleo y energías en MetaTrader 5 con un bróker de materias primas regulado. Metales refugio y mercados energéticos de alto momentum en una cuenta.",
    heroTitle: "Oro, plata, petróleo y más",
    heroIntro: "Opera metales preciosos y energías en MetaTrader 5: desde refugios clásicos como el oro hasta mercados de alto momentum como el crudo, todo desde una cuenta regulada.",
    features: [
      { icon: "chart", title: "Metales y energías", body: "Opera oro, plata, petróleo y productos energéticos con precios transparentes." },
      { icon: "tools", title: "Largo o corto", body: "Posiciónate ante precios al alza y a la baja de las materias primas." },
      { icon: "shield", title: "Acceso a refugios", body: "Añade exposición a oro y plata para equilibrar tu cartera." },
      { icon: "globe", title: "Temas macro", body: "Opera directamente la inflación y la oferta y demanda." },
      { icon: "support", title: "Análisis", body: "Comentarios sobre los factores detrás de los movimientos." },
      { icon: "lock", title: "Regulado", body: "Supervisión de la FSC de Mauricio y fondos segregados." },
    ],
    why: ["Opera oro, plata, petróleo y energías", "Ponte largo o corto con apalancamiento flexible", "Diversifica con activos refugio", "Gráficos avanzados y automatización en MT5", "Cuenta demo para practicar primero", "Formación y análisis de mercado incluidos"],
    fact: { stat: "Activo refugio", label: "oro y plata", text: "Materias primas como el oro y la plata son activos refugio clásicos que los traders usan para diversificar, mientras que energías como el crudo ofrecen oportunidades de alto momentum impulsadas por la oferta y la demanda globales." },
    steps: stepsES,
    faq: [
      { q: "¿Qué materias primas puedo operar?", a: "Metales preciosos como oro y plata, además de productos energéticos como el crudo, todo en MetaTrader 5." },
      { q: "¿Por qué operar oro?", a: "El oro se considera un activo refugio y suele usarse para diversificar una cartera o equilibrar la incertidumbre del mercado." },
      { q: "¿Puedo ponerme corto en materias primas?", a: "Sí. Operar materias primas como CFD te permite tomar posiciones largas y cortas." },
      { q: "¿Qué mueve los precios de las materias primas?", a: "La oferta y la demanda, la geopolítica, el dólar estadounidense, las expectativas de inflación y los factores estacionales influyen en los precios." },
      { q: "¿Hay cuenta demo?", a: "Sí: practica el trading de materias primas con fondos virtuales antes de operar en real." },
    ],
  },
];

const uiEN: MarketUi = {
  featuresEyebrow: "Features",
  featuresTitle: (n) => `Why trade ${n.toLowerCase()} with Thaurus`,
  whyEyebrow: "Why Thaurus",
  whyTitle: (n) => `Built for ${n.toLowerCase()} traders`,
  startEyebrow: "Getting started",
  startTitle: (n) => `How to start trading ${n.toLowerCase()}`,
  startSubtitle: "Five simple steps from sign-up to your first trade.",
  faqEyebrow: "FAQ",
  faqTitle: (n) => `${n} trading questions`,
  ctaTitle: (n) => `Ready to trade ${n.toLowerCase()}?`,
  ctaMid: (n) => `Start trading ${n.toLowerCase()} today`,
  ctaSub: "Open a regulated account on MetaTrader 5, or practise on a free demo first.",
  openAccount: "Open account",
  tryDemo: "Try a demo",
  exploreOther: "Explore other markets",
  hubTitle: "Five markets, one platform",
  hubIntro: "From the world’s most liquid currency pairs to gold, oil and global shares — trade it all on MetaTrader 5 with a regulated broker.",
  hubTrade: (n) => `Trade ${n}`,
  hubNotSure: "Not sure where to start?",
  hubNotSureBody: "Open a free demo and explore every market risk-free.",
  hubCtaTitle: "Trade five markets from one account",
  hubCtaSub: "Open a regulated Thaurus account on MetaTrader 5, or try a free demo first.",
};
const uiES: MarketUi = {
  featuresEyebrow: "Características",
  featuresTitle: (n) => `Por qué operar ${n.toLowerCase()} con Thaurus`,
  whyEyebrow: "Por qué Thaurus",
  whyTitle: (n) => `Creado para traders de ${n.toLowerCase()}`,
  startEyebrow: "Primeros pasos",
  startTitle: (n) => `Cómo empezar a operar ${n.toLowerCase()}`,
  startSubtitle: "Cinco pasos sencillos, del registro a tu primera operación.",
  faqEyebrow: "Preguntas frecuentes",
  faqTitle: (n) => `Preguntas sobre ${n.toLowerCase()}`,
  ctaTitle: (n) => `¿Listo para operar ${n.toLowerCase()}?`,
  ctaMid: (n) => `Empieza a operar ${n.toLowerCase()} hoy`,
  ctaSub: "Abre una cuenta regulada en MetaTrader 5 o practica antes en una demo gratuita.",
  openAccount: "Abrir cuenta",
  tryDemo: "Probar demo",
  exploreOther: "Explorar otros mercados",
  hubTitle: "Cinco mercados, una plataforma",
  hubIntro: "Desde los pares de divisas más líquidos del mundo hasta el oro, el petróleo y las acciones globales: opéralo todo en MetaTrader 5 con un bróker regulado.",
  hubTrade: (n) => `Operar ${n}`,
  hubNotSure: "¿No sabes por dónde empezar?",
  hubNotSureBody: "Abre una demo gratuita y explora cada mercado sin riesgo.",
  hubCtaTitle: "Opera cinco mercados desde una cuenta",
  hubCtaSub: "Abre una cuenta regulada de Thaurus en MetaTrader 5 o prueba una demo gratuita.",
};
const uiPT: MarketUi = {
  featuresEyebrow: "Recursos",
  featuresTitle: (n) => `Por que negociar ${n.toLowerCase()} com a Thaurus`,
  whyEyebrow: "Por que a Thaurus",
  whyTitle: (n) => `Feito para traders de ${n.toLowerCase()}`,
  startEyebrow: "Primeiros passos",
  startTitle: (n) => `Como começar a negociar ${n.toLowerCase()}`,
  startSubtitle: "Cinco passos simples, do cadastro à sua primeira operação.",
  faqEyebrow: "Perguntas frequentes",
  faqTitle: (n) => `Perguntas sobre ${n.toLowerCase()}`,
  ctaTitle: (n) => `Pronto para negociar ${n.toLowerCase()}?`,
  ctaMid: (n) => `Comece a negociar ${n.toLowerCase()} hoje`,
  ctaSub: "Abra uma conta regulada no MetaTrader 5 ou pratique antes em uma demo gratuita.",
  openAccount: "Abrir conta",
  tryDemo: "Testar demo",
  exploreOther: "Explorar outros mercados",
  hubTitle: "Cinco mercados, uma plataforma",
  hubIntro: "Dos pares de moedas mais líquidos do mundo a ouro, petróleo e ações globais — negocie tudo no MetaTrader 5 com uma corretora regulada.",
  hubTrade: (n) => `Negociar ${n}`,
  hubNotSure: "Não sabe por onde começar?",
  hubNotSureBody: "Abra uma demo gratuita e explore cada mercado sem risco.",
  hubCtaTitle: "Negocie cinco mercados em uma conta",
  hubCtaSub: "Abra uma conta regulada da Thaurus no MetaTrader 5 ou teste uma demo gratuita.",
};
const uiTH: MarketUi = {
  featuresEyebrow: "คุณสมบัติ",
  featuresTitle: (n) => `ทำไมต้องเทรด ${n} กับ Thaurus`,
  whyEyebrow: "ทำไมต้อง Thaurus",
  whyTitle: (n) => `สร้างมาเพื่อเทรดเดอร์ ${n}`,
  startEyebrow: "เริ่มต้นใช้งาน",
  startTitle: (n) => `วิธีเริ่มเทรด ${n}`,
  startSubtitle: "ห้าขั้นตอนง่าย ๆ ตั้งแต่สมัครจนถึงการเทรดครั้งแรก",
  faqEyebrow: "คำถามที่พบบ่อย",
  faqTitle: (n) => `คำถามเกี่ยวกับการเทรด ${n}`,
  ctaTitle: (n) => `พร้อมเทรด ${n} หรือยัง?`,
  ctaMid: (n) => `เริ่มเทรด ${n} วันนี้`,
  ctaSub: "เปิดบัญชีที่อยู่ภายใต้การกำกับดูแลบน MetaTrader 5 หรือฝึกในเดโมฟรีก่อน",
  openAccount: "เปิดบัญชี",
  tryDemo: "ทดลองเดโม",
  exploreOther: "สำรวจตลาดอื่น",
  hubTitle: "ห้าตลาด หนึ่งแพลตฟอร์ม",
  hubIntro: "ตั้งแต่คู่สกุลเงินที่มีสภาพคล่องสูงที่สุดในโลก ไปจนถึงทองคำ น้ำมัน และหุ้นทั่วโลก — เทรดทั้งหมดบน MetaTrader 5 กับโบรกเกอร์ที่อยู่ภายใต้การกำกับดูแล",
  hubTrade: (n) => `เทรด ${n}`,
  hubNotSure: "ไม่แน่ใจว่าจะเริ่มตรงไหน?",
  hubNotSureBody: "เปิดเดโมฟรีและสำรวจทุกตลาดโดยไม่มีความเสี่ยง",
  hubCtaTitle: "เทรดห้าตลาดจากบัญชีเดียว",
  hubCtaSub: "เปิดบัญชี Thaurus ที่อยู่ภายใต้การกำกับดูแลบน MetaTrader 5 หรือทดลองเดโมฟรีก่อน",
};
const uiAR: MarketUi = {
  featuresEyebrow: "المزايا",
  featuresTitle: (n) => `لماذا تتداول ${n} مع Thaurus`,
  whyEyebrow: "لماذا Thaurus",
  whyTitle: (n) => `مصمَّم لمتداولي ${n}`,
  startEyebrow: "البدء",
  startTitle: (n) => `كيف تبدأ تداول ${n}`,
  startSubtitle: "خمس خطوات بسيطة من التسجيل إلى صفقتك الأولى.",
  faqEyebrow: "الأسئلة الشائعة",
  faqTitle: (n) => `أسئلة حول تداول ${n}`,
  ctaTitle: (n) => `هل أنت مستعد لتداول ${n}؟`,
  ctaMid: (n) => `ابدأ تداول ${n} اليوم`,
  ctaSub: "افتح حسابًا مرخّصًا على MetaTrader 5، أو تدرّب على حساب تجريبي مجاني أولًا.",
  openAccount: "فتح حساب",
  tryDemo: "تجربة حساب تجريبي",
  exploreOther: "استكشف أسواقًا أخرى",
  hubTitle: "خمسة أسواق، منصة واحدة",
  hubIntro: "من أكثر أزواج العملات سيولة في العالم إلى الذهب والنفط والأسهم العالمية — تداولها كلها على MetaTrader 5 مع وسيط مرخّص.",
  hubTrade: (n) => `تداول ${n}`,
  hubNotSure: "لا تعرف من أين تبدأ؟",
  hubNotSureBody: "افتح حسابًا تجريبيًا مجانيًا واستكشف كل سوق دون مخاطرة.",
  hubCtaTitle: "تداول خمسة أسواق من حساب واحد",
  hubCtaSub: "افتح حساب Thaurus مرخّصًا على MetaTrader 5، أو جرّب حسابًا تجريبيًا مجانيًا أولًا.",
};

// PT & TH & AR full market arrays fall back to EN structure where not provided.
const MARKETS: Record<Locale, MarketContent[]> = {
  en: marketsEN,
  es: marketsES,
  pt: marketsEN,
  th: marketsEN,
  ar: marketsEN,
};
const UI: Record<Locale, MarketUi> = { en: uiEN, es: uiES, pt: uiPT, th: uiTH, ar: uiAR };

/** English list — used for slugs, generateStaticParams, sitemap. */
export const markets = marketsEN;
export const marketBySlug = Object.fromEntries(
  marketsEN.map((m) => [m.slug, m])
) as Record<string, MarketContent>;

export function getMarkets(locale: string): MarketContent[] {
  return byLocale(MARKETS, locale);
}
export function getMarket(locale: string, slug: string): MarketContent | undefined {
  return getMarkets(locale).find((m) => m.slug === slug);
}
export function getMarketUi(locale: string): MarketUi {
  return byLocale(UI, locale);
}

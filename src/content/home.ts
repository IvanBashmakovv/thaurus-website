/**
 * Home page content — localized (en/es/pt/th/ar). English is the fallback.
 * Non-English copy is machine-generated and SHOULD BE REVIEWED by a native
 * speaker before go-live (financial/marketing wording).
 */
import type { IconName } from "@/components/ui/Icon";
import type { Locale } from "@/i18n/routing";
import { byLocale } from "@/lib/i18n-content";

export const heroWords = ["GLOBAL", "SECURE", "INNOVATIVE"];

// Press outlets shown as logos (client-selected). The Tradable + ZeroPlusFinance removed.
export { pressLogos } from "./affiliate/press";

type Feature = { icon: IconName; title: string; body: string };
type Card = { slug: string; title: string; body: string };
type Faq = { q: string; a: string };
type Heading = { eyebrow: string; title: string; subtitle?: string };

export type HomeData = {
  pressTitle: string;
  pressNote: string;
  why: { heading: Heading; items: Feature[] };
  markets: { heading: Heading; cards: Card[]; trade: string; viewAll: string };
  tools: { heading: Heading; viewAll: string; blurbs: Record<string, string> };
  mt5: {
    title: string;
    intro: string;
    features: string[];
    downloads: string;
    reviews: string;
    readMore: string;
    caption: string;
  };
  people: {
    eyebrow: string;
    title: string;
    body: string;
    points: string[];
    about: string;
    license: string;
  };
  faq: { heading: Heading; items: Faq[] };
  cta: { title: string; subtitle: string; primary: string; secondary: string };
};

const MARKET_SLUGS = {
  forex: "forex-trading-platform",
  stocks: "stock-trading-platform",
  futures: "futures-trading-platform",
  cfd: "cfd-trading",
  commodities: "commodities-trading-platform",
};

const en: HomeData = {
  pressTitle: "As featured in",
  pressNote: "Featured in 120+ global media outlets",
  why: {
    heading: {
      eyebrow: "Why Thaurus",
      title: "Built for traders who value trust",
      subtitle:
        "Everything you need to trade with confidence — regulation, security, professional tools and real human guidance.",
    },
    items: [
      { icon: "support", title: "Real human support", body: "A responsive team by your side. Real people, fast answers, no bots." },
      { icon: "shield", title: "Safe & secure", body: "Bank-grade encryption, two-factor authentication, segregated client funds and independent audits — under FSC Mauritius oversight." },
      { icon: "tools", title: "Professional tools", body: "Real-time market data, trading signals, an economic calendar and free calculators to size, plan and manage every position." },
      { icon: "learn", title: "Learn from experts", body: "Webinars, structured video courses and mentors help you build a method — whether you’re starting out or scaling up." },
    ],
  },
  markets: {
    heading: {
      eyebrow: "Markets",
      title: "Explore the markets",
      subtitle: "Five markets, one MetaTrader 5 account. Trade what moves — from currencies to commodities.",
    },
    trade: "Explore",
    viewAll: "View all markets",
    cards: [
      { slug: MARKET_SLUGS.forex, title: "Forex", body: "Trade major, minor and exotic currency pairs on the world’s largest market — around $7.5 trillion changes hands every day." },
      { slug: MARKET_SLUGS.stocks, title: "Stocks", body: "Go long or short on leading US and global shares with transparent pricing and fast execution." },
      { slug: MARKET_SLUGS.futures, title: "Futures", body: "Access index, energy and metal futures — standardised, transparent contracts on the markets that move the economy." },
      { slug: MARKET_SLUGS.cfd, title: "CFDs", body: "Trade price movements across asset classes with flexible leverage — no ownership of the underlying required." },
      { slug: MARKET_SLUGS.commodities, title: "Commodities", body: "Trade gold, silver, oil and energies — classic safe-havens and high-momentum markets in one account." },
    ],
  },
  tools: {
    heading: {
      eyebrow: "Tools & Resources",
      title: "Powerful trading tools",
      subtitle: "Free calculators to size positions, manage risk and plan every trade — no account required.",
    },
    viewAll: "View all tools",
    blurbs: {
      heatmap: "See relative currency strength across the market at a glance.",
      "margin-calculator": "Work out the margin required before you open a position.",
      "stop-loss-limit": "Plan your stop-loss and take-profit levels with confidence.",
      "cfd-profit-loss-calculator": "Estimate the profit or loss on a CFD trade in seconds.",
      "pivot-point": "Find intraday support and resistance with pivot levels.",
      fibonacci: "Project Fibonacci retracement and extension levels.",
    },
  },
  mt5: {
    title: "Trade on the world’s most popular platform",
    intro: "Thaurus runs on MetaTrader 5 — advanced charting, algorithmic trading and fast order management on desktop, web and mobile.",
    features: [
      "Advanced charting with 80+ indicators and timeframes",
      "One-click trading, depth of market and pending orders",
      "Expert Advisors and algorithmic trading",
      "Synced across desktop, web and mobile",
    ],
    downloads: "downloads",
    reviews: "reviews",
    readMore: "Read why we chose MetaTrader 5",
    caption: "Trade on desktop & mobile — anywhere, anytime.",
  },
  people: {
    eyebrow: "People behind the platform",
    title: "A real team you can rely on",
    body: "Thaurus is built by traders, analysts and educators who pick up the phone. Behind the technology is a team committed to honesty, transparency and your success.",
    points: [
      "A support team that actually picks up the phone",
      "Multilingual support across markets and time zones",
      "Real specialists — not chatbots — when it matters",
    ],
    about: "About Thaurus",
    license: "License & regulation",
  },
  faq: {
    heading: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      subtitle: "Everything you need to know about trading with a regulated broker.",
    },
    items: [
      { q: "What is Thaurus?", a: "Thaurus is a regulated multi-asset broker that lets you trade forex, stocks, futures, CFDs and commodities on MetaTrader 5. Thaurus Ltd is licensed and regulated by the Financial Services Commission, Mauritius (license GB22200432, SEC-2.1B Investment Dealer)." },
      { q: "Is trading with Thaurus safe?", a: "Yes. Thaurus Ltd is regulated by the FSC Mauritius (license GB22200432). Client funds are held in segregated accounts, the platform uses bank-grade encryption and two-factor authentication, and operations are subject to independent audits and ongoing regulatory oversight. You can verify the license on the FSC public register." },
      { q: "Which markets can I trade?", a: "Five markets from a single account: forex, stocks, futures, CFDs and commodities — including metals, energies and indices." },
      { q: "Do I need experience to start?", a: "No. You can open a free demo account to practise with virtual funds, and use our courses, webinars and mentors to learn. Risk-management tools help you trade responsibly from day one." },
      { q: "What trading tools are included?", a: "Real-time market data, an economic calendar, trading signals and free calculators — heatmap, margin, stop-loss, CFD profit/loss, pivot point and Fibonacci." },
      { q: "Can I try a demo account?", a: "Yes. Every account type includes a demo so you can test strategies and the MetaTrader 5 platform with virtual funds before trading live." },
      { q: "How do I open an account?", a: "Register online, verify your identity (KYC), fund your account and start trading on MetaTrader 5. Most verifications are reviewed within 24 hours." },
      { q: "How fast is order execution?", a: "Orders are routed for fast, reliable execution on MetaTrader 5. Actual fill speed depends on market liquidity, volatility and your connection." },
      { q: "What support is available?", a: "Multilingual support by email and phone, available to every client — real people who pick up and help." },
    ],
  },
  cta: {
    title: "Start trading with a regulated broker",
    subtitle: "Open your account in minutes, or try a free demo first. Your capital is at risk.",
    primary: "Open account",
    secondary: "Try a demo",
  },
};

const es: HomeData = {
  pressTitle: "Aparecemos en",
  pressNote: "Presentes en más de 120 medios globales",
  why: {
    heading: {
      eyebrow: "Por qué Thaurus",
      title: "Creado para traders que valoran la confianza",
      subtitle: "Todo lo que necesitas para operar con confianza: regulación, seguridad, herramientas profesionales y atención humana real.",
    },
    items: [
      { icon: "support", title: "Atención humana real", body: "Un equipo atento a tu lado. Personas reales, respuestas rápidas, sin bots." },
      { icon: "shield", title: "Seguro y protegido", body: "Cifrado de nivel bancario, autenticación de dos factores, fondos de clientes segregados y auditorías independientes, bajo la supervisión de la FSC de Mauricio." },
      { icon: "tools", title: "Herramientas profesionales", body: "Datos de mercado en tiempo real, señales de trading, calendario económico y calculadoras gratuitas para dimensionar, planificar y gestionar cada posición." },
      { icon: "learn", title: "Aprende de expertos", body: "Webinars, cursos en vídeo estructurados y mentores te ayudan a crear un método, tanto si empiezas como si quieres crecer." },
    ],
  },
  markets: {
    heading: {
      eyebrow: "Mercados",
      title: "Explora los mercados",
      subtitle: "Cinco mercados, una sola cuenta de MetaTrader 5. Opera lo que se mueve: de las divisas a las materias primas.",
    },
    trade: "Explorar",
    viewAll: "Ver todos los mercados",
    cards: [
      { slug: MARKET_SLUGS.forex, title: "Forex", body: "Opera pares de divisas mayores, menores y exóticos en el mayor mercado del mundo: cada día se negocian unos 7,5 billones de dólares." },
      { slug: MARKET_SLUGS.stocks, title: "Acciones", body: "Ponte largo o corto en las principales acciones de EE. UU. y del mundo, con precios transparentes y ejecución rápida." },
      { slug: MARKET_SLUGS.futures, title: "Futuros", body: "Accede a futuros de índices, energía y metales: contratos estandarizados y transparentes sobre los mercados que mueven la economía." },
      { slug: MARKET_SLUGS.cfd, title: "CFD", body: "Opera el movimiento de precios en distintas clases de activos con apalancamiento flexible, sin poseer el subyacente." },
      { slug: MARKET_SLUGS.commodities, title: "Materias primas", body: "Opera oro, plata, petróleo y energías: refugios clásicos y mercados de alto momentum en una sola cuenta." },
    ],
  },
  tools: {
    heading: {
      eyebrow: "Herramientas y recursos",
      title: "Potentes herramientas de trading",
      subtitle: "Calculadoras gratuitas para dimensionar posiciones, gestionar el riesgo y planificar cada operación, sin necesidad de cuenta.",
    },
    viewAll: "Ver todas las herramientas",
    blurbs: {
      heatmap: "Observa de un vistazo la fuerza relativa de cada divisa en el mercado.",
      "margin-calculator": "Calcula el margen necesario antes de abrir una posición.",
      "stop-loss-limit": "Planifica tus niveles de stop-loss y take-profit con confianza.",
      "cfd-profit-loss-calculator": "Estima la ganancia o pérdida de una operación con CFD en segundos.",
      "pivot-point": "Encuentra soportes y resistencias intradía con los niveles pivote.",
      fibonacci: "Proyecta niveles de retroceso y extensión de Fibonacci.",
    },
  },
  mt5: {
    title: "Opera en la plataforma más popular del mundo",
    intro: "Thaurus funciona con MetaTrader 5: gráficos avanzados, trading algorítmico y gestión rápida de órdenes en escritorio, web y móvil.",
    features: [
      "Gráficos avanzados con más de 80 indicadores y marcos temporales",
      "Trading con un clic, profundidad de mercado y órdenes pendientes",
      "Asesores Expertos (EA) y trading algorítmico",
      "Sincronizado entre escritorio, web y móvil",
    ],
    downloads: "descargas",
    reviews: "reseñas",
    readMore: "Por qué elegimos MetaTrader 5",
    caption: "Opera en escritorio y móvil, en cualquier lugar y momento.",
  },
  people: {
    eyebrow: "El equipo detrás de la plataforma",
    title: "Un equipo real en el que confiar",
    body: "Thaurus está formado por traders, analistas y formadores que descuelgan el teléfono. Detrás de la tecnología hay un equipo comprometido con la honestidad, la transparencia y tu éxito.",
    points: [
      "Un equipo de soporte que de verdad responde el teléfono",
      "Soporte multilingüe en distintos mercados y husos horarios",
      "Especialistas reales, no chatbots, cuando importa",
    ],
    about: "Sobre Thaurus",
    license: "Licencia y regulación",
  },
  faq: {
    heading: {
      eyebrow: "Preguntas frecuentes",
      title: "Preguntas frecuentes",
      subtitle: "Todo lo que necesitas saber sobre operar con un bróker regulado.",
    },
    items: [
      { q: "¿Qué es Thaurus?", a: "Thaurus es un bróker multiactivo regulado que te permite operar Forex, acciones, futuros, CFD y materias primas en MetaTrader 5. Thaurus Ltd está autorizada y regulada por la Comisión de Servicios Financieros de Mauricio (licencia GB22200432, Investment Dealer SEC-2.1B)." },
      { q: "¿Es seguro operar con Thaurus?", a: "Sí. Thaurus Ltd está regulada por la FSC de Mauricio (licencia GB22200432). Los fondos de los clientes se mantienen en cuentas segregadas, la plataforma utiliza cifrado de nivel bancario y autenticación de dos factores, y las operaciones se someten a auditorías independientes y supervisión regulatoria continua. Puedes verificar la licencia en el registro público de la FSC." },
      { q: "¿Qué mercados puedo operar?", a: "Cinco mercados desde una sola cuenta: Forex, acciones, futuros, CFD y materias primas, incluidos metales, energías e índices." },
      { q: "¿Necesito experiencia para empezar?", a: "No. Puedes abrir una cuenta demo gratuita para practicar con fondos virtuales y usar nuestros cursos, webinars y mentores para aprender. Las herramientas de gestión del riesgo te ayudan a operar de forma responsable desde el primer día." },
      { q: "¿Qué herramientas de trading se incluyen?", a: "Datos de mercado en tiempo real, calendario económico, señales de trading y calculadoras gratuitas: heatmap, margen, stop-loss, ganancias/pérdidas de CFD, puntos pivote y Fibonacci." },
      { q: "¿Puedo probar una cuenta demo?", a: "Sí. Cada tipo de cuenta incluye una demo para que pruebes estrategias y la plataforma MetaTrader 5 con fondos virtuales antes de operar en real." },
      { q: "¿Cómo abro una cuenta?", a: "Regístrate en línea, verifica tu identidad (KYC), deposita fondos y empieza a operar en MetaTrader 5. La mayoría de las verificaciones se revisan en 24 horas." },
      { q: "¿Qué tan rápida es la ejecución de órdenes?", a: "Las órdenes se enrutan para una ejecución rápida y fiable en MetaTrader 5. La velocidad real depende de la liquidez del mercado, la volatilidad y tu conexión." },
      { q: "¿Qué soporte está disponible?", a: "Soporte multilingüe por correo y teléfono, disponible para todos los clientes — personas reales que responden y ayudan." },
    ],
  },
  cta: {
    title: "Empieza a operar con un bróker regulado",
    subtitle: "Abre tu cuenta en minutos o prueba primero una demo gratuita. Tu capital está en riesgo.",
    primary: "Abrir cuenta",
    secondary: "Probar demo",
  },
};

const pt: HomeData = {
  pressTitle: "Já apareceu em",
  pressNote: "Presentes em mais de 120 veículos de mídia globais",
  why: {
    heading: {
      eyebrow: "Por que a Thaurus",
      title: "Feita para traders que valorizam a confiança",
      subtitle: "Tudo o que você precisa para operar com confiança: regulação, segurança, ferramentas profissionais e atendimento humano de verdade.",
    },
    items: [
      { icon: "support", title: "Atendimento humano real", body: "Uma equipe atenta ao seu lado. Pessoas de verdade, respostas rápidas, sem bots." },
      { icon: "shield", title: "Seguro e protegido", body: "Criptografia de nível bancário, autenticação de dois fatores, fundos de clientes segregados e auditorias independentes, sob supervisão da FSC de Maurício." },
      { icon: "tools", title: "Ferramentas profissionais", body: "Dados de mercado em tempo real, sinais de trading, calendário econômico e calculadoras gratuitas para dimensionar, planejar e gerenciar cada posição." },
      { icon: "learn", title: "Aprenda com especialistas", body: "Webinars, cursos em vídeo estruturados e mentores ajudam você a construir um método, seja começando ou evoluindo." },
    ],
  },
  markets: {
    heading: {
      eyebrow: "Mercados",
      title: "Explore os mercados",
      subtitle: "Cinco mercados, uma única conta MetaTrader 5. Negocie o que se move — de moedas a commodities.",
    },
    trade: "Explorar",
    viewAll: "Ver todos os mercados",
    cards: [
      { slug: MARKET_SLUGS.forex, title: "Forex", body: "Negocie pares de moedas principais, secundários e exóticos no maior mercado do mundo — cerca de US$ 7,5 trilhões giram por dia." },
      { slug: MARKET_SLUGS.stocks, title: "Ações", body: "Fique comprado ou vendido nas principais ações dos EUA e do mundo, com preços transparentes e execução rápida." },
      { slug: MARKET_SLUGS.futures, title: "Futuros", body: "Acesse futuros de índices, energia e metais — contratos padronizados e transparentes sobre os mercados que movem a economia." },
      { slug: MARKET_SLUGS.cfd, title: "CFDs", body: "Negocie a variação de preços em diversas classes de ativos com alavancagem flexível, sem possuir o ativo subjacente." },
      { slug: MARKET_SLUGS.commodities, title: "Commodities", body: "Negocie ouro, prata, petróleo e energias — refúgios clássicos e mercados de alto momento em uma só conta." },
    ],
  },
  tools: {
    heading: {
      eyebrow: "Ferramentas e recursos",
      title: "Ferramentas de trading poderosas",
      subtitle: "Calculadoras gratuitas para dimensionar posições, gerenciar risco e planejar cada operação — sem precisar de conta.",
    },
    viewAll: "Ver todas as ferramentas",
    blurbs: {
      heatmap: "Veja num relance a força relativa de cada moeda no mercado.",
      "margin-calculator": "Calcule a margem necessária antes de abrir uma posição.",
      "stop-loss-limit": "Planeje seus níveis de stop-loss e take-profit com confiança.",
      "cfd-profit-loss-calculator": "Estime o lucro ou prejuízo de uma operação com CFD em segundos.",
      "pivot-point": "Encontre suportes e resistências intradiários com os pontos de pivô.",
      fibonacci: "Projete níveis de retração e extensão de Fibonacci.",
    },
  },
  mt5: {
    title: "Negocie na plataforma mais popular do mundo",
    intro: "A Thaurus funciona no MetaTrader 5 — gráficos avançados, trading algorítmico e gestão rápida de ordens no desktop, web e celular.",
    features: [
      "Gráficos avançados com mais de 80 indicadores e períodos",
      "Trading com um clique, profundidade de mercado e ordens pendentes",
      "Expert Advisors (EA) e trading algorítmico",
      "Sincronizado entre desktop, web e celular",
    ],
    downloads: "downloads",
    reviews: "avaliações",
    readMore: "Por que escolhemos o MetaTrader 5",
    caption: "Negocie no desktop e no celular — em qualquer lugar e hora.",
  },
  people: {
    eyebrow: "A equipe por trás da plataforma",
    title: "Uma equipe real em quem confiar",
    body: "A Thaurus é formada por traders, analistas e educadores que atendem o telefone. Por trás da tecnologia há uma equipe comprometida com a honestidade, a transparência e o seu sucesso.",
    points: [
      "Uma equipe de suporte que realmente atende o telefone",
      "Suporte multilíngue em diversos mercados e fusos horários",
      "Especialistas reais, não chatbots, quando importa",
    ],
    about: "Sobre a Thaurus",
    license: "Licença e regulação",
  },
  faq: {
    heading: {
      eyebrow: "Perguntas frequentes",
      title: "Perguntas frequentes",
      subtitle: "Tudo o que você precisa saber sobre operar com uma corretora regulada.",
    },
    items: [
      { q: "O que é a Thaurus?", a: "A Thaurus é uma corretora multiativos regulada que permite negociar Forex, ações, futuros, CFDs e commodities no MetaTrader 5. A Thaurus Ltd é licenciada e regulada pela Comissão de Serviços Financeiros de Maurício (licença GB22200432, Investment Dealer SEC-2.1B)." },
      { q: "É seguro operar com a Thaurus?", a: "Sim. A Thaurus Ltd é regulada pela FSC de Maurício (licença GB22200432). Os fundos dos clientes ficam em contas segregadas, a plataforma usa criptografia de nível bancário e autenticação de dois fatores, e as operações passam por auditorias independentes e supervisão regulatória contínua. Você pode verificar a licença no registro público da FSC." },
      { q: "Quais mercados posso negociar?", a: "Cinco mercados em uma única conta: Forex, ações, futuros, CFDs e commodities — incluindo metais, energias e índices." },
      { q: "Preciso de experiência para começar?", a: "Não. Você pode abrir uma conta demo gratuita para praticar com fundos virtuais e usar nossos cursos, webinars e mentores para aprender. As ferramentas de gestão de risco ajudam a operar de forma responsável desde o primeiro dia." },
      { q: "Quais ferramentas de trading estão incluídas?", a: "Dados de mercado em tempo real, calendário econômico, sinais de trading e calculadoras gratuitas: heatmap, margem, stop-loss, lucro/prejuízo de CFD, ponto de pivô e Fibonacci." },
      { q: "Posso testar uma conta demo?", a: "Sim. Cada tipo de conta inclui uma demo para testar estratégias e a plataforma MetaTrader 5 com fundos virtuais antes de operar de verdade." },
      { q: "Como abro uma conta?", a: "Cadastre-se on-line, verifique sua identidade (KYC), deposite e comece a operar no MetaTrader 5. A maioria das verificações é analisada em 24 horas." },
      { q: "Qual a velocidade de execução das ordens?", a: "As ordens são roteadas para execução rápida e confiável no MetaTrader 5. A velocidade real depende da liquidez do mercado, da volatilidade e da sua conexão." },
      { q: "Que suporte está disponível?", a: "Suporte multilíngue por e-mail e telefone, disponível para todos os clientes — pessoas de verdade que atendem e ajudam." },
    ],
  },
  cta: {
    title: "Comece a operar com uma corretora regulada",
    subtitle: "Abra sua conta em minutos ou teste primeiro uma demo gratuita. Seu capital está em risco.",
    primary: "Abrir conta",
    secondary: "Testar demo",
  },
};

const th: HomeData = {
  pressTitle: "ปรากฏในสื่อ",
  pressNote: "ได้รับการนำเสนอในสื่อระดับโลกกว่า 120 แห่ง",
  why: {
    heading: {
      eyebrow: "ทำไมต้อง Thaurus",
      title: "สร้างขึ้นเพื่อเทรดเดอร์ที่ให้ความสำคัญกับความน่าเชื่อถือ",
      subtitle: "ทุกสิ่งที่คุณต้องการเพื่อเทรดอย่างมั่นใจ — การกำกับดูแล ความปลอดภัย เครื่องมือระดับมืออาชีพ และการดูแลจากคนจริง",
    },
    items: [
      { icon: "support", title: "การสนับสนุนจากคนจริง", body: "ทีมงานที่พร้อมดูแลคุณ คนจริง ตอบเร็ว ไม่ใช่บอท" },
      { icon: "shield", title: "ปลอดภัยและมั่นคง", body: "การเข้ารหัสระดับธนาคาร การยืนยันตัวตนสองชั้น เงินทุนลูกค้าแยกบัญชี และการตรวจสอบโดยอิสระ ภายใต้การกำกับดูแลของ FSC Mauritius" },
      { icon: "tools", title: "เครื่องมือระดับมืออาชีพ", body: "ข้อมูลตลาดแบบเรียลไทม์ สัญญาณเทรด ปฏิทินเศรษฐกิจ และเครื่องคำนวณฟรีเพื่อกำหนดขนาด วางแผน และจัดการทุกสถานะ" },
      { icon: "learn", title: "เรียนรู้จากผู้เชี่ยวชาญ", body: "เว็บบินาร์ คอร์สวิดีโอที่จัดเรียงอย่างเป็นระบบ และเมนเทอร์ ช่วยให้คุณสร้างวิธีการของตัวเอง ไม่ว่าจะเพิ่งเริ่มหรือกำลังต่อยอด" },
    ],
  },
  markets: {
    heading: {
      eyebrow: "ตลาด",
      title: "สำรวจตลาด",
      subtitle: "ห้าตลาด หนึ่งบัญชี MetaTrader 5 เทรดสิ่งที่เคลื่อนไหว — ตั้งแต่ค่าเงินไปจนถึงสินค้าโภคภัณฑ์",
    },
    trade: "สำรวจ",
    viewAll: "ดูตลาดทั้งหมด",
    cards: [
      { slug: MARKET_SLUGS.forex, title: "Forex", body: "เทรดคู่สกุลเงินหลัก รอง และเอ็กโซติกในตลาดที่ใหญ่ที่สุดในโลก — มีการซื้อขายราว 7.5 ล้านล้านดอลลาร์ต่อวัน" },
      { slug: MARKET_SLUGS.stocks, title: "หุ้น", body: "เปิดสถานะซื้อหรือขายหุ้นชั้นนำของสหรัฐและทั่วโลก ด้วยราคาที่โปร่งใสและการดำเนินการที่รวดเร็ว" },
      { slug: MARKET_SLUGS.futures, title: "ฟิวเจอร์ส", body: "เข้าถึงฟิวเจอร์สดัชนี พลังงาน และโลหะ — สัญญามาตรฐานที่โปร่งใสบนตลาดที่ขับเคลื่อนเศรษฐกิจ" },
      { slug: MARKET_SLUGS.cfd, title: "CFD", body: "เทรดการเคลื่อนไหวของราคาในสินทรัพย์หลายประเภทด้วยเลเวอเรจที่ยืดหยุ่น โดยไม่ต้องถือครองสินทรัพย์อ้างอิง" },
      { slug: MARKET_SLUGS.commodities, title: "สินค้าโภคภัณฑ์", body: "เทรดทองคำ เงิน น้ำมัน และพลังงาน — สินทรัพย์ปลอดภัยคลาสสิกและตลาดที่มีโมเมนตัมสูงในบัญชีเดียว" },
    ],
  },
  tools: {
    heading: {
      eyebrow: "เครื่องมือและแหล่งข้อมูล",
      title: "เครื่องมือเทรดทรงพลัง",
      subtitle: "เครื่องคำนวณฟรีเพื่อกำหนดขนาดสถานะ จัดการความเสี่ยง และวางแผนทุกการเทรด — ไม่ต้องมีบัญชี",
    },
    viewAll: "ดูเครื่องมือทั้งหมด",
    blurbs: {
      heatmap: "ดูความแข็งแกร่งของแต่ละสกุลเงินในตลาดได้ในพริบตา",
      "margin-calculator": "คำนวณมาร์จิ้นที่ต้องใช้ก่อนเปิดสถานะ",
      "stop-loss-limit": "วางแผนระดับ stop-loss และ take-profit อย่างมั่นใจ",
      "cfd-profit-loss-calculator": "ประเมินกำไรหรือขาดทุนของการเทรด CFD ได้ในไม่กี่วินาที",
      "pivot-point": "หาแนวรับแนวต้านระหว่างวันด้วยระดับ pivot",
      fibonacci: "คาดการณ์ระดับ Fibonacci retracement และ extension",
    },
  },
  mt5: {
    title: "เทรดบนแพลตฟอร์มที่ได้รับความนิยมที่สุดในโลก",
    intro: "Thaurus ทำงานบน MetaTrader 5 — กราฟขั้นสูง การเทรดอัตโนมัติ และการจัดการคำสั่งที่รวดเร็วบนเดสก์ท็อป เว็บ และมือถือ",
    features: [
      "กราฟขั้นสูงพร้อมอินดิเคเตอร์และไทม์เฟรมกว่า 80 รายการ",
      "เทรดคลิกเดียว Depth of Market และคำสั่งรอ",
      "Expert Advisors และการเทรดอัตโนมัติ",
      "ซิงค์ระหว่างเดสก์ท็อป เว็บ และมือถือ",
    ],
    downloads: "ดาวน์โหลด",
    reviews: "รีวิว",
    readMore: "ทำไมเราเลือก MetaTrader 5",
    caption: "เทรดทั้งบนเดสก์ท็อปและมือถือ — ทุกที่ทุกเวลา",
  },
  people: {
    eyebrow: "ทีมงานเบื้องหลังแพลตฟอร์ม",
    title: "ทีมงานจริงที่คุณวางใจได้",
    body: "Thaurus สร้างโดยเทรดเดอร์ นักวิเคราะห์ และผู้สอนที่รับสายโทรศัพท์จริง เบื้องหลังเทคโนโลยีคือทีมที่ยึดมั่นในความซื่อสัตย์ ความโปร่งใส และความสำเร็จของคุณ",
    points: [
      "ทีมสนับสนุนที่รับสายโทรศัพท์จริง",
      "การสนับสนุนหลายภาษาในหลายตลาดและเขตเวลา",
      "ผู้เชี่ยวชาญตัวจริง ไม่ใช่แชตบอท ในยามที่สำคัญ",
    ],
    about: "เกี่ยวกับ Thaurus",
    license: "ใบอนุญาตและการกำกับดูแล",
  },
  faq: {
    heading: {
      eyebrow: "คำถามที่พบบ่อย",
      title: "คำถามที่พบบ่อย",
      subtitle: "ทุกสิ่งที่คุณควรรู้เกี่ยวกับการเทรดกับโบรกเกอร์ที่อยู่ภายใต้การกำกับดูแล",
    },
    items: [
      { q: "Thaurus คืออะไร?", a: "Thaurus คือโบรกเกอร์หลายสินทรัพย์ที่อยู่ภายใต้การกำกับดูแล ให้คุณเทรด Forex หุ้น ฟิวเจอร์ส CFD และสินค้าโภคภัณฑ์บน MetaTrader 5 บริษัท Thaurus Ltd ได้รับใบอนุญาตและกำกับดูแลโดยคณะกรรมการบริการทางการเงินของมอริเชียส (ใบอนุญาต GB22200432, Investment Dealer SEC-2.1B)" },
      { q: "การเทรดกับ Thaurus ปลอดภัยไหม?", a: "ปลอดภัย Thaurus Ltd อยู่ภายใต้การกำกับดูแลของ FSC Mauritius (ใบอนุญาต GB22200432) เงินทุนลูกค้าถูกเก็บในบัญชีแยก แพลตฟอร์มใช้การเข้ารหัสระดับธนาคารและการยืนยันตัวตนสองชั้น และการดำเนินงานผ่านการตรวจสอบโดยอิสระและการกำกับดูแลอย่างต่อเนื่อง คุณสามารถตรวจสอบใบอนุญาตได้ในทะเบียนสาธารณะของ FSC" },
      { q: "ฉันเทรดตลาดใดได้บ้าง?", a: "ห้าตลาดจากบัญชีเดียว: Forex หุ้น ฟิวเจอร์ส CFD และสินค้าโภคภัณฑ์ — รวมถึงโลหะ พลังงาน และดัชนี" },
      { q: "ต้องมีประสบการณ์ก่อนเริ่มไหม?", a: "ไม่จำเป็น คุณเปิดบัญชีเดโมฟรีเพื่อฝึกด้วยเงินจำลองได้ และใช้คอร์ส เว็บบินาร์ และเมนเทอร์เพื่อเรียนรู้ เครื่องมือบริหารความเสี่ยงช่วยให้คุณเทรดอย่างรับผิดชอบตั้งแต่วันแรก" },
      { q: "มีเครื่องมือเทรดอะไรบ้าง?", a: "ข้อมูลตลาดแบบเรียลไทม์ ปฏิทินเศรษฐกิจ สัญญาณเทรด และเครื่องคำนวณฟรี: heatmap, มาร์จิ้น, stop-loss, กำไร/ขาดทุน CFD, pivot point และ Fibonacci" },
      { q: "ทดลองบัญชีเดโมได้ไหม?", a: "ได้ ทุกประเภทบัญชีมีเดโมให้คุณทดสอบกลยุทธ์และแพลตฟอร์ม MetaTrader 5 ด้วยเงินจำลองก่อนเทรดจริง" },
      { q: "เปิดบัญชีอย่างไร?", a: "สมัครออนไลน์ ยืนยันตัวตน (KYC) ฝากเงิน แล้วเริ่มเทรดบน MetaTrader 5 การยืนยันส่วนใหญ่ได้รับการตรวจสอบภายใน 24 ชั่วโมง" },
      { q: "การดำเนินคำสั่งเร็วแค่ไหน?", a: "คำสั่งถูกส่งเพื่อการดำเนินการที่รวดเร็วและเชื่อถือได้บน MetaTrader 5 ความเร็วจริงขึ้นอยู่กับสภาพคล่องของตลาด ความผันผวน และการเชื่อมต่อของคุณ" },
      { q: "มีการสนับสนุนแบบใดบ้าง?", a: "การสนับสนุนหลายภาษาทางอีเมลและโทรศัพท์ พร้อมให้บริการลูกค้าทุกคน — คนจริงที่รับสายและช่วยเหลือ" },
    ],
  },
  cta: {
    title: "เริ่มเทรดกับโบรกเกอร์ที่อยู่ภายใต้การกำกับดูแล",
    subtitle: "เปิดบัญชีได้ในไม่กี่นาที หรือทดลองเดโมฟรีก่อน เงินทุนของคุณมีความเสี่ยง",
    primary: "เปิดบัญชี",
    secondary: "ทดลองเดโม",
  },
};

const ar: HomeData = {
  pressTitle: "ظهرنا في",
  pressNote: "ظهرنا في أكثر من 120 وسيلة إعلامية عالمية",
  why: {
    heading: {
      eyebrow: "لماذا Thaurus",
      title: "مصمَّم للمتداولين الذين يقدّرون الثقة",
      subtitle: "كل ما تحتاجه للتداول بثقة — التنظيم والأمان وأدوات احترافية ودعم بشري حقيقي.",
    },
    items: [
      { icon: "support", title: "دعم بشري حقيقي", body: "فريق متجاوب إلى جانبك. أشخاص حقيقيون، إجابات سريعة، بلا روبوتات." },
      { icon: "shield", title: "آمن ومحمي", body: "تشفير بمستوى البنوك، ومصادقة ثنائية، وفصل أموال العملاء، وعمليات تدقيق مستقلة، تحت إشراف هيئة FSC موريشيوس." },
      { icon: "tools", title: "أدوات احترافية", body: "بيانات سوق فورية، وإشارات تداول، وتقويم اقتصادي، وحاسبات مجانية لتحديد حجم كل صفقة وتخطيطها وإدارتها." },
      { icon: "learn", title: "تعلّم من الخبراء", body: "ندوات عبر الإنترنت ودورات فيديو منظَّمة ومرشدون يساعدونك على بناء منهجك، سواء كنت مبتدئًا أو تتوسّع." },
    ],
  },
  markets: {
    heading: {
      eyebrow: "الأسواق",
      title: "استكشف الأسواق",
      subtitle: "خمسة أسواق وحساب واحد على MetaTrader 5. تداول ما يتحرّك — من العملات إلى السلع.",
    },
    trade: "استكشف",
    viewAll: "عرض كل الأسواق",
    cards: [
      { slug: MARKET_SLUGS.forex, title: "الفوركس", body: "تداول أزواج العملات الرئيسية والثانوية والنادرة في أكبر سوق في العالم — يتداول نحو 7.5 تريليون دولار يوميًا." },
      { slug: MARKET_SLUGS.stocks, title: "الأسهم", body: "اتخذ مراكز شراء أو بيع على كبرى الأسهم الأمريكية والعالمية بأسعار شفّافة وتنفيذ سريع." },
      { slug: MARKET_SLUGS.futures, title: "العقود الآجلة", body: "ادخل إلى عقود آجلة للمؤشرات والطاقة والمعادن — عقود معيارية شفّافة على الأسواق التي تحرّك الاقتصاد." },
      { slug: MARKET_SLUGS.cfd, title: "عقود الفروقات", body: "تداول تحرّكات الأسعار عبر فئات أصول متعددة برافعة مالية مرنة دون امتلاك الأصل الأساسي." },
      { slug: MARKET_SLUGS.commodities, title: "السلع", body: "تداول الذهب والفضة والنفط والطاقة — ملاذات آمنة كلاسيكية وأسواق عالية الزخم في حساب واحد." },
    ],
  },
  tools: {
    heading: {
      eyebrow: "الأدوات والموارد",
      title: "أدوات تداول قوية",
      subtitle: "حاسبات مجانية لتحديد أحجام المراكز وإدارة المخاطر وتخطيط كل صفقة — دون الحاجة إلى حساب.",
    },
    viewAll: "عرض كل الأدوات",
    blurbs: {
      heatmap: "اطّلع على القوة النسبية لكل عملة في السوق بنظرة واحدة.",
      "margin-calculator": "احسب الهامش المطلوب قبل فتح المركز.",
      "stop-loss-limit": "خطّط لمستويات وقف الخسارة وجني الأرباح بثقة.",
      "cfd-profit-loss-calculator": "قدّر ربح أو خسارة صفقة عقود الفروقات في ثوانٍ.",
      "pivot-point": "حدّد الدعم والمقاومة اليومية عبر مستويات البيفوت.",
      fibonacci: "توقّع مستويات تصحيح وامتداد فيبوناتشي.",
    },
  },
  mt5: {
    title: "تداول على أكثر منصة شهرة في العالم",
    intro: "تعمل Thaurus على MetaTrader 5 — رسوم بيانية متقدمة وتداول آلي وإدارة سريعة للأوامر على سطح المكتب والويب والهاتف.",
    features: [
      "رسوم بيانية متقدمة مع أكثر من 80 مؤشرًا وإطارًا زمنيًا",
      "تداول بنقرة واحدة وعمق السوق والأوامر المعلّقة",
      "Expert Advisors والتداول الآلي",
      "مزامنة بين سطح المكتب والويب والهاتف",
    ],
    downloads: "تنزيل",
    reviews: "تقييم",
    readMore: "لماذا اخترنا MetaTrader 5",
    caption: "تداول على سطح المكتب والهاتف — في أي مكان وزمان.",
  },
  people: {
    eyebrow: "الفريق وراء المنصة",
    title: "فريق حقيقي يمكنك الاعتماد عليه",
    body: "بُنيت Thaurus على يد متداولين ومحلّلين ومدرّبين يردّون على الهاتف. خلف التقنية فريق ملتزم بالنزاهة والشفافية ونجاحك.",
    points: [
      "فريق دعم يردّ على الهاتف فعلًا",
      "دعم متعدد اللغات عبر الأسواق والمناطق الزمنية",
      "خبراء حقيقيون، لا روبوتات محادثة، عندما يهمّ الأمر",
    ],
    about: "عن Thaurus",
    license: "الترخيص والتنظيم",
  },
  faq: {
    heading: {
      eyebrow: "الأسئلة الشائعة",
      title: "الأسئلة الشائعة",
      subtitle: "كل ما تحتاج معرفته عن التداول مع وسيط مرخّص.",
    },
    items: [
      { q: "ما هي Thaurus؟", a: "Thaurus وسيط متعدد الأصول مرخّص يتيح لك تداول الفوركس والأسهم والعقود الآجلة وعقود الفروقات والسلع على MetaTrader 5. شركة Thaurus Ltd مرخّصة ومنظَّمة من قبل هيئة الخدمات المالية في موريشيوس (الترخيص GB22200432، وسيط استثمار SEC-2.1B)." },
      { q: "هل التداول مع Thaurus آمن؟", a: "نعم. Thaurus Ltd منظَّمة من قبل هيئة FSC موريشيوس (الترخيص GB22200432). تُحفظ أموال العملاء في حسابات منفصلة، وتستخدم المنصّة تشفيرًا بمستوى البنوك ومصادقة ثنائية، وتخضع العمليات لتدقيق مستقل وإشراف تنظيمي مستمر. يمكنك التحقّق من الترخيص في السجل العام لهيئة FSC." },
      { q: "ما الأسواق التي يمكنني تداولها؟", a: "خمسة أسواق من حساب واحد: الفوركس والأسهم والعقود الآجلة وعقود الفروقات والسلع — بما في ذلك المعادن والطاقة والمؤشرات." },
      { q: "هل أحتاج إلى خبرة للبدء؟", a: "لا. يمكنك فتح حساب تجريبي مجاني للتدرّب بأموال افتراضية، والاستفادة من دوراتنا وندواتنا ومرشدينا للتعلّم. تساعدك أدوات إدارة المخاطر على التداول بمسؤولية منذ اليوم الأول." },
      { q: "ما أدوات التداول المتضمَّنة؟", a: "بيانات سوق فورية، وتقويم اقتصادي، وإشارات تداول، وحاسبات مجانية: خريطة حرارية، والهامش، ووقف الخسارة، وربح/خسارة عقود الفروقات، ونقاط البيفوت، وفيبوناتشي." },
      { q: "هل يمكنني تجربة حساب تجريبي؟", a: "نعم. يتضمّن كل نوع حساب نسخة تجريبية لاختبار الاستراتيجيات ومنصّة MetaTrader 5 بأموال افتراضية قبل التداول الحقيقي." },
      { q: "كيف أفتح حسابًا؟", a: "سجّل عبر الإنترنت، وتحقّق من هويتك (KYC)، ومَوّل حسابك، وابدأ التداول على MetaTrader 5. تُراجَع معظم عمليات التحقّق خلال 24 ساعة." },
      { q: "ما سرعة تنفيذ الأوامر؟", a: "تُوجَّه الأوامر لتنفيذ سريع وموثوق على MetaTrader 5. تعتمد السرعة الفعلية على سيولة السوق والتقلّب واتصالك." },
      { q: "ما الدعم المتاح؟", a: "دعم متعدد اللغات عبر البريد الإلكتروني والهاتف، متاح لجميع العملاء — أشخاص حقيقيون يردّون ويساعدون." },
    ],
  },
  cta: {
    title: "ابدأ التداول مع وسيط مرخّص",
    subtitle: "افتح حسابك في دقائق، أو جرّب نسخة تجريبية مجانية أولًا. رأس مالك معرّض للمخاطر.",
    primary: "فتح حساب",
    secondary: "تجربة حساب تجريبي",
  },
};

const HOME: Record<Locale, HomeData> = { en, es, pt, th, ar };

export function getHome(locale: string): HomeData {
  return byLocale(HOME, locale);
}

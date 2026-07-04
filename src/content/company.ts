/** Company / About page content — localized (all 5 langs). Machine-translated;
 *  needs native review before go-live. */
import type { IconName } from "@/components/ui/Icon";
import type { Locale } from "@/i18n/routing";
import { byLocale } from "@/lib/i18n-content";

export type CompanyData = {
  heroEyebrow: string;
  heroTitle: string;
  heroIntro: string;
  missionEyebrow: string;
  missionTitle: string;
  missionP1: string;
  missionP2: string;
  licenseBtn: string;
  valuesEyebrow: string;
  valuesTitle: string;
  valuesSub: string;
  values: { icon: IconName; title: string; body: string }[];
  teamEyebrow: string;
  teamTitle: string;
  teamBody: string;
  openAccount: string;
  contactUs: string;
  ctaTitle: string;
  ctaSub: string;
};

const en: CompanyData = {
  heroEyebrow: "About", heroTitle: "The smart way to invest",
  heroIntro: "Thaurus is a regulated multi-asset broker built by traders, analysts and educators — people who believe investing should be transparent, accessible and genuinely supported.",
  missionEyebrow: "Our mission", missionTitle: "A company you can rely on",
  missionP1: "We exist to make multi-asset trading accessible and trustworthy. That means a regulated foundation, professional-grade tools on MetaTrader 5, and real human support at every stage of your journey.",
  missionP2: "Our team combines market professionals with educators, so whether you are placing your first trade or refining an advanced strategy, there is always someone to help.",
  licenseBtn: "See our license & regulation",
  valuesEyebrow: "Committed to success", valuesTitle: "The values we trade by",
  valuesSub: "Honesty, transparency and integrity aren’t slogans — they’re how a regulated broker has to operate.",
  values: [
    { icon: "verified", title: "Honesty", body: "We say what we mean — clear terms, no hidden catches, and a license you can verify." },
    { icon: "globe", title: "Transparency", body: "Open pricing, public regulation and honest communication at every step." },
    { icon: "shield", title: "Integrity", body: "We put client interests first and operate under strict regulatory standards." },
  ],
  teamEyebrow: "The team", teamTitle: "People, not just a platform",
  teamBody: "Behind every account is a real team of analysts, support specialists and account managers working from our offices to help clients trade with confidence — committed to honesty, transparency and your long-term success.",
  openAccount: "Open account", contactUs: "Contact us",
  ctaTitle: "Invest the smart way", ctaSub: "Join Thaurus and trade five markets on MetaTrader 5, backed by a real team and a verifiable license.",
};

const es: CompanyData = {
  heroEyebrow: "Nosotros", heroTitle: "La forma inteligente de invertir",
  heroIntro: "Thaurus es un bróker multiactivo regulado, creado por traders, analistas y formadores — personas que creen que invertir debe ser transparente, accesible y estar realmente acompañado.",
  missionEyebrow: "Nuestra misión", missionTitle: "Una empresa en la que confiar",
  missionP1: "Existimos para hacer el trading multiactivo accesible y confiable. Eso significa una base regulada, herramientas de nivel profesional en MetaTrader 5 y atención humana real en cada etapa de tu camino.",
  missionP2: "Nuestro equipo combina profesionales del mercado con formadores, así que tanto si haces tu primera operación como si perfeccionas una estrategia avanzada, siempre hay alguien para ayudar.",
  licenseBtn: "Ver nuestra licencia y regulación",
  valuesEyebrow: "Comprometidos con el éxito", valuesTitle: "Los valores con los que operamos",
  valuesSub: "Honestidad, transparencia e integridad no son eslóganes — son la forma en que un bróker regulado debe operar.",
  values: [
    { icon: "verified", title: "Honestidad", body: "Decimos lo que pensamos — términos claros, sin letra pequeña, y una licencia que puedes verificar." },
    { icon: "globe", title: "Transparencia", body: "Precios abiertos, regulación pública y comunicación honesta en cada paso." },
    { icon: "shield", title: "Integridad", body: "Ponemos primero los intereses del cliente y operamos bajo estrictos estándares regulatorios." },
  ],
  teamEyebrow: "El equipo", teamTitle: "Personas, no solo una plataforma",
  teamBody: "Detrás de cada cuenta hay un equipo real de analistas, especialistas de soporte y gestores de cuenta que trabajan desde nuestras oficinas para ayudar a los clientes a operar con confianza — comprometidos con la honestidad, la transparencia y tu éxito a largo plazo.",
  openAccount: "Abrir cuenta", contactUs: "Contáctanos",
  ctaTitle: "Invierte de forma inteligente", ctaSub: "Únete a Thaurus y opera cinco mercados en MetaTrader 5, con el respaldo de un equipo real y una licencia verificable.",
};

const pt: CompanyData = {
  heroEyebrow: "Sobre", heroTitle: "A forma inteligente de investir",
  heroIntro: "A Thaurus é uma corretora multiativos regulada, criada por traders, analistas e educadores — pessoas que acreditam que investir deve ser transparente, acessível e realmente apoiado.",
  missionEyebrow: "Nossa missão", missionTitle: "Uma empresa em quem confiar",
  missionP1: "Existimos para tornar o trading multiativos acessível e confiável. Isso significa uma base regulada, ferramentas de nível profissional no MetaTrader 5 e suporte humano real em cada etapa da sua jornada.",
  missionP2: "Nossa equipe combina profissionais do mercado com educadores, então, seja na sua primeira operação ou no aperfeiçoamento de uma estratégia avançada, há sempre alguém para ajudar.",
  licenseBtn: "Ver nossa licença e regulação",
  valuesEyebrow: "Comprometidos com o sucesso", valuesTitle: "Os valores pelos quais operamos",
  valuesSub: "Honestidade, transparência e integridade não são slogans — é assim que uma corretora regulada precisa operar.",
  values: [
    { icon: "verified", title: "Honestidade", body: "Dizemos o que pensamos — termos claros, sem pegadinhas, e uma licença que você pode verificar." },
    { icon: "globe", title: "Transparência", body: "Preços abertos, regulação pública e comunicação honesta em cada passo." },
    { icon: "shield", title: "Integridade", body: "Colocamos os interesses do cliente em primeiro lugar e operamos sob rígidos padrões regulatórios." },
  ],
  teamEyebrow: "A equipe", teamTitle: "Pessoas, não apenas uma plataforma",
  teamBody: "Por trás de cada conta há uma equipe real de analistas, especialistas de suporte e gerentes de conta que trabalham em nossos escritórios para ajudar os clientes a operar com confiança — comprometidos com a honestidade, a transparência e o seu sucesso a longo prazo.",
  openAccount: "Abrir conta", contactUs: "Fale conosco",
  ctaTitle: "Invista de forma inteligente", ctaSub: "Junte-se à Thaurus e negocie cinco mercados no MetaTrader 5, com o apoio de uma equipe real e uma licença verificável.",
};

const th: CompanyData = {
  heroEyebrow: "เกี่ยวกับเรา", heroTitle: "วิธีลงทุนอย่างชาญฉลาด",
  heroIntro: "Thaurus คือโบรกเกอร์หลายสินทรัพย์ที่อยู่ภายใต้การกำกับดูแล สร้างโดยเทรดเดอร์ นักวิเคราะห์ และผู้สอน — ผู้ที่เชื่อว่าการลงทุนควรโปร่งใส เข้าถึงได้ และได้รับการสนับสนุนอย่างแท้จริง",
  missionEyebrow: "พันธกิจของเรา", missionTitle: "บริษัทที่คุณวางใจได้",
  missionP1: "เราดำรงอยู่เพื่อทำให้การเทรดหลายสินทรัพย์เข้าถึงได้และน่าเชื่อถือ นั่นหมายถึงรากฐานที่อยู่ภายใต้การกำกับดูแล เครื่องมือระดับมืออาชีพบน MetaTrader 5 และการสนับสนุนจากคนจริงในทุกขั้นตอนของการเดินทางของคุณ",
  missionP2: "ทีมงานของเรารวมผู้เชี่ยวชาญด้านตลาดเข้ากับผู้สอน ดังนั้นไม่ว่าคุณจะเทรดครั้งแรกหรือปรับปรุงกลยุทธ์ขั้นสูง ก็มีคนคอยช่วยเหลือเสมอ",
  licenseBtn: "ดูใบอนุญาตและการกำกับดูแลของเรา",
  valuesEyebrow: "มุ่งมั่นสู่ความสำเร็จ", valuesTitle: "คุณค่าที่เรายึดถือ",
  valuesSub: "ความซื่อสัตย์ ความโปร่งใส และความซื่อตรง ไม่ใช่สโลแกน — แต่เป็นวิธีที่โบรกเกอร์ภายใต้การกำกับดูแลต้องดำเนินงาน",
  values: [
    { icon: "verified", title: "ความซื่อสัตย์", body: "เราพูดตรงไปตรงมา — เงื่อนไขชัดเจน ไม่มีกับดักซ่อนเร้น และใบอนุญาตที่คุณตรวจสอบได้" },
    { icon: "globe", title: "ความโปร่งใส", body: "ราคาเปิดเผย การกำกับดูแลที่ตรวจสอบได้ และการสื่อสารที่ซื่อสัตย์ในทุกขั้นตอน" },
    { icon: "shield", title: "ความซื่อตรง", body: "เราให้ความสำคัญกับผลประโยชน์ของลูกค้าเป็นอันดับแรก และดำเนินงานภายใต้มาตรฐานการกำกับดูแลที่เข้มงวด" },
  ],
  teamEyebrow: "ทีมงาน", teamTitle: "คนจริง ไม่ใช่แค่แพลตฟอร์ม",
  teamBody: "เบื้องหลังทุกบัญชีคือทีมงานจริง ทั้งนักวิเคราะห์ ผู้เชี่ยวชาญฝ่ายสนับสนุน และผู้จัดการบัญชี ที่ทำงานจากออฟฟิศของเราเพื่อช่วยให้ลูกค้าเทรดอย่างมั่นใจ — ยึดมั่นในความซื่อสัตย์ ความโปร่งใส และความสำเร็จระยะยาวของคุณ",
  openAccount: "เปิดบัญชี", contactUs: "ติดต่อเรา",
  ctaTitle: "ลงทุนอย่างชาญฉลาด", ctaSub: "เข้าร่วม Thaurus และเทรดห้าตลาดบน MetaTrader 5 ด้วยทีมงานจริงและใบอนุญาตที่ตรวจสอบได้",
};

const ar: CompanyData = {
  heroEyebrow: "من نحن", heroTitle: "الطريقة الذكية للاستثمار",
  heroIntro: "Thaurus وسيط متعدد الأصول مرخّص، بناه متداولون ومحلّلون ومدرّبون — أشخاص يؤمنون بأن الاستثمار يجب أن يكون شفّافًا ومتاحًا ومدعومًا حقًّا.",
  missionEyebrow: "مهمتنا", missionTitle: "شركة يمكنك الاعتماد عليها",
  missionP1: "نحن موجودون لجعل التداول متعدد الأصول متاحًا وجديرًا بالثقة. وهذا يعني أساسًا منظَّمًا، وأدوات احترافية على MetaTrader 5، ودعمًا بشريًا حقيقيًا في كل مرحلة من رحلتك.",
  missionP2: "يجمع فريقنا بين محترفي السوق والمدرّبين، لذا سواء كنت تنفّذ صفقتك الأولى أو تحسّن استراتيجية متقدمة، هناك دائمًا من يساعدك.",
  licenseBtn: "اطّلع على ترخيصنا وتنظيمنا",
  valuesEyebrow: "ملتزمون بالنجاح", valuesTitle: "القيم التي نتداول بها",
  valuesSub: "النزاهة والشفافية والاستقامة ليست شعارات — بل هي الطريقة التي يجب أن يعمل بها وسيط مرخّص.",
  values: [
    { icon: "verified", title: "النزاهة", body: "نقول ما نعنيه — شروط واضحة، بلا فخاخ خفية، وترخيص يمكنك التحقّق منه." },
    { icon: "globe", title: "الشفافية", body: "أسعار مكشوفة، وتنظيم عام، وتواصل صادق في كل خطوة." },
    { icon: "shield", title: "الاستقامة", body: "نضع مصالح العميل أولًا ونعمل وفق معايير تنظيمية صارمة." },
  ],
  teamEyebrow: "الفريق", teamTitle: "أشخاص، لا مجرّد منصة",
  teamBody: "خلف كل حساب فريق حقيقي من المحلّلين وأخصائيي الدعم ومدراء الحسابات يعملون من مكاتبنا لمساعدة العملاء على التداول بثقة — ملتزمون بالنزاهة والشفافية ونجاحك على المدى الطويل.",
  openAccount: "فتح حساب", contactUs: "تواصل معنا",
  ctaTitle: "استثمر بذكاء", ctaSub: "انضم إلى Thaurus وتداول خمسة أسواق على MetaTrader 5، مدعومًا بفريق حقيقي وترخيص قابل للتحقّق.",
};

const COMPANY: Record<Locale, CompanyData> = { en, es, pt, th, ar };

export function getCompany(locale: string): CompanyData {
  return byLocale(COMPANY, locale);
}

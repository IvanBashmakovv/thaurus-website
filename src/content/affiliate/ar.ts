import type { AffiliateData } from "./types";
import { REVIEWS } from "./reviews";
import { FAQ_AR } from "./ar.faq";

export const ar: AffiliateData = {
  cta: "كن شريكاً",
  learnMore: "اعرف المزيد",
  nav: {
    items: [
      { label: "IB Partners", href: "#programs" },
      { label: "Affiliates", href: "#programs" },
      { label: "لماذا Thaurus", href: "#benefits" },
      { label: "الأسئلة الشائعة", href: "#faq" },
    ],
    language: "اللغة",
  },
  velocity: "ابدأ الآن مع Thaurus",
  hero: {
    badge: "برنامج الشراكة",
    title: "ضاعف أرباحك",
    sub: "احصل على حصة من الإيرادات أو عمولة CPA تنافسية مقابل إحالة المتداولين إلى Thaurus.",
    features: [
      { icon: "percent", title: "حصة إيرادات أو CPA", sub: "نموذجان للعمولة" },
      { icon: "clock", title: "دفعات سريعة", sub: "خيارات دفع منتظمة" },
      { icon: "shield", title: "وسيط مرخّص", sub: "FSC موريشيوس · GB22200432" },
    ],
  },
  trusted: {
    label: "يثق بنا",
    tiles: [
      { value: "120+", label: "ظهور إعلامي" },
      { value: "4.4/5", label: "تقييم Trustpilot", logo: "trustpilot" },
      { value: "4.6/5", label: "تقييم Google", logo: "google" },
    ],
  },
  programs: {
    eyebrow: "اختر نوع شراكتك",
    title: "اربح أكثر مع برامج الشراكة لدينا",
    cards: [
      { program: "ib", model: "نموذج حصة الإيرادات", cta: "كن شريكاً",
        bullets: ["دفعات تنافسية", "إمكانات ربح طويلة الأمد", "عمولة بناءً على حجم تداول العملاء الذين تحيلهم"] },
      { program: "affiliates", model: "نموذج CPA", cta: "كن مسوّقاً",
        bullets: ["CPA (تكلفة لكل إجراء) تنافسية", "أرباح مبنية على الأداء", "عمولة عن كل عميل مُحال مؤهَّل"] },
    ],
  },
  benefits: {
    eyebrow: "أهم مزايا كل برنامج",
    title: "لماذا تصبح شريكاً لـ Thaurus؟",
    items: [
      { art: "commissions", title: "عمولات مرتفعة", body: "احصل على حصة من الإيرادات من المتداولين النشطين الذين أحلتهم، أو CPA ثابتة عن كل عميل مؤهَّل." },
      { art: "payouts", title: "دفعات سريعة", body: "خيارات دفع منتظمة بحسب البرنامج." },
      { art: "withdrawals", title: "سحب سهل", body: "اسحب عمولتك من حساب الشريك متى احتجت إليها." },
      { art: "trusted", title: "شريك موثوق", body: "Thaurus Ltd مرخّصة ومنظّمة من قبل FSC موريشيوس (الترخيص GB22200432)." },
      { art: "creatives", title: "مواد إعلانية مجانية", body: "حزمة شعارات ولافتات وصفحات هبوط جاهزة للتنزيل لحملاتك." },
      { art: "tracking", title: "تتبّع متقدم", body: "تابع النقرات والتسجيلات والمتداولين النشطين في لوحة الشريك في الوقت الفعلي." },
      { art: "support", title: "فريق الدعم", body: "مدير الشراكة الخاص بك وsupport@thaurus.com في خدمتك متى احتجت." },
    ],
  },
  comparison: {
    eyebrow: "مقارنة",
    title: "ما الفرق بين البرنامجين؟",
    rows: [
      { label: "توقيت الدفع", a: "دفعات مدى الحياة بناءً على حجم تداول العملاء المُحالين.", b: "دفعات ثابتة لمرة واحدة." },
      { label: "قيمة الدفع", a: "حصة من إيرادات تداولات العملاء المُحالين. يُتفق على النسبة عند اعتماد حسابك.", b: "دفعة مبنية على الأداء عن كل عميل مؤهَّل فريد يبدأ التداول بنشاط مع Thaurus." },
      { label: "النموذج", a: "حصة إيرادات – أرباح بناءً على حجم التداول.", b: "CPA (تكلفة لكل إجراء) – أرباح بناءً على أول إيداع للمتداول ونشاطه في التداول." },
      { label: "التخصص", a: "خبراء التداول والوسطاء المعرِّفون.", b: "صنّاع المحتوى المالي ومشترو الإعلانات." },
    ],
    ctaA: "كن شريكاً",
    ctaB: "كن مسوّقاً",
  },
  steps: {
    eyebrow: "كيف يعمل",
    title: "ابدأ الربح في أربع خطوات بسيطة",
    sub: "احصل على العمولة بحسب البرنامج.",
    stepLabel: "الخطوة",
    items: [
      { title: "سجّل", body: "قدّم طلبك كمسوّق أو شريك IB لدى Thaurus." },
      { title: "أحِل متداولاً", body: "عرّف عميلاً جديداً على Thaurus عبر رابط الشريك الخاص بك." },
      { title: "يتداول العميل", body: "انتظر حتى يبدأ العميل الذي عرّفته بالتداول." },
      { title: "تربح", body: "احصل على العمولة بحسب البرنامج." },
    ],
  },
  testimonials: {
    eyebrow: "آراء الشركاء",
    title: "ماذا يقول شركاؤنا عنا",
    authorLabel: "شريك Thaurus",
    items: REVIEWS,
    pending: "يجري جمع آراء الشركاء وستُنشر هنا مع اسم الشريك وبرنامجه.",
  },
  faq: { eyebrow: "الأسئلة الشائعة", title: "الأسئلة الشائعة", items: FAQ_AR },
  finalCta: {
    title: "ابدأ الربح اليوم",
    cards: [
      { program: "ib", headline: "عمولات مدى الحياة", model: "نموذج حصة الإيرادات", cta: "كن شريكاً" },
      { program: "affiliates", headline: "عمولات مبنية على الأداء", model: "نموذج CPA", cta: "كن مسوّقاً" },
    ],
  },
  apply: {
    eyebrow: "قدّم طلبك",
    title: "قدّم طلب الانضمام إلى البرنامج",
    sub: "أخبرنا عن جمهورك. يرد فريق الشراكات عبر البريد الإلكتروني.",
    name: "الاسم الكامل", email: "البريد الإلكتروني",
    contact: "الهاتف أو Telegram", contactHint: "كيف نتواصل معك",
    traffic: "الموقع أو القناة أو مصدر الزيارات", trafficHint: "أين ستروّج لـ Thaurus",
    program: "البرنامج", programIb: "IB Partners (حصة إيرادات)", programAffiliate: "Affiliates (CPA)",
    message: "رسالة (اختياري)",
    submit: "إرسال الطلب", sending: "جارٍ الإرسال…",
    successTitle: "تم استلام طلبك", successBody: "سيتواصل معك مدير الشراكات عبر البريد الإلكتروني أو Telegram.",
    successSteps: ["تم استلام الطلب", "يراجع مدير الشراكات ملفك", "يتواصل معك المدير بالخطوات التالية"],
    errorHint: "تحقق من الحقول المحددة.",
    errors: { name: "أدخل اسمك الكامل.", email: "أدخل بريداً إلكترونياً صحيحاً.", contact: "أخبرنا كيف نتواصل معك.", traffic: "أخبرنا أين ستروّج.", program: "اختر برنامجاً." },
    risk: "Trading foreign exchange on margin carries a high level of risk, and may not be suitable for all investors.",
  },
};

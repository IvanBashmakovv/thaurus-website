/** Contact page + form content — localized (all 5 langs). Machine-translated;
 *  needs native review. (Form validation messages come from the server action
 *  and remain English for now.) */
import type { Locale } from "@/i18n/routing";
import { byLocale } from "@/lib/i18n-content";

export type ContactData = {
  heroEyebrow: string;
  heroTitle: string;
  heroIntro: string;
  reachTeam: string;
  emailLabel: string;
  phoneLabel: string;
  officeLabel: string;
  formTitle: string;
  formSub: string;
  fullName: string;
  email: string;
  country: string;
  message: string;
  selectCountry: string;
  messagePh: string;
  submit: string;
  sending: string;
  agree: string;
  sentTitle: string;
};

const en: ContactData = {
  heroEyebrow: "Contact", heroTitle: "Talk to a real person",
  heroIntro: "Questions about accounts, the platform or regulation? Our multilingual team is here to help — we typically reply within 24 hours.",
  reachTeam: "Reach our team", emailLabel: "Email", phoneLabel: "Phone", officeLabel: "Registered office",
  formTitle: "Send us a message", formSub: "Fill in the form and we’ll get back to you shortly.",
  fullName: "Full name", email: "Email", country: "Country of residence", message: "Message",
  selectCountry: "Select your country…", messagePh: "How can we help?",
  submit: "Send message", sending: "Sending…",
  agree: "By submitting this form you agree to be contacted by Thaurus regarding your enquiry. Your capital is at risk when trading.",
  sentTitle: "Message sent",
};
const es: ContactData = {
  heroEyebrow: "Contacto", heroTitle: "Habla con una persona real",
  heroIntro: "¿Preguntas sobre cuentas, la plataforma o la regulación? Nuestro equipo multilingüe está aquí para ayudarte — solemos responder en 24 horas.",
  reachTeam: "Contacta con nuestro equipo", emailLabel: "Correo", phoneLabel: "Teléfono", officeLabel: "Domicilio social",
  formTitle: "Envíanos un mensaje", formSub: "Rellena el formulario y te responderemos en breve.",
  fullName: "Nombre completo", email: "Correo electrónico", country: "País de residencia", message: "Mensaje",
  selectCountry: "Selecciona tu país…", messagePh: "¿Cómo podemos ayudarte?",
  submit: "Enviar mensaje", sending: "Enviando…",
  agree: "Al enviar este formulario aceptas que Thaurus te contacte en relación con tu consulta. Tu capital está en riesgo al operar.",
  sentTitle: "Mensaje enviado",
};
const pt: ContactData = {
  heroEyebrow: "Contato", heroTitle: "Fale com uma pessoa de verdade",
  heroIntro: "Dúvidas sobre contas, a plataforma ou a regulação? Nossa equipe multilíngue está aqui para ajudar — normalmente respondemos em 24 horas.",
  reachTeam: "Fale com nossa equipe", emailLabel: "E-mail", phoneLabel: "Telefone", officeLabel: "Sede registrada",
  formTitle: "Envie uma mensagem", formSub: "Preencha o formulário e retornaremos em breve.",
  fullName: "Nome completo", email: "E-mail", country: "País de residência", message: "Mensagem",
  selectCountry: "Selecione seu país…", messagePh: "Como podemos ajudar?",
  submit: "Enviar mensagem", sending: "Enviando…",
  agree: "Ao enviar este formulário, você concorda em ser contatado pela Thaurus sobre sua solicitação. Seu capital está em risco ao operar.",
  sentTitle: "Mensagem enviada",
};
const th: ContactData = {
  heroEyebrow: "ติดต่อ", heroTitle: "พูดคุยกับคนจริง",
  heroIntro: "มีคำถามเกี่ยวกับบัญชี แพลตฟอร์ม หรือการกำกับดูแล? ทีมงานหลายภาษาของเราพร้อมช่วยเหลือ — โดยทั่วไปเราตอบกลับภายใน 24 ชั่วโมง",
  reachTeam: "ติดต่อทีมงานของเรา", emailLabel: "อีเมล", phoneLabel: "โทรศัพท์", officeLabel: "สำนักงานจดทะเบียน",
  formTitle: "ส่งข้อความถึงเรา", formSub: "กรอกแบบฟอร์มแล้วเราจะติดต่อกลับโดยเร็ว",
  fullName: "ชื่อ-นามสกุล", email: "อีเมล", country: "ประเทศที่พำนัก", message: "ข้อความ",
  selectCountry: "เลือกประเทศของคุณ…", messagePh: "เราจะช่วยอะไรได้บ้าง?",
  submit: "ส่งข้อความ", sending: "กำลังส่ง…",
  agree: "การส่งแบบฟอร์มนี้ถือว่าคุณยินยอมให้ Thaurus ติดต่อเกี่ยวกับคำถามของคุณ การเทรดมีความเสี่ยงต่อเงินทุนของคุณ",
  sentTitle: "ส่งข้อความแล้ว",
};
const ar: ContactData = {
  heroEyebrow: "اتصل بنا", heroTitle: "تحدّث إلى شخص حقيقي",
  heroIntro: "أسئلة حول الحسابات أو المنصّة أو التنظيم؟ فريقنا متعدد اللغات هنا للمساعدة — نردّ عادةً خلال 24 ساعة.",
  reachTeam: "تواصل مع فريقنا", emailLabel: "البريد الإلكتروني", phoneLabel: "الهاتف", officeLabel: "المكتب المسجّل",
  formTitle: "أرسل لنا رسالة", formSub: "املأ النموذج وسنردّ عليك قريبًا.",
  fullName: "الاسم الكامل", email: "البريد الإلكتروني", country: "بلد الإقامة", message: "الرسالة",
  selectCountry: "اختر بلدك…", messagePh: "كيف يمكننا المساعدة؟",
  submit: "إرسال الرسالة", sending: "جارٍ الإرسال…",
  agree: "بإرسالك هذا النموذج توافق على أن تتواصل معك Thaurus بخصوص استفسارك. رأس مالك معرّض للمخاطر عند التداول.",
  sentTitle: "تم إرسال الرسالة",
};

const CONTACT: Record<Locale, ContactData> = { en, es, pt, th, ar };

export function getContact(locale: string): ContactData {
  return byLocale(CONTACT, locale);
}

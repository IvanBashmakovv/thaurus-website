import type { AffiliateData } from "./types";
import { REVIEWS } from "./reviews";
import { FAQ_PT } from "./pt.faq";

export const pt: AffiliateData = {
  cta: "Torne-se parceiro",
  learnMore: "Saiba mais",
  nav: {
    items: [
      { label: "IB Partners", href: "#programs" },
      { label: "Affiliates", href: "#programs" },
      { label: "Por que a Thaurus", href: "#benefits" },
      { label: "FAQ", href: "#faq" },
    ],
    language: "Idioma",
  },
  velocity: "Comece agora com a Thaurus",
  hero: {
    badge: "Programa de parceria",
    title: "Maximize os seus ganhos",
    sub: "Receba uma participação na receita ou comissão CPA competitiva por indicar traders para a Thaurus.",
    features: [
      { icon: "percent", title: "Revenue share ou CPA", sub: "Dois modelos de comissão" },
      { icon: "clock", title: "Pagamentos rápidos", sub: "Opções regulares de pagamento" },
      { icon: "shield", title: "Corretora licenciada", sub: "FSC Maurício · GB22200432" },
    ],
  },
  trusted: {
    label: "Confiam em nós",
    tiles: [
      { value: "120+", label: "Aparições na mídia" },
      { value: "4.4/5", label: "Avaliação Trustpilot", logo: "trustpilot" },
      { value: "4.6/5", label: "Avaliação Google", logo: "google" },
    ],
  },
  programs: {
    eyebrow: "Escolha a sua parceria",
    title: "Ganhe mais com os nossos programas de parceria",
    cards: [
      { program: "ib", model: "Modelo de revenue share", cta: "Torne-se parceiro",
        bullets: ["Pagamentos competitivos", "Potencial de ganhos de longo prazo", "Comissão baseada no volume de negociação dos clientes indicados"] },
      { program: "affiliates", model: "Modelo CPA", cta: "Torne-se afiliado",
        bullets: ["CPA (custo por ação) competitivo", "Ganhos baseados em desempenho", "Comissão por cada cliente indicado qualificado"] },
    ],
  },
  benefits: {
    eyebrow: "Principais vantagens de cada programa",
    title: "Por que ser parceiro da Thaurus?",
    items: [
      { art: "commissions", title: "Comissões altas", body: "Receba revenue share dos traders ativos que indicou, ou um CPA fixo por cliente qualificado." },
      { art: "payouts", title: "Pagamentos rápidos", body: "Opções regulares de pagamento, conforme o programa." },
      { art: "withdrawals", title: "Saques fáceis", body: "Saque a comissão acumulada da sua conta de parceiro sempre que precisar." },
      { art: "trusted", title: "Um parceiro de confiança", body: "A Thaurus Ltd é licenciada e regulada pela FSC de Maurício (licença GB22200432)." },
      { art: "creatives", title: "Criativos gratuitos", body: "Pacote de logos, banners e landing pages prontos para download para as suas campanhas." },
      { art: "tracking", title: "Rastreamento avançado", body: "Acompanhe cliques, cadastros e traders ativos no seu painel de parceiro, em tempo real." },
      { art: "support", title: "Equipe de suporte", body: "O seu gerente de parceria e support@thaurus.com, sempre que precisar." },
    ],
  },
  comparison: {
    eyebrow: "Comparação",
    title: "Qual é a diferença entre os programas?",
    rows: [
      { label: "Momento do pagamento", a: "Pagamentos vitalícios, com base no volume de negociação dos clientes indicados.", b: "Pagamentos fixos, uma única vez." },
      { label: "Valor do pagamento", a: "Uma parte da receita das operações dos clientes indicados. A taxa é acordada na aprovação da conta.", b: "Pagamento por desempenho para cada cliente qualificado único que começa a operar ativamente na Thaurus." },
      { label: "Modelo", a: "Revenue share – ganhos com base no volume de negociação.", b: "CPA (custo por ação) – ganhos com base no primeiro depósito e na atividade de negociação do trader." },
      { label: "Especialização", a: "Especialistas em trading e introducing brokers.", b: "Criadores de conteúdo financeiro e media buyers." },
    ],
    ctaA: "Torne-se parceiro",
    ctaB: "Torne-se afiliado",
  },
  steps: {
    eyebrow: "Como funciona",
    title: "Comece a ganhar em quatro passos simples",
    sub: "Receba comissão conforme o programa.",
    stepLabel: "Passo",
    items: [
      { title: "Cadastre-se", body: "Candidate-se como afiliado ou IB partner da Thaurus." },
      { title: "Indique um trader", body: "Apresente um novo cliente à Thaurus com o seu link de parceiro." },
      { title: "O cliente opera", body: "Aguarde o cliente indicado começar a operar." },
      { title: "Você ganha", body: "Receba comissão conforme o programa." },
    ],
  },
  testimonials: {
    eyebrow: "Depoimentos",
    title: "Veja o que os nossos parceiros dizem",
    authorLabel: "Parceiro Thaurus",
    items: REVIEWS,
    pending: "As avaliações dos parceiros estão sendo coletadas e serão publicadas aqui com o nome e o programa do parceiro.",
  },
  faq: { eyebrow: "FAQ", title: "Perguntas frequentes", items: FAQ_PT },
  finalCta: {
    title: "Comece a ganhar hoje",
    cards: [
      { program: "ib", headline: "Comissões vitalícias", model: "Modelo de revenue share", cta: "Torne-se parceiro" },
      { program: "affiliates", headline: "Comissões por desempenho", model: "Modelo CPA", cta: "Torne-se afiliado" },
    ],
  },
  apply: {
    eyebrow: "Candidatura",
    title: "Candidate-se ao programa",
    sub: "Conte-nos sobre o seu público. A equipe de parcerias responde por email.",
    name: "Nome completo", email: "Email",
    contact: "Telefone ou Telegram", contactHint: "Como podemos falar com você",
    traffic: "Site, canal ou fonte de tráfego", trafficHint: "Onde você vai divulgar a Thaurus",
    program: "Programa", programIb: "IB Partners (revenue share)", programAffiliate: "Affiliates (CPA)",
    message: "Mensagem (opcional)",
    submit: "Enviar candidatura", sending: "Enviando…",
    successTitle: "Candidatura recebida", successBody: "O nosso gerente de parcerias entrará em contato por email ou Telegram.",
    successSteps: ["Candidatura recebida", "Um gerente de parcerias analisa o seu perfil", "O gerente entra em contato com os próximos passos"],
    errorHint: "Verifique os campos destacados.",
    errors: { name: "Informe o seu nome completo.", email: "Informe um email válido.", contact: "Diga como podemos falar com você.", traffic: "Diga onde vai divulgar.", program: "Escolha um programa." },
    risk: "Trading foreign exchange on margin carries a high level of risk, and may not be suitable for all investors.",
  },
};

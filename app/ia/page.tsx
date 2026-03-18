import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Agentes de IA e Chatbots — Kteck',
  description: 'Automatize seu atendimento com Agentes de IA e Chatbots inteligentes. Integração com WhatsApp, Instagram e site. Kteck — IA para empresas no Brasil.',
  keywords: 'agentes de IA, chatbot empresarial, chatbot WhatsApp, automação de atendimento, inteligência artificial para empresas, IA Brasil',
  openGraph: {
    title: 'Agentes de IA e Chatbots — Kteck',
    description: 'Automatize seu atendimento com IA. Integração com WhatsApp, Instagram e site.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function PageIA() {
  return (
    <ServicePageLayout
      tag="Inteligência Artificial"
      title="Atendimento inteligente,"
      titleHighlight="24h por dia."
      description="Crie agentes de IA treinados com o conhecimento da sua empresa. Atenda clientes automaticamente no WhatsApp, Instagram e site — sem perder qualidade."
      accent="#3DD6F5"
      accentDim="rgba(61,214,245,0.08)"
      accentBorder="rgba(61,214,245,0.22)"
      services={[
        { icon: '🤖', title: 'Agentes de IA personalizados',    desc: 'Criamos agentes treinados com os dados da sua empresa — produtos, FAQs, políticas e processos internos.' },
        { icon: '💬', title: 'Integração WhatsApp Business',    desc: 'Conexão oficial com a API do WhatsApp Business para atendimento em escala, sem limitações.' },
        { icon: '📱', title: 'Instagram e site',               desc: 'Chatbot integrado ao Direct do Instagram e widget para seu site em menos de 1 hora.' },
        { icon: '🔄', title: 'Transferência para humano',      desc: 'Quando necessário, o agente transfere automaticamente para um atendente humano com todo o contexto.' },
        { icon: '📊', title: 'Dashboard de conversas',         desc: 'Acompanhe em tempo real todas as conversas, métricas de satisfação e volume de atendimentos.' },
        { icon: '🧠', title: 'Aprendizado contínuo',           desc: 'O agente melhora com o tempo a partir das interações, sempre ficando mais preciso e eficiente.' },
      ]}
      cases={[
        { emoji: '🛒', sector: 'E-commerce', challenge: 'Mais de 500 atendimentos/dia sobre status de pedidos e trocas, equipe sobrecarregada.', result: '82% dos atendimentos resolvidos automaticamente, redução de 60% no tempo de resposta.' },
        { emoji: '🏥', sector: 'Clínica médica', challenge: 'Agendamentos e confirmações de consulta feitos manualmente por telefone.', result: 'Agendamento 100% automatizado via WhatsApp, zero faltas por esquecimento.' },
        { emoji: '🏠', sector: 'Imobiliária', challenge: 'Leads respondidos horas depois do contato inicial, perdendo negócios.', result: 'Resposta em menos de 30 segundos, aumento de 40% na taxa de conversão de leads.' },
      ]}
      plans={[
        {
          name: 'Starter', price: '397', period: '/mês',
          desc: 'Para empresas que querem dar o primeiro passo com IA.',
          features: ['1 agente de IA', 'Integração WhatsApp', 'Até 2.000 mensagens/mês', 'Dashboard básico', 'Suporte por e-mail'],
          highlighted: false, cta: 'Começar agora',
        },
        {
          name: 'Profissional', price: '897', period: '/mês',
          desc: 'Para empresas que precisam de escala e múltiplos canais.',
          features: ['3 agentes de IA', 'WhatsApp + Instagram + Site', 'Mensagens ilimitadas', 'Transferência para humano', 'Dashboard avançado', 'Suporte prioritário'],
          highlighted: true, cta: 'Falar com especialista',
        },
        {
          name: 'Enterprise', price: null, period: '',
          desc: 'Solução sob medida para grandes operações.',
          features: ['Agentes ilimitados', 'Todos os canais', 'Integração com CRM/ERP', 'SLA garantido', 'Gerente dedicado', 'Treinamento presencial'],
          highlighted: false, cta: 'Solicitar proposta',
        },
      ]}
    />
  )
}
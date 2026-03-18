import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Infraestrutura e Cloud — Kteck',
  description: 'Migração para nuvem, gestão de infraestrutura cloud e computação em nuvem para empresas. AWS, Azure e Google Cloud. Kteck Tecnologia — São Paulo e Brasil.',
  keywords: 'cloud computing, infraestrutura cloud, migração para nuvem, AWS empresas, Azure, Google Cloud, computação em nuvem Brasil, cloud São Paulo',
  openGraph: {
    title: 'Infraestrutura e Cloud — Kteck',
    description: 'Migração e gestão de infraestrutura cloud para empresas. AWS, Azure e Google Cloud.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function PageCloud() {
  return (
    <ServicePageLayout
      tag="Cloud & Infraestrutura"
      title="Escale sem limites"
      titleHighlight="na nuvem."
      description="Migre sua infraestrutura para a nuvem com segurança e economia. Gerenciamos AWS, Azure e Google Cloud para que você foque no seu negócio."
      accent="#7B8FF5"
      accentDim="rgba(123,143,245,0.08)"
      accentBorder="rgba(123,143,245,0.22)"
      services={[
        { icon: '☁️', title: 'Migração para a nuvem',     desc: 'Planejamento e execução completa da migração dos seus sistemas para AWS, Azure ou Google Cloud.' },
        { icon: '⚙️', title: 'Gestão de infraestrutura', desc: 'Monitoramento, otimização e manutenção contínua da sua infraestrutura cloud 24/7.' },
        { icon: '💰', title: 'Otimização de custos',      desc: 'Análise e redução de gastos na nuvem com rightsizing, reservas e eliminação de recursos ociosos.' },
        { icon: '🔄', title: 'Backup e disaster recovery',desc: 'Estratégia completa de backup em nuvem e plano de recuperação de desastres testado e documentado.' },
        { icon: '📈', title: 'Auto scaling',              desc: 'Infraestrutura que cresce automaticamente com a demanda e reduz nos períodos de baixo uso.' },
        { icon: '🔗', title: 'Cloud híbrida',             desc: 'Integração entre ambientes on-premise e cloud, mantendo sistemas legados funcionando junto com a nuvem.' },
      ]}
      cases={[
        { emoji: '🏢', sector: 'Empresa de software', challenge: 'Servidores próprios com alto custo de manutenção e dificuldade de escalar em picos de uso.', result: 'Redução de 45% nos custos de infraestrutura e 0 downtime em eventos de alto tráfego.' },
        { emoji: '🎓', sector: 'EdTech', challenge: 'Plataforma fora do ar durante provas e eventos com muitos acessos simultâneos.', result: 'Infraestrutura auto escalável suportando 10x mais acessos simultâneos sem quedas.' },
        { emoji: '🏦', sector: 'Fintech', challenge: 'Necessidade de ambiente cloud seguro e em conformidade com regulamentações do setor.', result: 'Ambiente cloud certificado, em conformidade com BACEN e LGPD, com auditoria completa.' },
      ]}
      plans={[
        {
          name: 'Cloud Starter', price: '797', period: '/mês',
          desc: 'Para empresas iniciando a jornada na nuvem.',
          features: ['Até 5 servidores gerenciados', 'Monitoramento 24/7', 'Backup automatizado', 'Relatório mensal', 'Suporte técnico'],
          highlighted: false, cta: 'Começar agora',
        },
        {
          name: 'Cloud Business', price: '1.797', period: '/mês',
          desc: 'Para empresas que precisam de alta disponibilidade.',
          features: ['Até 20 servidores', 'Multi-cloud (AWS + Azure)', 'Disaster recovery', 'Otimização de custos', 'SLA 99.9%', 'Suporte 24/7'],
          highlighted: true, cta: 'Falar com especialista',
        },
        {
          name: 'Enterprise', price: null, period: '',
          desc: 'Infraestrutura completa para grandes operações.',
          features: ['Servidores ilimitados', 'Arquitetura dedicada', 'FinOps avançado', 'Compliance e auditoria', 'Engenheiro dedicado', 'SLA contratual'],
          highlighted: false, cta: 'Solicitar proposta',
        },
      ]}
    />
  )
}
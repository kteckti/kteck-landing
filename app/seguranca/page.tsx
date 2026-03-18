import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Segurança da Informação — Kteck',
  description: 'Segurança da informação e cibersegurança para empresas. LGPD compliance, firewall, proteção de dados e monitoramento de ameaças. Kteck — São Paulo e Brasil.',
  keywords: 'segurança da informação, cibersegurança, LGPD compliance, proteção de dados empresarial, firewall empresarial, segurança digital, pentest São Paulo',
  openGraph: {
    title: 'Segurança da Informação — Kteck',
    description: 'Cibersegurança e proteção de dados para empresas. LGPD compliance e monitoramento 24/7.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function PageSeguranca() {
  return (
    <ServicePageLayout
      tag="Segurança da Informação"
      title="Seus dados protegidos,"
      titleHighlight="sua empresa segura."
      description="Implantamos uma estratégia completa de cibersegurança para proteger os dados da sua empresa. LGPD compliance, monitoramento de ameaças e resposta a incidentes."
      accent="#F97316"
      accentDim="rgba(249,115,22,0.08)"
      accentBorder="rgba(249,115,22,0.22)"
      services={[
        { icon: '🔒', title: 'Firewall e proteção de rede', desc: 'Implementação e gestão de firewall corporativo, segmentação de rede e proteção contra intrusões.' },
        { icon: '📋', title: 'LGPD compliance',             desc: 'Adequação completa à Lei Geral de Proteção de Dados — mapeamento, políticas e treinamento de equipe.' },
        { icon: '🔍', title: 'Pentest e análise de vulnerabilidades', desc: 'Testes de invasão controlados para identificar e corrigir brechas antes que hackers as explorem.' },
        { icon: '🚨', title: 'Monitoramento de ameaças 24/7', desc: 'SOC (Security Operations Center) monitorando sua infraestrutura continuamente com resposta imediata.' },
        { icon: '👥', title: 'Treinamento de conscientização', desc: 'Capacitação da equipe para identificar phishing, engenharia social e boas práticas de segurança.' },
        { icon: '🛡️', title: 'Endpoint protection',         desc: 'Proteção avançada para todos os dispositivos da empresa — notebooks, desktops e celulares corporativos.' },
      ]}
      cases={[
        { emoji: '🏥', sector: 'Saúde', challenge: 'Dados de pacientes expostos a risco após tentativa de acesso não autorizado ao sistema.', result: 'Zero incidentes em 18 meses após implantação da estratégia de segurança em camadas.' },
        { emoji: '🏭', sector: 'Indústria', challenge: 'Ransomware paralisou a produção por 3 dias, causando prejuízo de R$200k.', result: 'Após implantação do plano de segurança, recuperação em menos de 4h em novo incidente.' },
        { emoji: '⚖️', sector: 'Advocacia', challenge: 'Escritório precisava adequar processos à LGPD para atender clientes corporativos.', result: 'Certificação LGPD obtida em 60 dias, viabilizando contratos com 3 novos clientes enterprise.' },
      ]}
      plans={[
        {
          name: 'Proteção Essencial', price: '697', period: '/mês',
          desc: 'Segurança básica para pequenas empresas.',
          features: ['Firewall gerenciado', 'Antivírus corporativo', 'Backup seguro', 'Treinamento básico LGPD', 'Relatório mensal'],
          highlighted: false, cta: 'Começar agora',
        },
        {
          name: 'Segurança Total', price: '1.497', period: '/mês',
          desc: 'Proteção avançada para médias empresas.',
          features: ['Monitoramento 24/7', 'LGPD compliance completo', 'Pentest semestral', 'Resposta a incidentes', 'Endpoint protection', 'Treinamento de equipe'],
          highlighted: true, cta: 'Falar com especialista',
        },
        {
          name: 'Enterprise', price: null, period: '',
          desc: 'Segurança total para grandes operações.',
          features: ['SOC dedicado', 'Pentest contínuo', 'Red team / Blue team', 'DPO as a Service', 'Auditoria e compliance', 'SLA contratual'],
          highlighted: false, cta: 'Solicitar proposta',
        },
      ]}
    />
  )
}
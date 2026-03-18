import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Suporte de TI Gerenciado — Kteck',
  description: 'Suporte de TI gerenciado para empresas em São Paulo e todo o Brasil. Helpdesk, manutenção preventiva e gestão de infraestrutura. Kteck Tecnologia.',
  keywords: 'suporte de TI, TI gerenciado, helpdesk empresarial, suporte técnico São Paulo, outsourcing TI, manutenção de computadores empresa',
  openGraph: {
    title: 'Suporte de TI Gerenciado — Kteck',
    description: 'Suporte de TI gerenciado para empresas em SP e todo o Brasil.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function PageSuporteTI() {
  return (
    <ServicePageLayout
      tag="Suporte de TI"
      title="Sua TI funcionando,"
      titleHighlight="sempre."
      description="Suporte técnico especializado para sua empresa, com atendimento presencial em São Paulo e remoto para todo o Brasil. Previna problemas antes que eles aconteçam."
      accent="#2DD4A0"
      accentDim="rgba(45,212,160,0.08)"
      accentBorder="rgba(45,212,160,0.22)"
      services={[
        { icon: '🖥️', title: 'Helpdesk remoto e presencial', desc: 'Suporte para computadores, notebooks, impressoras e periféricos. Atendimento remoto em até 15 minutos.' },
        { icon: '🔧', title: 'Manutenção preventiva',        desc: 'Inspeções periódicas para evitar falhas, limpeza de máquinas, atualização de sistemas e backups.' },
        { icon: '🌐', title: 'Gestão de redes',              desc: 'Configuração e monitoramento de roteadores, switches, Wi-Fi corporativo e VPNs.' },
        { icon: '💾', title: 'Backup e recuperação',         desc: 'Estratégia de backup automatizado com recuperação rápida em caso de falha ou perda de dados.' },
        { icon: '📋', title: 'Gestão de ativos de TI',       desc: 'Controle completo do inventário de hardware e software, licenças e vida útil dos equipamentos.' },
        { icon: '📞', title: 'Suporte 24/7',                 desc: 'Disponibilidade integral para resolver emergências e manter sua operação sem interrupções.' },
      ]}
      cases={[
        { emoji: '🏭', sector: 'Indústria', challenge: 'Sistemas críticos parando frequentemente por falta de manutenção preventiva.', result: 'Redução de 90% nas paradas não planejadas após implantação do plano preventivo.' },
        { emoji: '⚖️', sector: 'Escritório jurídico', challenge: 'Equipe sem suporte técnico interno, perda de tempo com problemas de TI.', result: 'Resolução de 95% dos chamados em menos de 1 hora, zero impacto em prazos processuais.' },
        { emoji: '🏪', sector: 'Varejo', challenge: 'Rede Wi-Fi instável afetando vendas no PDV e experiência do cliente.', result: 'Infraestrutura de rede reestruturada, uptime de 99.9% nos sistemas de vendas.' },
      ]}
      plans={[
        {
          name: 'Essencial', price: '597', period: '/mês',
          desc: 'Para pequenas empresas com até 15 usuários.',
          features: ['Até 15 usuários', 'Suporte remoto ilimitado', 'Tempo de resposta 4h', 'Gestão de antivírus', 'Relatório mensal'],
          highlighted: false, cta: 'Começar agora',
        },
        {
          name: 'Empresarial', price: '1.297', period: '/mês',
          desc: 'Para médias empresas que precisam de agilidade.',
          features: ['Até 50 usuários', 'Suporte remoto + presencial SP', 'Tempo de resposta 1h', 'Manutenção preventiva mensal', 'Backup gerenciado', 'Suporte prioritário 24/7'],
          highlighted: true, cta: 'Falar com especialista',
        },
        {
          name: 'Enterprise', price: null, period: '',
          desc: 'Para grandes empresas e múltiplas unidades.',
          features: ['Usuários ilimitados', 'Presencial em todo o Brasil', 'Tempo de resposta 30min', 'Gerente de TI dedicado', 'SLA contratual', 'Relatórios executivos'],
          highlighted: false, cta: 'Solicitar proposta',
        },
      ]}
    />
  )
}
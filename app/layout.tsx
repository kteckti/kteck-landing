import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const BASE_URL = 'https://www.kteck.com.br'

const KEYWORDS = [
  // IA & automação
  'inteligência artificial para empresas',
  'agentes de IA', 'chatbot com IA',
  'automação com inteligência artificial',
  'plataforma de IA', 'IA para atendimento',
  'chatbot WhatsApp', 'automação de processos',
  'IA para negócios', 'soluções de IA Brasil',
  // Suporte TI
  'suporte de TI', 'suporte técnico empresarial',
  'TI gerenciado', 'helpdesk empresarial',
  'outsourcing de TI', 'suporte de TI São Paulo',
  'empresa de TI', 'serviços de TI para empresas',
  // Cloud
  'infraestrutura de TI', 'cloud computing',
  'computação em nuvem', 'migração para nuvem',
  'AWS para empresas', 'infraestrutura cloud Brasil',
  'serviços cloud', 'cloud híbrida',
  // Segurança
  'segurança da informação', 'cibersegurança',
  'segurança de dados empresarial', 'LGPD compliance',
  'proteção de dados', 'segurança digital',
  // Brand
  'Kteck', 'Kteck IA', 'Kteck tecnologia', 'Kteck São Paulo',
].join(', ')

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:  'Kteck — IA, Suporte de TI, Cloud e Segurança para Empresas',
    template: '%s | Kteck',
  },
  description:
    'A Kteck oferece Inteligência Artificial, Suporte de TI gerenciado, Infraestrutura Cloud e Segurança da Informação para empresas de todos os portes no Brasil. Soluções prontas, sem complicação.',
  keywords: KEYWORDS,
  authors:  [{ name: 'Kteck', url: BASE_URL }],
  creator:  'Kteck Tecnologia',
  publisher: 'Kteck Tecnologia',

  alternates: {
    canonical: BASE_URL,
    languages: { 'pt-BR': BASE_URL },
  },

  robots: {
    index:     true,
    follow:    true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },

  openGraph: {
    type:        'website',
    locale:      'pt_BR',
    url:          BASE_URL,
    siteName:    'Kteck',
    title:       'Kteck — IA, Suporte de TI, Cloud e Segurança para Empresas',
    description: 'Agentes de IA, Suporte de TI, Infraestrutura Cloud e Segurança da Informação. Tudo em uma plataforma para sua empresa crescer com tecnologia.',
    images: [{
      url:    '/og-image.png',
      width:   1200,
      height:  630,
      alt:    'Kteck — IA, TI, Cloud e Segurança para Empresas',
    }],
  },

  twitter: {
    card:        'summary_large_image',
    title:       'Kteck — IA, Suporte de TI, Cloud e Segurança para Empresas',
    description: 'Agentes de IA, Suporte de TI, Cloud e Segurança. Plataforma completa para empresas que querem crescer com tecnologia.',
    images:      ['/og-image.png'],
    creator:     '@kteckti',
  },

  // Após verificar no Google Search Console, descomente e cole o código:
  // verification: { google: 'SEU_CODIGO_AQUI' },
}

// ── Schema.org JSON-LD ────────────────────────────────
const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id':   `${BASE_URL}/#organization`,
      name:    'Kteck',
      url:      BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url:    `${BASE_URL}/logo.png`,
      },
      description:
        'Empresa brasileira especializada em Inteligência Artificial, Suporte de TI, Infraestrutura Cloud e Segurança da Informação para empresas.',
      address: {
        '@type':          'PostalAddress',
        addressLocality:  'São Paulo',
        addressRegion:    'SP',
        addressCountry:   'BR',
      },
      contactPoint: {
        '@type':           'ContactPoint',
        contactType:       'customer support',
        availableLanguage: 'Portuguese',
      },
      sameAs: [
        'https://www.linkedin.com/company/kteck',
        'https://www.instagram.com/kteckti',
      ],
    },
    {
      '@type':    'WebSite',
      '@id':      `${BASE_URL}/#website`,
      url:         BASE_URL,
      name:       'Kteck',
      publisher:  { '@id': `${BASE_URL}/#organization` },
    },
    {
      '@type':       'WebPage',
      '@id':         `${BASE_URL}/#webpage`,
      url:            BASE_URL,
      name:          'Kteck — IA, Suporte de TI, Cloud e Segurança para Empresas',
      isPartOf:      { '@id': `${BASE_URL}/#website` },
      about:         { '@id': `${BASE_URL}/#organization` },
      description:
        'A Kteck oferece Inteligência Artificial, Suporte de TI gerenciado, Infraestrutura Cloud e Segurança da Informação para empresas de todos os portes.',
    },
    {
      '@type': 'ItemList',
      name:    'Serviços Kteck',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Agentes de IA e Chatbots'  },
        { '@type': 'ListItem', position: 2, name: 'Suporte de TI Gerenciado'  },
        { '@type': 'ListItem', position: 3, name: 'Infraestrutura e Cloud'    },
        { '@type': 'ListItem', position: 4, name: 'Segurança da Informação'   },
        { '@type': 'ListItem', position: 5, name: 'Automações e Integrações'  },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
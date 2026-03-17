import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Kteck — A Plataforma de IA para Empresas que Crescem',
  description: 'Automatize atendimento, venda mais e tome decisões com dados. Plataforma de IA pronta para usar, sem precisar programar.',
  keywords: 'inteligência artificial, automação, chatbot, whatsapp, atendimento, IA, agentes, kteck',
  openGraph: {
    title: 'Kteck — A Plataforma de IA para Empresas que Crescem',
    description: 'Automatize atendimento, venda mais e tome decisões com dados.',
    type: 'website',
    locale: 'pt_BR',
  },
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
      </head>
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  )
}
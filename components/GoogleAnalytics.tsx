'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

const GA_ID = 'G-DXTT5T9RB1'

// ── tipos ──────────────────────────────────────────────
type GTagEvent = {
  action: string
  category?: string
  label?: string
  value?: number
}

// ── função global para disparar eventos ───────────────
export function trackEvent({ action, category, label, value }: GTagEvent) {
  if (typeof window === 'undefined') return
  window.gtag?.('event', action, {
    event_category: category,
    event_label:    label,
    value,
  })
}

// ── eventos prontos para importar nos componentes ─────
export const GA = {
  // formulário
  leadFormOpen:   () => trackEvent({ action: 'lead_form_open',   category: 'engagement' }),
  leadFormSubmit: () => trackEvent({ action: 'lead_form_submit',  category: 'conversion', label: 'form_lead' }),

  // CTAs — passa o nome do botão
  ctaClick: (label: string) => trackEvent({ action: 'cta_click', category: 'engagement', label }),

  // scroll
  scrollDepth: (pct: number) => trackEvent({ action: 'scroll_depth', category: 'engagement', value: pct }),
}

// ── componente principal ───────────────────────────────
export default function GoogleAnalytics() {
  const pathname = usePathname()

  // dispara pageview a cada mudança de rota
  useEffect(() => {
    window.gtag?.('config', GA_ID, { page_path: pathname })
  }, [pathname])

  // rastreia scroll 25% / 50% / 75% / 100%
  useEffect(() => {
    const milestones = new Set<number>()
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight
      const total    = document.documentElement.scrollHeight
      const pct      = Math.round((scrolled / total) * 100)
      ;[25, 50, 75, 100].forEach(m => {
        if (pct >= m && !milestones.has(m)) {
          milestones.add(m)
          GA.scrollDepth(m)
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
            send_page_view: true
          });
        `}
      </Script>
    </>
  )
}
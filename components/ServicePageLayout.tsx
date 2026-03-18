'use client'

import Link from 'next/link'
import { useState } from 'react'
import { GA } from '@/components/GoogleAnalytics'
import LeadModal from '@/components/LeadModal'

export interface ServiceItem {
  icon: string
  title: string
  desc: string
}

export interface CaseItem {
  emoji: string
  sector: string
  challenge: string
  result: string
}

export interface PricingPlan {
  name: string
  price: string | null
  period?: string
  desc: string
  features: string[]
  highlighted: boolean
  cta: string
}

export interface ServicePageProps {
  // hero
  tag: string
  title: string
  titleHighlight: string
  description: string
  // serviços incluídos
  services: ServiceItem[]
  // cases
  cases: CaseItem[]
  // planos
  plans: PricingPlan[]
  // cor de acento para esta página
  accent: string
  accentDim: string
  accentBorder: string
}

export default function ServicePageLayout(props: ServicePageProps) {
  const { tag, title, titleHighlight, description, services, cases, plans, accent, accentDim, accentBorder } = props
  const [modalOpen, setModalOpen] = useState(false)

  function openModal(label: string) {
    GA.ctaClick(label)
    setModalOpen(true)
  }

  return (
    <>
      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <style suppressHydrationWarning>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;700;800;900&family=Inter:wght@300;400;500&display=swap');
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        body { font-family:'Inter',sans-serif; background:#071522; color:#F5F5F5; -webkit-font-smoothing:antialiased; }
        h1,h2,h3,h4 { font-family:'Epilogue',sans-serif; }
        ::-webkit-scrollbar { width:5px; }
        ::-webkit-scrollbar-track { background:#071522; }
        ::-webkit-scrollbar-thumb { background:#1E4468; border-radius:3px; }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{
        position:'fixed', top:0, left:0, right:0, zIndex:100,
        height:64, padding:'0 48px',
        display:'flex', alignItems:'center', justifyContent:'space-between',
        background:'rgba(7,21,34,0.85)', backdropFilter:'blur(20px)',
        borderBottom:'1px solid #141F30',
      }}>
        <Link href="/" style={{ fontFamily:'Epilogue,sans-serif', fontWeight:900, fontSize:20, color:'#F5F5F5', textDecoration:'none', letterSpacing:-1 }}>
          K<span style={{ color: accent }}>teck</span>
        </Link>
        <div style={{ display:'flex', gap:28 }}>
          {[
            { href:'/ia',          label:'IA & Chatbots'  },
            { href:'/suporte-ti',  label:'Suporte TI'     },
            { href:'/cloud',       label:'Cloud'          },
            { href:'/seguranca',   label:'Segurança'      },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ color:'#8FAFC8', textDecoration:'none', fontSize:14, fontWeight:500 }}>
              {l.label}
            </Link>
          ))}
        </div>
        <button
          onClick={() => openModal('service_nav_cta')}
          style={{
            background: accent, color:'#071522', border:'none',
            padding:'9px 22px', borderRadius:8,
            fontSize:14, fontWeight:700, cursor:'pointer',
            fontFamily:'Epilogue,sans-serif',
          }}
        >Falar com especialista</button>
      </nav>

      <main style={{ paddingTop:64 }}>

        {/* ── HERO ── */}
        <section style={{
          minHeight:'60vh', display:'flex', flexDirection:'column',
          alignItems:'center', justifyContent:'center',
          textAlign:'center', padding:'80px 24px 60px',
          position:'relative', overflow:'hidden',
        }}>
          {/* grid bg */}
          <div style={{
            position:'absolute', inset:0,
            backgroundImage:`linear-gradient(${accentBorder} 1px,transparent 1px),linear-gradient(90deg,${accentBorder} 1px,transparent 1px)`,
            backgroundSize:'56px 56px',
            maskImage:'radial-gradient(ellipse 70% 70% at 50% 50%,black,transparent)',
            WebkitMaskImage:'radial-gradient(ellipse 70% 70% at 50% 50%,black,transparent)',
          }} />
          {/* halo */}
          <div style={{
            position:'absolute', width:500, height:500, borderRadius:'50%',
            background:`radial-gradient(circle,${accentDim},transparent 68%)`,
            top:'50%', left:'50%', transform:'translate(-50%,-50%)',
            pointerEvents:'none',
          }} />

          <div style={{ position:'relative', zIndex:1, maxWidth:780 }}>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:accentDim, border:`1px solid ${accentBorder}`,
              padding:'6px 18px', borderRadius:100,
              fontSize:12, color:accent, fontWeight:600,
              letterSpacing:2, textTransform:'uppercase', marginBottom:28,
            }}>{tag}</div>

            <h1 style={{ fontSize:'clamp(40px,6vw,72px)', fontWeight:900, letterSpacing:-2, marginBottom:20, lineHeight:1.05 }}>
              {title}<br /><span style={{ color:accent }}>{titleHighlight}</span>
            </h1>
            <p style={{ fontSize:18, color:'#8FAFC8', maxWidth:560, margin:'0 auto 40px', lineHeight:1.7, fontWeight:300 }}>
              {description}
            </p>
            <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
              <button
                onClick={() => openModal('service_hero_cta')}
                style={{
                  background:accent, color:'#071522', border:'none',
                  padding:'15px 36px', borderRadius:12,
                  fontSize:16, fontWeight:700, cursor:'pointer',
                  fontFamily:'Epilogue,sans-serif', transition:'all .2s',
                }}
              >Falar com especialista</button>
              <Link href="/" style={{
                display:'inline-flex', alignItems:'center',
                background:'transparent', color:'#F5F5F5',
                padding:'15px 28px', borderRadius:12,
                fontSize:15, fontWeight:500, textDecoration:'none',
                border:'1px solid #1E4468', transition:'all .2s',
              }}>← Voltar ao site</Link>
            </div>
          </div>
        </section>

        {/* ── O QUE ESTÁ INCLUÍDO ── */}
        <section style={{ padding:'80px 48px', background:'#0A1E30' }}>
          <div style={{ maxWidth:1200, margin:'0 auto' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <span style={{ fontSize:11, fontWeight:600, letterSpacing:2.5, textTransform:'uppercase', color:accent }}>
                O que está incluído
              </span>
              <h2 style={{ fontSize:'clamp(28px,3.5vw,44px)', fontWeight:900, letterSpacing:-1.5, marginTop:12 }}>
                Tudo que você precisa, em um só lugar
              </h2>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:20 }}>
              {services.map((s, i) => (
                <div key={i} style={{
                  background:'#0F2236', border:'1px solid #1E4468',
                  borderRadius:16, padding:'28px 26px',
                  transition:'border-color .2s, transform .2s',
                }}>
                  <div style={{
                    fontSize:28, marginBottom:16,
                    width:52, height:52, borderRadius:12,
                    background:accentDim, border:`1px solid ${accentBorder}`,
                    display:'flex', alignItems:'center', justifyContent:'center',
                  }}>{s.icon}</div>
                  <h3 style={{ fontSize:16, fontWeight:700, marginBottom:8 }}>{s.title}</h3>
                  <p style={{ fontSize:14, color:'#8FAFC8', lineHeight:1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASES ── */}
        <section style={{ padding:'80px 48px' }}>
          <div style={{ maxWidth:1200, margin:'0 auto' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <span style={{ fontSize:11, fontWeight:600, letterSpacing:2.5, textTransform:'uppercase', color:accent }}>
                Cases de uso
              </span>
              <h2 style={{ fontSize:'clamp(28px,3.5vw,44px)', fontWeight:900, letterSpacing:-1.5, marginTop:12 }}>
                Resultados reais para cada setor
              </h2>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:20 }}>
              {cases.map((c, i) => (
                <div key={i} style={{
                  background:'#0A1E30', border:'1px solid #1E4468',
                  borderRadius:16, padding:'28px 26px',
                }}>
                  <div style={{ fontSize:32, marginBottom:14 }}>{c.emoji}</div>
                  <div style={{
                    display:'inline-block', fontSize:11, fontWeight:600,
                    padding:'3px 10px', borderRadius:100,
                    background:accentDim, color:accent,
                    border:`1px solid ${accentBorder}`,
                    marginBottom:14, letterSpacing:1,
                  }}>{c.sector}</div>
                  <div style={{ marginBottom:12 }}>
                    <p style={{ fontSize:12, color:'#4A6880', marginBottom:4, fontWeight:600, textTransform:'uppercase', letterSpacing:1 }}>Desafio</p>
                    <p style={{ fontSize:14, color:'#8FAFC8', lineHeight:1.6 }}>{c.challenge}</p>
                  </div>
                  <div style={{ paddingTop:12, borderTop:'1px solid #1E4468' }}>
                    <p style={{ fontSize:12, color:'#4A6880', marginBottom:4, fontWeight:600, textTransform:'uppercase', letterSpacing:1 }}>Resultado</p>
                    <p style={{ fontSize:14, color:accent, fontWeight:600, lineHeight:1.6 }}>{c.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PLANOS ── */}
        <section style={{ padding:'80px 48px', background:'#0A1E30' }}>
          <div style={{ maxWidth:1100, margin:'0 auto' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <span style={{ fontSize:11, fontWeight:600, letterSpacing:2.5, textTransform:'uppercase', color:accent }}>
                Planos
              </span>
              <h2 style={{ fontSize:'clamp(28px,3.5vw,44px)', fontWeight:900, letterSpacing:-1.5, marginTop:12 }}>
                Escolha o plano ideal
              </h2>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:20 }}>
              {plans.map((pl, i) => (
                <div key={i} style={{
                  background: pl.highlighted ? `linear-gradient(150deg,${accentDim},#0F2236 55%)` : '#0F2236',
                  border: `1px solid ${pl.highlighted ? accent : '#1E4468'}`,
                  borderRadius:20, padding:'34px 30px',
                  position:'relative', overflow:'hidden',
                  transition:'transform .3s',
                }}>
                  {pl.highlighted && (
                    <div style={{
                      position:'absolute', top:0, right:0,
                      background:accent, color:'#071522',
                      fontSize:10, fontWeight:800,
                      padding:'5px 28px',
                      borderBottomLeftRadius:10,
                      fontFamily:'Epilogue,sans-serif', letterSpacing:1,
                    }}>RECOMENDADO</div>
                  )}
                  <p style={{ fontSize:12, fontWeight:600, color:'#8FAFC8', letterSpacing:2, textTransform:'uppercase', marginBottom:18 }}>{pl.name}</p>
                  <div style={{ display:'flex', alignItems:'baseline', gap:4, marginBottom:8 }}>
                    {pl.price ? (
                      <>
                        <span style={{ fontSize:17, fontWeight:600, color:'#8FAFC8' }}>R$</span>
                        <span style={{ fontFamily:'Epilogue,sans-serif', fontSize:48, fontWeight:900, letterSpacing:-2, lineHeight:1 }}>{pl.price}</span>
                        <span style={{ fontSize:14, color:'#8FAFC8' }}>{pl.period}</span>
                      </>
                    ) : (
                      <span style={{ fontFamily:'Epilogue,sans-serif', fontSize:36, fontWeight:900, letterSpacing:-1 }}>Custom</span>
                    )}
                  </div>
                  <p style={{ fontSize:14, color:'#8FAFC8', marginBottom:24, lineHeight:1.6 }}>{pl.desc}</p>
                  <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10, marginBottom:28 }}>
                    {pl.features.map((f, j) => (
                      <li key={j} style={{ fontSize:14, display:'flex', alignItems:'center', gap:10 }}>
                        <span style={{ color:accent, fontWeight:700, fontSize:12, flexShrink:0 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => openModal(`service_pricing_${pl.name.toLowerCase()}`)}
                    style={{
                      width:'100%', padding:13, borderRadius:10,
                      fontSize:15, fontWeight:600, cursor:'pointer',
                      border: pl.highlighted ? 'none' : '1px solid #1E4468',
                      background: pl.highlighted ? accent : 'transparent',
                      color: pl.highlighted ? '#071522' : '#F5F5F5',
                      fontFamily:'Epilogue,sans-serif', transition:'all .2s',
                    }}
                  >{pl.cta}</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section style={{ padding:'100px 24px', textAlign:'center', position:'relative', overflow:'hidden' }}>
          <div style={{
            position:'absolute', width:600, height:300, borderRadius:'50%',
            background:`radial-gradient(circle,${accentDim},transparent 70%)`,
            top:'50%', left:'50%', transform:'translate(-50%,-50%)',
            pointerEvents:'none',
          }} />
          <div style={{ position:'relative', zIndex:1 }}>
            <h2 style={{ fontSize:'clamp(32px,4.5vw,56px)', fontWeight:900, letterSpacing:-2, maxWidth:700, margin:'0 auto 18px' }}>
              Pronto para começar?
            </h2>
            <p style={{ fontSize:17, color:'#8FAFC8', marginBottom:40, fontWeight:300 }}>
              Fale com um especialista Kteck e receba um diagnóstico gratuito.
            </p>
            <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
              <button
                onClick={() => openModal('service_cta_final')}
                style={{
                  background:accent, color:'#071522', border:'none',
                  padding:'16px 40px', borderRadius:12,
                  fontSize:16, fontWeight:700, cursor:'pointer',
                  fontFamily:'Epilogue,sans-serif', transition:'all .2s',
                }}
              >Falar com especialista</button>
              <a
                href={`https://wa.me/5515996641070?text=Ol%C3%A1%20Kteck!%20Desejo%20saber%20mais%20sobre%20os%20servi%C3%A7os`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display:'inline-flex', alignItems:'center', gap:8,
                  background:'#25D366', color:'#fff',
                  padding:'16px 32px', borderRadius:12,
                  fontSize:15, fontWeight:700, textDecoration:'none',
                  fontFamily:'Epilogue,sans-serif',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp direto
              </a>
            </div>
          </div>
        </section>

        {/* ── FOOTER SIMPLES ── */}
        <footer style={{ padding:'28px 48px', borderTop:'1px solid #141F30', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
          <Link href="/" style={{ fontFamily:'Epilogue,sans-serif', fontWeight:900, fontSize:18, color:'#F5F5F5', textDecoration:'none' }}>
            K<span style={{ color:accent }}>teck</span>
          </Link>
          <p style={{ fontSize:13, color:'#4A6880' }}>© 2025 Kteck. Todos os direitos reservados.</p>
          <Link href="/" style={{ fontSize:13, color:'#8FAFC8', textDecoration:'none' }}>← Voltar ao site</Link>
        </footer>

      </main>
    </>
  )
}
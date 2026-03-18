import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre Nós — Kteck',
  description: 'Conheça a Kteck, empresa brasileira de tecnologia fundada por Kayky Marinho. Nossa missão é simplificar a vida das pessoas através da tecnologia.',
  keywords: 'Kteck sobre, empresa de TI São Paulo, Kayky Marinho, tecnologia para empresas, quem somos Kteck',
  openGraph: {
    title: 'Sobre Nós — Kteck',
    description: 'Conheça a história, missão e valores da Kteck.',
    type: 'website',
    locale: 'pt_BR',
  },
}

const valores = [
  {
    icon: '💡',
    title: 'Inovação',
    desc: 'Buscamos constantemente as melhores e mais modernas soluções tecnológicas para entregar o que há de mais avançado aos nossos clientes.',
  },
  {
    icon: '🤝',
    title: 'Comprometimento',
    desc: 'Assumimos cada projeto como se fosse nosso. O sucesso do cliente é o nosso sucesso — do primeiro contato à entrega final.',
  },
  {
    icon: '🔒',
    title: 'Segurança',
    desc: 'Tratamos os dados e a infraestrutura de cada cliente com o mais alto nível de responsabilidade, privacidade e conformidade com a LGPD.',
  },
  {
    icon: '📈',
    title: 'Resultado',
    desc: 'Tecnologia sem resultado é apenas custo. Cada solução que entregamos é orientada a gerar impacto real e mensurável no negócio do cliente.',
  },
]

const diferenciais = [
  { icon: '🇧🇷', title: 'Feito no Brasil',        desc: 'Time brasileiro, atendimento em português, dados hospedados no Brasil e conformidade com a LGPD.' },
  { icon: '⚡', title: 'Resposta rápida',           desc: 'Nada de filas de chamado intermináveis. Atendemos com agilidade porque sabemos que tempo é dinheiro.' },
  { icon: '🔧', title: 'Solução sob medida',        desc: 'Não vendemos pacotes engessados. Entendemos sua operação e montamos a solução certa para o seu tamanho.' },
  { icon: '🤖', title: 'IA no centro de tudo',      desc: 'Integramos inteligência artificial em todas as nossas soluções para entregar mais eficiência com menos custo.' },
  { icon: '📊', title: 'Foco em resultado',         desc: 'Definimos métricas claras antes de qualquer projeto e acompanhamos juntos os resultados ao longo do tempo.' },
  { icon: '🛡️', title: 'Segurança por padrão',     desc: 'Segurança da informação não é um add-on — está embutida em tudo que construímos e gerenciamos.' },
]

export default function Sobre() {
  return (
    <>
      <style suppressHydrationWarning>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;700;800;900&family=Inter:wght@300;400;500&display=swap');
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        body { font-family:'Inter',sans-serif; background:#071522; color:#F5F5F5; -webkit-font-smoothing:antialiased; }
        h1,h2,h3,h4 { font-family:'Epilogue',sans-serif; }
        ::-webkit-scrollbar { width:5px; }
        ::-webkit-scrollbar-track { background:#071522; }
        ::-webkit-scrollbar-thumb { background:#1E4468; border-radius:3px; }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fade { animation: fadeUp .6s ease both; }
        .fade-1 { animation-delay:.1s; }
        .fade-2 { animation-delay:.2s; }
        .fade-3 { animation-delay:.3s; }
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
          K<span style={{ color:'#3DD6F5' }}>teck</span>
        </Link>
        <div style={{ display:'flex', gap:28 }}>
          {[
            { href:'/ia',         label:'IA & Chatbots' },
            { href:'/suporte-ti', label:'Suporte TI'    },
            { href:'/cloud',      label:'Cloud'         },
            { href:'/seguranca',  label:'Segurança'     },
            { href:'/sobre',      label:'Sobre'         },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ color: l.href === '/sobre' ? '#3DD6F5' : '#8FAFC8', textDecoration:'none', fontSize:14, fontWeight:500 }}>
              {l.label}
            </Link>
          ))}
        </div>
        <Link href="/#contato" style={{
          background:'#3DD6F5', color:'#071522', borderRadius:8,
          padding:'9px 22px', fontSize:14, fontWeight:700,
          textDecoration:'none', fontFamily:'Epilogue,sans-serif',
        }}>Falar com especialista</Link>
      </nav>

      <main style={{ paddingTop:64 }}>

        {/* ── HERO ── */}
        <section style={{
          minHeight:'55vh', display:'flex', flexDirection:'column',
          alignItems:'center', justifyContent:'center',
          textAlign:'center', padding:'80px 24px 60px',
          position:'relative', overflow:'hidden',
        }}>
          <div style={{
            position:'absolute', inset:0,
            backgroundImage:'linear-gradient(rgba(61,214,245,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(61,214,245,0.035) 1px,transparent 1px)',
            backgroundSize:'56px 56px',
            maskImage:'radial-gradient(ellipse 70% 70% at 50% 50%,black,transparent)',
            WebkitMaskImage:'radial-gradient(ellipse 70% 70% at 50% 50%,black,transparent)',
          }} />
          <div style={{
            position:'absolute', width:500, height:500, borderRadius:'50%',
            background:'radial-gradient(circle,rgba(61,214,245,0.07),transparent 68%)',
            top:'50%', left:'50%', transform:'translate(-50%,-50%)',
          }} />

          <div style={{ position:'relative', zIndex:1, maxWidth:720 }}>
            <div className="fade" style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'rgba(61,214,245,0.08)', border:'1px solid rgba(61,214,245,0.22)',
              padding:'6px 18px', borderRadius:100,
              fontSize:12, color:'#3DD6F5', fontWeight:600,
              letterSpacing:2, textTransform:'uppercase', marginBottom:28,
            }}>Sobre a Kteck</div>

            <h1 className="fade fade-1" style={{
              fontSize:'clamp(40px,6vw,72px)',
              fontWeight:900, letterSpacing:-2.5, marginBottom:20, lineHeight:1.05,
            }}>
              Tecnologia é para<br />
              <span style={{ color:'#3DD6F5' }}>simplificar a vida.</span>
            </h1>

            <p className="fade fade-2" style={{
              fontSize:18, color:'#8FAFC8',
              maxWidth:560, margin:'0 auto 40px',
              lineHeight:1.72, fontWeight:300,
            }}>
              Nascemos com uma missão clara: tornar a tecnologia acessível, prática
              e transformadora para empresas de todos os tamanhos no Brasil.
            </p>

            <div className="fade fade-3" style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
              <Link href="/#contato" style={{
                background:'#3DD6F5', color:'#071522', borderRadius:12,
                padding:'15px 36px', fontSize:16, fontWeight:700,
                textDecoration:'none', fontFamily:'Epilogue,sans-serif',
              }}>Falar com a Kteck</Link>
              <Link href="/" style={{
                background:'transparent', color:'#F5F5F5', borderRadius:12,
                padding:'15px 28px', fontSize:15, fontWeight:500,
                textDecoration:'none', border:'1px solid #1E4468',
              }}>← Voltar ao site</Link>
            </div>
          </div>
        </section>

        {/* ── HISTÓRIA ── */}
        <section style={{ padding:'80px 48px', background:'#0A1E30' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:72, alignItems:'center' }}>
            <div>
              <span style={{ fontSize:11, fontWeight:600, letterSpacing:2.5, textTransform:'uppercase', color:'#3DD6F5' }}>
                Nossa história
              </span>
              <h2 style={{ fontSize:'clamp(28px,3.5vw,42px)', fontWeight:900, letterSpacing:-1.5, margin:'12px 0 20px' }}>
                De uma ideia a uma plataforma completa
              </h2>
              <p style={{ fontSize:16, color:'#8FAFC8', lineHeight:1.8, marginBottom:20, fontWeight:300 }}>
                A Kteck nasceu da frustração de ver empresas perdendo tempo e dinheiro com tecnologia
                complicada, cara e distante da realidade do dia a dia. Fundada por Kayky Marinho em
                São Paulo, a empresa surgiu com um propósito simples e direto: <strong style={{ color:'#F5F5F5', fontWeight:500 }}>
                fazer a tecnologia trabalhar para as pessoas, não o contrário.</strong>
              </p>
              <p style={{ fontSize:16, color:'#8FAFC8', lineHeight:1.8, fontWeight:300 }}>
                Combinando Inteligência Artificial, Suporte de TI, Cloud e Segurança da Informação
                em um único ecossistema, a Kteck atende empresas de todos os portes no Brasil —
                presencialmente em São Paulo e remotamente em todo o país.
              </p>
            </div>

            {/* card fundador */}
            <div style={{
              background:'#0F2236', border:'1px solid #1E4468',
              borderRadius:20, padding:'36px 32px',
              position:'relative', overflow:'hidden',
            }}>
              <div style={{
                position:'absolute', top:0, left:0, right:0, height:2,
                background:'linear-gradient(90deg,transparent,#3DD6F5,transparent)',
              }} />

              {/* avatar placeholder — substituir por <img> quando tiver a foto */}
              <div>
               
                  <img src="/kayky.jpg" alt="Kayky Marinho" style={{width:80, height:80,borderRadius:'50%',objectFit:'cover'}} />
                
              </div>

              <h3 style={{ fontSize:20, fontWeight:800, letterSpacing:-.5, marginBottom:4 }}>Kayky Marinho</h3>
              <p style={{ fontSize:13, color:'#3DD6F5', fontWeight:600, marginBottom:16 }}>Fundador & CEO — Kteck</p>
              <p style={{ fontSize:14, color:'#8FAFC8', lineHeight:1.7, marginBottom:20, fontWeight:300 }}>
                Apaixonado por tecnologia e empreendedorismo, Kayky fundou a Kteck com a missão de
                democratizar o acesso a soluções de IA e TI para empresas brasileiras, unindo
                inovação com simplicidade.
              </p>

              <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
                {['Inteligência Artificial', 'Cloud', 'Segurança', 'TI Gerenciado'].map((tag, i) => (
                  <span key={i} style={{
                    fontSize:11, fontWeight:600, padding:'4px 10px', borderRadius:100,
                    background:'rgba(61,214,245,0.08)', color:'#3DD6F5',
                    border:'1px solid rgba(61,214,245,0.2)',
                  }}>{tag}</span>
                ))}
              </div>

              {/* link LinkedIn */}
              <a href="https://linkedin.com/in/kaykymarinho" target="_blank" rel="noopener noreferrer"
                style={{
                  display:'inline-flex', alignItems:'center', gap:8,
                  marginTop:20, fontSize:13, color:'#8FAFC8',
                  textDecoration:'none', transition:'color .2s',
                }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                linkedin.com/in/kaykymarinho
              </a>
            </div>
          </div>
        </section>

        {/* ── MISSÃO ── */}
        <section style={{ padding:'80px 48px' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', textAlign:'center' }}>
            <span style={{ fontSize:11, fontWeight:600, letterSpacing:2.5, textTransform:'uppercase', color:'#3DD6F5' }}>
              Nossa missão
            </span>
            <h2 style={{ fontSize:'clamp(28px,4vw,52px)', fontWeight:900, letterSpacing:-1.8, margin:'12px auto 0', maxWidth:700 }}>
              Tecnologia é para<br />simplificar a vida das pessoas.
            </h2>
            <div style={{
              width:60, height:3, background:'#3DD6F5',
              borderRadius:2, margin:'28px auto 32px',
            }} />
            <p style={{
              fontSize:18, color:'#8FAFC8', maxWidth:620, margin:'0 auto',
              lineHeight:1.8, fontWeight:300,
            }}>
              Acreditamos que qualquer empresa, independente do tamanho, merece ter acesso
              às melhores tecnologias do mundo — de forma simples, acessível e com suporte
              humano de verdade.
            </p>
          </div>
        </section>

        {/* ── VALORES ── */}
        <section style={{ padding:'80px 48px', background:'#0A1E30' }}>
          <div style={{ maxWidth:1100, margin:'0 auto' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <span style={{ fontSize:11, fontWeight:600, letterSpacing:2.5, textTransform:'uppercase', color:'#3DD6F5' }}>
                Valores
              </span>
              <h2 style={{ fontSize:'clamp(28px,3.5vw,44px)', fontWeight:900, letterSpacing:-1.5, marginTop:12 }}>
                O que guia tudo que fazemos
              </h2>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:20 }}>
              {valores.map((v, i) => (
                <div key={i} style={{
                  background:'#0F2236', border:'1px solid #1E4468',
                  borderRadius:16, padding:'28px 26px',
                  transition:'border-color .2s, transform .2s',
                }}>
                  <div style={{
                    fontSize:28, marginBottom:16,
                    width:52, height:52, borderRadius:12,
                    background:'rgba(61,214,245,0.08)',
                    border:'1px solid rgba(61,214,245,0.2)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                  }}>{v.icon}</div>
                  <h3 style={{ fontSize:17, fontWeight:700, marginBottom:10 }}>{v.title}</h3>
                  <p style={{ fontSize:14, color:'#8FAFC8', lineHeight:1.7 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── POR QUE KTECK ── */}
        <section style={{ padding:'80px 48px' }}>
          <div style={{ maxWidth:1100, margin:'0 auto' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <span style={{ fontSize:11, fontWeight:600, letterSpacing:2.5, textTransform:'uppercase', color:'#3DD6F5' }}>
                Por que a Kteck
              </span>
              <h2 style={{ fontSize:'clamp(28px,3.5vw,44px)', fontWeight:900, letterSpacing:-1.5, marginTop:12 }}>
                O que nos diferencia
              </h2>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:20 }}>
              {diferenciais.map((d, i) => (
                <div key={i} style={{
                  display:'flex', gap:18,
                  background:'#0A1E30', border:'1px solid #1E4468',
                  borderRadius:16, padding:'24px 22px',
                }}>
                  <div style={{
                    fontSize:22, width:48, height:48, borderRadius:12, flexShrink:0,
                    background:'rgba(61,214,245,0.08)', border:'1px solid rgba(61,214,245,0.2)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                  }}>{d.icon}</div>
                  <div>
                    <h3 style={{ fontSize:15, fontWeight:700, marginBottom:6 }}>{d.title}</h3>
                    <p style={{ fontSize:13, color:'#8FAFC8', lineHeight:1.65 }}>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section style={{
          padding:'100px 24px', textAlign:'center',
          background:'#0A1E30', position:'relative', overflow:'hidden',
        }}>
          <div style={{
            position:'absolute', width:600, height:300, borderRadius:'50%',
            background:'radial-gradient(circle,rgba(61,214,245,0.06),transparent 70%)',
            top:'50%', left:'50%', transform:'translate(-50%,-50%)',
          }} />
          <div style={{ position:'relative', zIndex:1 }}>
            <h2 style={{ fontSize:'clamp(32px,4.5vw,54px)', fontWeight:900, letterSpacing:-2, maxWidth:680, margin:'0 auto 18px' }}>
              Vamos construir algo<br />incrível juntos?
            </h2>
            <p style={{ fontSize:17, color:'#8FAFC8', marginBottom:40, fontWeight:300 }}>
              Fale com a Kteck e descubra como a tecnologia pode transformar sua empresa.
            </p>
            <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
              <Link href="/#contato" style={{
                background:'#3DD6F5', color:'#071522', borderRadius:12,
                padding:'16px 40px', fontSize:16, fontWeight:700,
                textDecoration:'none', fontFamily:'Epilogue,sans-serif',
              }}>Falar com especialista</Link>
              <a href="https://wa.me/5515996641070?text=Ol%C3%A1%20Kteck!%20Desejo%20saber%20mais%20sobre%20os%20servi%C3%A7os"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display:'inline-flex', alignItems:'center', gap:8,
                  background:'#25D366', color:'#fff', borderRadius:12,
                  padding:'16px 32px', fontSize:15, fontWeight:700,
                  textDecoration:'none', fontFamily:'Epilogue,sans-serif',
                }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp direto
              </a>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{
          padding:'28px 48px', borderTop:'1px solid #141F30',
          display:'flex', justifyContent:'space-between',
          alignItems:'center', flexWrap:'wrap', gap:12,
        }}>
          <Link href="/" style={{ fontFamily:'Epilogue,sans-serif', fontWeight:900, fontSize:18, color:'#F5F5F5', textDecoration:'none' }}>
            K<span style={{ color:'#3DD6F5' }}>teck</span>
          </Link>
          <p style={{ fontSize:13, color:'#4A6880' }}>© 2025 Kteck. Todos os direitos reservados.</p>
          <Link href="/" style={{ fontSize:13, color:'#8FAFC8', textDecoration:'none' }}>← Voltar ao site</Link>
        </footer>

      </main>
    </>
  )
}
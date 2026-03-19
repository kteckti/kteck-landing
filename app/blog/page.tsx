import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, getCategories } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog — Kteck',
  description: 'Artigos sobre Inteligência Artificial, TI, Cloud, Segurança da Informação e Automações para empresas brasileiras.',
  keywords: 'blog TI, artigos inteligência artificial, cloud computing blog, segurança da informação artigos, automação empresas',
  openGraph: {
    title: 'Blog Kteck — IA, TI, Cloud e Segurança',
    description: 'Artigos práticos sobre tecnologia para empresas brasileiras.',
    type: 'website',
    locale: 'pt_BR',
  },
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'Inteligência Artificial': { bg: 'rgba(61,214,245,0.08)',  text: '#3DD6F5', border: 'rgba(61,214,245,0.22)'  },
  'Segurança da Informação': { bg: 'rgba(249,115,22,0.08)',  text: '#F97316', border: 'rgba(249,115,22,0.22)'  },
  'Cloud Computing':         { bg: 'rgba(123,143,245,0.08)', text: '#7B8FF5', border: 'rgba(123,143,245,0.22)' },
  'Suporte de TI':           { bg: 'rgba(45,212,160,0.08)',  text: '#2DD4A0', border: 'rgba(45,212,160,0.22)'  },
  'Automações e Produtividade': { bg: 'rgba(250,199,117,0.08)', text: '#FAC775', border: 'rgba(250,199,117,0.22)' },
}

function categoryStyle(cat: string) {
  return categoryColors[cat] || { bg: 'rgba(61,214,245,0.08)', text: '#3DD6F5', border: 'rgba(61,214,245,0.22)' }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}

export default function BlogPage() {
  const posts      = getAllPosts()
  const categories = getCategories()
  const featured   = posts.filter(p => p.featured)
  const rest       = posts.filter(p => !p.featured)

  return (
    <>
      <style suppressHydrationWarning>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;700;800;900&family=Inter:wght@300;400;500&display=swap');
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        body { font-family:'Inter',sans-serif; background:#071522; color:#F5F5F5; -webkit-font-smoothing:antialiased; }
        h1,h2,h3,h4 { font-family:'Epilogue',sans-serif; }
        a { text-decoration:none; color:inherit; }
        ::-webkit-scrollbar { width:5px; }
        ::-webkit-scrollbar-track { background:#071522; }
        ::-webkit-scrollbar-thumb { background:#1E4468; border-radius:3px; }
        .post-card:hover { border-color:rgba(61,214,245,0.3) !important; transform:translateY(-4px); }
        .post-card { transition: border-color .2s, transform .2s; }
        .read-more:hover { color:#3DD6F5 !important; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position:'fixed', top:0, left:0, right:0, zIndex:100,
        height:64, padding:'0 48px',
        display:'flex', alignItems:'center', justifyContent:'space-between',
        background:'rgba(7,21,34,0.85)', backdropFilter:'blur(20px)',
        borderBottom:'1px solid #141F30',
      }}>
        <Link href="/" style={{ fontFamily:'Epilogue,sans-serif', fontWeight:900, fontSize:20, color:'#F5F5F5', letterSpacing:-1 }}>
          K<span style={{ color:'#3DD6F5' }}>teck</span>
        </Link>
        <div style={{ display:'flex', gap:28, alignItems:'center' }}>
          {[
            { href:'/ia',         label:'IA & Chatbots' },
            { href:'/suporte-ti', label:'Suporte TI'    },
            { href:'/cloud',      label:'Cloud'         },
            { href:'/seguranca',  label:'Segurança'     },
            { href:'/blog',       label:'Blog'          },
          ].map(l => (
            <Link key={l.href} href={l.href}
              style={{ color: l.href === '/blog' ? '#3DD6F5' : '#8FAFC8', fontSize:14, fontWeight:500 }}>
              {l.label}
            </Link>
          ))}
        </div>
        <Link href="/#contato" style={{
          background:'#3DD6F5', color:'#071522', borderRadius:8,
          padding:'9px 22px', fontSize:14, fontWeight:700,
          fontFamily:'Epilogue,sans-serif',
        }}>Falar com especialista</Link>
      </nav>

      <main style={{ paddingTop:64 }}>

        {/* HERO */}
        <section style={{ padding:'72px 48px 56px', textAlign:'center', position:'relative', overflow:'hidden' }}>
          <div style={{
            position:'absolute', inset:0,
            backgroundImage:'linear-gradient(rgba(61,214,245,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(61,214,245,0.03) 1px,transparent 1px)',
            backgroundSize:'56px 56px',
            maskImage:'radial-gradient(ellipse 70% 80% at 50% 50%,black,transparent)',
            WebkitMaskImage:'radial-gradient(ellipse 70% 80% at 50% 50%,black,transparent)',
          }} />
          <div style={{ position:'relative', zIndex:1 }}>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'rgba(61,214,245,0.08)', border:'1px solid rgba(61,214,245,0.22)',
              padding:'6px 18px', borderRadius:100,
              fontSize:12, color:'#3DD6F5', fontWeight:600,
              letterSpacing:2, textTransform:'uppercase', marginBottom:24,
            }}>Blog Kteck</div>
            <h1 style={{ fontSize:'clamp(36px,5vw,60px)', fontWeight:900, letterSpacing:-2, marginBottom:16 }}>
              Tecnologia na prática
            </h1>
            <p style={{ fontSize:17, color:'#8FAFC8', maxWidth:500, margin:'0 auto', lineHeight:1.7, fontWeight:300 }}>
              Artigos práticos sobre IA, TI, Cloud e Segurança para empresas brasileiras.
            </p>
          </div>
        </section>

        {/* CATEGORIAS */}
        <div style={{ padding:'0 48px 40px', display:'flex', gap:10, flexWrap:'wrap', justifyContent:'center' }}>
          {categories.map(cat => {
            const s = categoryStyle(cat)
            return (
              <span key={cat} style={{
                fontSize:12, fontWeight:600, padding:'6px 14px', borderRadius:100,
                background:s.bg, color:s.text, border:`1px solid ${s.border}`,
                cursor:'pointer',
              }}>{cat}</span>
            )
          })}
        </div>

        <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 48px 80px' }}>

          {/* POSTS EM DESTAQUE */}
          {featured.length > 0 && (
            <>
              <div style={{ marginBottom:24 }}>
                <span style={{ fontSize:11, fontWeight:600, letterSpacing:2.5, textTransform:'uppercase', color:'#3DD6F5' }}>
                  Em destaque
                </span>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:20, marginBottom:56 }}>
                {featured.map(post => {
                  const s = categoryStyle(post.category)
                  return (
                    <Link key={post.slug} href={`/blog/${post.slug}`}>
                      <div className="post-card" style={{
                        background:'#0F2236', border:'1px solid #1E4468',
                        borderRadius:20, padding:'32px 28px',
                        height:'100%', display:'flex', flexDirection:'column',
                        cursor:'pointer',
                      }}>
                        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:20 }}>
                          <span style={{
                            fontSize:11, fontWeight:600, padding:'4px 12px', borderRadius:100,
                            background:s.bg, color:s.text, border:`1px solid ${s.border}`,
                          }}>{post.category}</span>
                          <span style={{ fontSize:12, color:'#4A6880' }}>{post.readTime} leitura</span>
                        </div>
                        <h2 style={{ fontSize:20, fontWeight:800, letterSpacing:-.5, marginBottom:12, lineHeight:1.3, flex:1 }}>
                          {post.title}
                        </h2>
                        <p style={{ fontSize:14, color:'#8FAFC8', lineHeight:1.7, marginBottom:20 }}>
                          {post.description}
                        </p>
                        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                          <span style={{ fontSize:12, color:'#4A6880' }}>{formatDate(post.date)}</span>
                          <span className="read-more" style={{ fontSize:13, color:'#8FAFC8', fontWeight:500, transition:'color .2s' }}>
                            Ler artigo →
                          </span>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </>
          )}

          {/* TODOS OS POSTS */}
          {rest.length > 0 && (
            <>
              <div style={{ marginBottom:24 }}>
                <span style={{ fontSize:11, fontWeight:600, letterSpacing:2.5, textTransform:'uppercase', color:'#3DD6F5' }}>
                  Todos os artigos
                </span>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
                {rest.map(post => {
                  const s = categoryStyle(post.category)
                  return (
                    <Link key={post.slug} href={`/blog/${post.slug}`}>
                      <div className="post-card" style={{
                        background:'#0A1E30', border:'1px solid #1E4468',
                        borderRadius:16, padding:'24px 28px',
                        display:'flex', alignItems:'center', gap:24,
                        cursor:'pointer',
                      }}>
                        <div style={{ flex:1 }}>
                          <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:10 }}>
                            <span style={{
                              fontSize:11, fontWeight:600, padding:'3px 10px', borderRadius:100,
                              background:s.bg, color:s.text, border:`1px solid ${s.border}`,
                            }}>{post.category}</span>
                            <span style={{ fontSize:12, color:'#4A6880' }}>{formatDate(post.date)}</span>
                            <span style={{ fontSize:12, color:'#4A6880' }}>{post.readTime} leitura</span>
                          </div>
                          <h2 style={{ fontSize:17, fontWeight:700, letterSpacing:-.3, marginBottom:6 }}>{post.title}</h2>
                          <p style={{ fontSize:14, color:'#8FAFC8', lineHeight:1.6 }}>{post.description}</p>
                        </div>
                        <span className="read-more" style={{ fontSize:13, color:'#8FAFC8', fontWeight:500, flexShrink:0, transition:'color .2s' }}>
                          Ler →
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </>
          )}
        </div>

        {/* FOOTER */}
        <footer style={{ padding:'28px 48px', borderTop:'1px solid #141F30', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
          <Link href="/" style={{ fontFamily:'Epilogue,sans-serif', fontWeight:900, fontSize:18, color:'#F5F5F5' }}>
            K<span style={{ color:'#3DD6F5' }}>teck</span>
          </Link>
          <p style={{ fontSize:13, color:'#4A6880' }}>© 2025 Kteck. Todos os direitos reservados.</p>
          <Link href="/" style={{ fontSize:13, color:'#8FAFC8' }}>← Voltar ao site</Link>
        </footer>
      </main>
    </>
  )
}
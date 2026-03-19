import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/blog'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title:       `${post.title} — Kteck`,
    description:  post.description,
    openGraph: {
      title:       post.title,
      description: post.description,
      type:        'article',
      locale:      'pt_BR',
      publishedTime: post.date,
    },
  }
}

const categoryColors: Record<string, { text: string }> = {
  'Inteligência Artificial':    { text: '#3DD6F5' },
  'Segurança da Informação':    { text: '#F97316' },
  'Cloud Computing':            { text: '#7B8FF5' },
  'Suporte de TI':              { text: '#2DD4A0' },
  'Automações e Produtividade': { text: '#FAC775' },
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}

// Renderizador simples de Markdown → HTML
function renderMarkdown(content: string): string {
  return content
    // H2
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    // H3
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    // bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // links
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    // hr
    .replace(/^---$/gm, '<hr />')
    // ul items
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    // wrap consecutive <li> in <ul>
    .replace(/(<li>.*<\/li>\n?)+/g, m => `<ul>${m}</ul>`)
    // paragraphs (linhas que não começam com tag)
    .replace(/^(?!<[a-z]|$)(.+)$/gm, '<p>$1</p>')
    // remove blank lines
    .replace(/\n{3,}/g, '\n\n')
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const catColor = categoryColors[post.category]?.text || '#3DD6F5'
  const html     = renderMarkdown(post.content)
  const allPosts = getAllPosts()
  const related  = allPosts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 2)

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

        /* Estilos do conteúdo do post */
        .post-content h2 {
          font-family:'Epilogue',sans-serif;
          font-size:26px; font-weight:800; letter-spacing:-.8px;
          color:#F5F5F5; margin:40px 0 16px;
        }
        .post-content h3 {
          font-family:'Epilogue',sans-serif;
          font-size:19px; font-weight:700;
          color:#F5F5F5; margin:28px 0 12px;
        }
        .post-content p {
          font-size:17px; color:#C8D8E8; line-height:1.85;
          margin-bottom:20px; font-weight:300;
        }
        .post-content strong { color:#F5F5F5; font-weight:600; }
        .post-content em { color:#A8C0D0; font-style:italic; }
        .post-content ul {
          margin:16px 0 24px 0; padding-left:0;
          list-style:none; display:flex; flex-direction:column; gap:10px;
        }
        .post-content li {
          font-size:16px; color:#C8D8E8; line-height:1.7;
          padding-left:20px; position:relative; font-weight:300;
        }
        .post-content li::before {
          content:'→'; position:absolute; left:0;
          color:${catColor}; font-weight:700;
        }
        .post-content a { color:${catColor}; text-decoration:underline; }
        .post-content a:hover { opacity:.8; }
        .post-content hr {
          border:none; border-top:1px solid #1E4468;
          margin:40px 0;
        }
        .post-content em p {
          font-size:15px; color:#8FAFC8; font-style:normal;
          background:#0A1E30; border-left:3px solid ${catColor};
          padding:16px 20px; border-radius:0 8px 8px 0;
        }
        .related-card:hover { border-color:rgba(61,214,245,0.3) !important; transform:translateY(-3px); }
        .related-card { transition: border-color .2s, transform .2s; }
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
        <div style={{ display:'flex', gap:24, alignItems:'center' }}>
          <Link href="/blog" style={{ color:'#3DD6F5', fontSize:14, fontWeight:500 }}>← Blog</Link>
          <Link href="/#contato" style={{
            background:'#3DD6F5', color:'#071522', borderRadius:8,
            padding:'9px 22px', fontSize:14, fontWeight:700,
            fontFamily:'Epilogue,sans-serif',
          }}>Falar com especialista</Link>
        </div>
      </nav>

      <main style={{ paddingTop:64 }}>
        <article style={{ maxWidth:760, margin:'0 auto', padding:'60px 24px 80px' }}>

          {/* META */}
          <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:24, flexWrap:'wrap' }}>
            <span style={{
              fontSize:12, fontWeight:600, padding:'4px 12px', borderRadius:100,
              background:`${catColor}15`, color:catColor, border:`1px solid ${catColor}30`,
            }}>{post.category}</span>
            <span style={{ fontSize:13, color:'#4A6880' }}>{formatDate(post.date)}</span>
            <span style={{ fontSize:13, color:'#4A6880' }}>·</span>
            <span style={{ fontSize:13, color:'#4A6880' }}>{post.readTime} de leitura</span>
          </div>

          {/* TÍTULO */}
          <h1 style={{
            fontFamily:'Epilogue,sans-serif',
            fontSize:'clamp(30px,5vw,48px)',
            fontWeight:900, letterSpacing:-1.5,
            lineHeight:1.1, marginBottom:20,
          }}>{post.title}</h1>

          <p style={{ fontSize:18, color:'#8FAFC8', lineHeight:1.7, marginBottom:40, fontWeight:300 }}>
            {post.description}
          </p>

          {/* DIVIDER */}
          <div style={{ height:1, background:'#1E4468', marginBottom:40 }} />

          {/* CONTEÚDO */}
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* DIVIDER */}
          <div style={{ height:1, background:'#1E4468', margin:'48px 0' }} />

          {/* CTA */}
          <div style={{
            background:'#0F2236', border:'1px solid #1E4468',
            borderRadius:20, padding:'32px 28px', textAlign:'center',
          }}>
            <h3 style={{ fontSize:22, fontWeight:800, marginBottom:10, letterSpacing:-.5 }}>
              Gostou do conteúdo?
            </h3>
            <p style={{ fontSize:15, color:'#8FAFC8', marginBottom:24, lineHeight:1.6 }}>
              Fale com a Kteck e veja como podemos ajudar sua empresa a crescer com tecnologia.
            </p>
            <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
              <Link href="/#contato" style={{
                background:'#3DD6F5', color:'#071522', borderRadius:10,
                padding:'13px 28px', fontSize:15, fontWeight:700,
                fontFamily:'Epilogue,sans-serif',
              }}>Falar com especialista</Link>
              <a href="https://wa.me/5515996641070?text=Ol%C3%A1%20Kteck!%20Li%20o%20blog%20e%20quero%20saber%20mais"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display:'inline-flex', alignItems:'center', gap:8,
                  background:'#25D366', color:'#fff', borderRadius:10,
                  padding:'13px 22px', fontSize:14, fontWeight:700,
                  fontFamily:'Epilogue,sans-serif',
                }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* POSTS RELACIONADOS */}
          {related.length > 0 && (
            <div style={{ marginTop:56 }}>
              <h3 style={{ fontSize:18, fontWeight:700, marginBottom:20 }}>Artigos relacionados</h3>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:16 }}>
                {related.map(p => (
                  <Link key={p.slug} href={`/blog/${p.slug}`}>
                    <div className="related-card" style={{
                      background:'#0A1E30', border:'1px solid #1E4468',
                      borderRadius:14, padding:'20px',
                      cursor:'pointer',
                    }}>
                      <span style={{ fontSize:12, color:catColor, fontWeight:600 }}>{p.category}</span>
                      <h4 style={{ fontSize:15, fontWeight:700, margin:'8px 0 6px', lineHeight:1.4 }}>{p.title}</h4>
                      <p style={{ fontSize:13, color:'#8FAFC8', lineHeight:1.5 }}>{p.readTime} leitura →</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* FOOTER */}
        <footer style={{ padding:'28px 48px', borderTop:'1px solid #141F30', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
          <Link href="/" style={{ fontFamily:'Epilogue,sans-serif', fontWeight:900, fontSize:18, color:'#F5F5F5' }}>
            K<span style={{ color:'#3DD6F5' }}>teck</span>
          </Link>
          <p style={{ fontSize:13, color:'#4A6880' }}>© 2025 Kteck. Todos os direitos reservados.</p>
          <Link href="/blog" style={{ fontSize:13, color:'#8FAFC8' }}>← Voltar ao blog</Link>
        </footer>
      </main>
    </>
  )
}
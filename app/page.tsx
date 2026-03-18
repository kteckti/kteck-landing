'use client'

import { useEffect, useRef, useState } from 'react'
import LeadModal from '@/components/LeadModal'
import { GA } from '@/components/GoogleAnalytics'

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [scrolled,     setScrolled]     = useState(false)
  const [open,         setOpen]         = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const services = [
    { href: '/ia',         icon: '🤖', label: 'IA & Chatbots',       desc: 'Agentes e automação'     },
    { href: '/suporte-ti', icon: '🖥️', label: 'Suporte de TI',       desc: 'TI gerenciado'           },
    { href: '/cloud',      icon: '☁️', label: 'Cloud',               desc: 'Infraestrutura em nuvem' },
    { href: '/seguranca',  icon: '🔐', label: 'Segurança',           desc: 'Proteção de dados'       },
  ]

  return (
    <>
      <nav className="nav" style={{ borderBottomColor: scrolled ? 'var(--border2)' : 'var(--border)' }}>
        <a href="#" className="nav-logo">K<span>teck</span></a>

        <ul className="nav-links">
          {/* dropdown Serviços */}
          <li style={{ position: 'relative' }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 4 }}
              onClick={e => e.preventDefault()}>
              Serviços <span style={{ fontSize: 10, opacity: .7 }}>▼</span>
            </a>
            {servicesOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: '50%',
                transform: 'translateX(-50%)',
                marginTop: 12, background: 'var(--surface)',
                border: '1px solid var(--border2)', borderRadius: 14,
                padding: '10px', minWidth: 280,
                boxShadow: '0 16px 40px rgba(0,0,0,0.4)',
                zIndex: 200,
              }}>
                {/* ponteiro */}
                <div style={{
                  position: 'absolute', top: -6, left: '50%',
                  transform: 'translateX(-50%)',
                  width: 12, height: 12,
                  background: 'var(--surface)',
                  border: '1px solid var(--border2)',
                  borderRight: 'none', borderBottom: 'none',
                  rotate: '45deg',
                }} />
                {services.map(s => (
                  <a key={s.href} href={s.href} style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '10px 12px', borderRadius: 10,
                    textDecoration: 'none', transition: 'background .15s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface2)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    <span style={{
                      fontSize: 18, width: 36, height: 36, borderRadius: 8,
                      background: 'var(--accent-dim)', border: '1px solid var(--accent-bdr)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>{s.icon}</span>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{s.label}</div>
                      <div style={{ fontSize: 12, color: 'var(--text2)' }}>{s.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </li>
          <li><a href="#academia">Academia</a></li>
          <li><a href="#precos">Preços</a></li>
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>

        <div className="nav-actions">
          <button className="btn-ghost-nav">Entrar</button>
          <button className="btn-cta-nav"
            onClick={() => { GA.ctaClick('navbar_comecar_gratis'); onOpenModal() }}>
            Começar grátis →
          </button>
          <button className="nav-hamburger" onClick={() => setOpen(o => !o)}>
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* drawer mobile */}
      {open && (
        <div className="nav-drawer">
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: 'var(--text3)', textTransform: 'uppercase', marginBottom: 4 }}>
            Serviços
          </div>
          {services.map(s => (
            <a key={s.href} href={s.href} onClick={() => setOpen(false)}
              style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span>{s.icon}</span>{s.label}
            </a>
          ))}
          <div style={{ height: 1, background: 'var(--border)', margin: '4px 0' }} />
          <a href="#academia" onClick={() => setOpen(false)}>Academia</a>
          <a href="#precos"   onClick={() => setOpen(false)}>Preços</a>
          <a href="/sobre"    onClick={() => setOpen(false)}>Sobre</a>
          <a href="#contato"  onClick={() => setOpen(false)}>Contato</a>
          <button className="btn-cta-nav"
            onClick={() => { GA.ctaClick('navbar_mobile_comecar_gratis'); onOpenModal(); setOpen(false) }}
            style={{ width: '100%', padding: 14, marginTop: 4 }}>
            Começar grátis →
          </button>
        </div>
      )}
    </>
  )
}

function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  const stats = [
    { val: '+3.400', lbl: 'Empresas ativas' },
    { val: '98%',    lbl: 'Satisfação'      },
    { val: '12M+',   lbl: 'Mensagens / mês' },
    { val: '<60s',   lbl: 'Tempo de setup'  },
  ]
  return (
    <section className="hero">
      <div className="hero-grid" />
      <div className="hero-halo" />
      <div className="hero-ring" />
      <div className="hero-inner">
        <div className="hero-badge">
          <span className="badge-dot" />
          +3.400 empresas já crescem com IA
        </div>
        <h1 className="hero-h1">
          Sua empresa<br /><span className="hl">cresce com IA.</span>
        </h1>
        <p className="hero-sub">
          Automatize atendimento, venda mais e tome decisões com dados.
          Plataforma completa — sem precisar programar.
        </p>
        <div className="hero-btns">
          <button className="btn-primary"
            onClick={() => { GA.ctaClick('Hero — Testar gratuitamente'); onOpenModal() }}>
            Testar gratuitamente
          </button>
          <button className="btn-outline"
            onClick={() => GA.ctaClick('Hero — Ver demonstração')}>
            Ver demonstração ▶
          </button>
        </div>
        <div className="hero-stats">
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div className="stat-val">{s.val}</div>
              <div className="stat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Logos() {
  const brands = ['NEXUS', 'VERTI', 'PRAGMA', 'BLUECORE', 'SOLVA', 'TECKART', 'ORION']
  return (
    <div className="logos-bar">
      <p className="logos-eyebrow">Empresas que já crescem com Kteck</p>
      <div className="logos-row">
        {brands.map((b, i) => <span key={i} className="logo-brand">{b}</span>)}
      </div>
    </div>
  )
}

function Features() {
  const cards = [
    { icon: '🤖', title: 'Agentes de IA',          desc: 'Crie assistentes treinados com o conhecimento da sua empresa. Atendimento 24h no WhatsApp, Instagram e site.', tag: 'Plug & Play'   },
    { icon: '⚡', title: 'Automações sem código',   desc: 'Conecte seus sistemas visualmente. Integre CRMs, ERPs e qualquer API sem escrever uma linha de código.',       tag: 'No-code'      },
    { icon: '📊', title: 'Analytics em tempo real', desc: 'Dashboard com métricas de atendimento, conversão e satisfação. IA que sugere melhorias automaticamente.',       tag: 'Tempo real'   },
    { icon: '🎓', title: 'Academia Kteck',           desc: 'Cursos práticos com certificação para sua equipe dominar a IA. Do básico ao avançado, no seu ritmo.',          tag: 'Certificação' },
    { icon: '📦', title: 'Marketplace de Apps',     desc: 'Instale soluções prontas de IA por setor em um clique. Jurídico, saúde, varejo, imobiliário e muito mais.',    tag: '+120 apps'    },
    { icon: '🔐', title: 'Segurança Enterprise',    desc: 'LGPD compliant, dados no Brasil, criptografia end-to-end e controle granular de permissões por usuário.',       tag: 'LGPD'         },
  ]
  return (
    <section className="sec" id="funcionalidades">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Funcionalidades</span>
          <h2 className="sec-title">Tudo que sua empresa precisa em uma plataforma</h2>
          <p className="sec-sub">Ecossistema completo para escalar com inteligência artificial.</p>
        </Reveal>
        <div className="feat-grid">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 55}>
              <div className="feat-card">
                <span className="feat-icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <span className="feat-tag">{c.tag}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function PlatformMockup() {
  const sideItems  = [
    { icon: '📊', label: 'Dashboard',    on: true  },
    { icon: '🤖', label: 'Meus Agentes', on: false },
    { icon: '💬', label: 'Conversas',    on: false },
    { icon: '⚡', label: 'Automações',   on: false },
  ]
  const sideItems2 = [
    { icon: '🎓', label: 'Academia',    on: false },
    { icon: '📦', label: 'Marketplace', on: false },
  ]
  return (
    <section className="sec sec-alt">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Interface</span>
          <h2 className="sec-title">Painel intuitivo para gerenciar tudo</h2>
          <p className="sec-sub">Gerencie agentes, veja métricas e monitore conversas em tempo real.</p>
        </Reveal>
        <Reveal delay={100}>
          <div className="mockup">
            <div className="mockup-bar">
              <span className="dr" /><span className="dy" /><span className="dg" />
              <span className="mockup-url">app.kteck.com.br/dashboard</span>
            </div>
            <div className="mockup-body">
              <div className="mock-side">
                <div className="mock-sec-lbl">Menu</div>
                {sideItems.map((it, i) => (
                  <div key={i} className={`mock-item ${it.on ? 'on' : ''}`}>
                    <span>{it.icon}</span>{it.label}
                  </div>
                ))}
                <div className="mock-sec-lbl">Aprender</div>
                {sideItems2.map((it, i) => (
                  <div key={i} className="mock-item"><span>{it.icon}</span>{it.label}</div>
                ))}
              </div>
              <div className="mock-main">
                <div className="mock-topbar">
                  <h4>Visão Geral</h4>
                  <span>Últimos 7 dias ▾</span>
                </div>
                <div className="metrics">
                  <div className="m-card">
                    <div className="m-val">2.841</div>
                    <div className="m-lbl">Atendimentos</div>
                    <div className="m-delta up">↑ +18% vs semana passada</div>
                  </div>
                  <div className="m-card">
                    <div className="m-val" style={{ color: 'var(--green)' }}>94%</div>
                    <div className="m-lbl">Taxa de resolução</div>
                    <div className="m-delta up">↑ +3pp</div>
                  </div>
                  <div className="m-card">
                    <div className="m-val" style={{ color: 'var(--accent)' }}>R$48k</div>
                    <div className="m-lbl">Receita gerada</div>
                    <div className="m-delta up">↑ +24%</div>
                  </div>
                </div>
                <div className="chat-box">
                  <div className="chat-head">
                    <span className="chat-dot" />
                    <span className="chat-name">Agente: Suporte Comercial</span>
                    <span className="chat-live">Ao vivo</span>
                  </div>
                  <div className="msgs">
                    <div className="msg">
                      <div className="av">C</div>
                      <div className="bbl usr">Oi! Quero saber mais sobre os planos para minha empresa</div>
                    </div>
                    <div className="msg">
                      <div className="av" style={{ background: 'var(--accent-dim)' }}>IA</div>
                      <div className="bbl">Olá! Fico feliz em ajudar. Temos 3 planos. Quantos usuários sua empresa tem?</div>
                    </div>
                    <div className="msg">
                      <div className="av">C</div>
                      <div className="bbl usr">Somos 15 pessoas no time</div>
                    </div>
                    <div className="msg">
                      <div className="av" style={{ background: 'var(--accent-dim)' }}>IA</div>
                      <div className="bbl">
                        <div className="typing">
                          <span className="td" /><span className="td" /><span className="td" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function HowItWorks() {
  const items = [
    { n: '01', title: 'Crie sua conta',    desc: 'Cadastro em 30 segundos, sem cartão de crédito. Acesso imediato a todos os recursos.' },
    { n: '02', title: 'Treine seu agente', desc: 'Cole o link do seu site ou faça upload de documentos. A IA aprende em minutos.'       },
    { n: '03', title: 'Conecte os canais', desc: 'WhatsApp, Instagram, site ou API. Um clique para integrar cada canal.'                 },
    { n: '04', title: 'Monitore e escale', desc: 'Veja conversas em tempo real, ajuste e expanda para novos canais e equipes.'           },
  ]
  return (
    <section className="sec" id="como-funciona">
      <div className="wrap" style={{ textAlign: 'center' }}>
        <Reveal>
          <span className="eyebrow">Como funciona</span>
          <h2 className="sec-title" style={{ margin: '0 auto 14px' }}>Pronto em minutos, não meses</h2>
          <p className="sec-sub" style={{ margin: '0 auto' }}>4 passos para transformar seu atendimento com IA.</p>
        </Reveal>
        <div className="steps">
          {items.map((s, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="step">
                <div className="step-n">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Academy({ onOpenModal }: { onOpenModal: () => void }) {
  const courses = [
    { emoji: '🤖', title: 'Agentes de IA', meta: '12 aulas', level: 'Iniciante'     },
    { emoji: '⚡', title: 'Automações',     meta: '18 aulas', level: 'Intermediário' },
    { emoji: '💬', title: 'WhatsApp IA',    meta: '9 aulas',  level: 'Iniciante'     },
    { emoji: '🚀', title: 'Vender com IA',  meta: '15 aulas', level: 'Avançado'      },
  ]
  return (
    <section className="sec sec-alt" id="academia">
      <div className="wrap">
        <div className="academy-grid">
          <Reveal>
            <span className="eyebrow">Academia Kteck</span>
            <h2 className="sec-title">Aprenda a criar e vender soluções de IA</h2>
            <p className="sec-sub" style={{ marginBottom: 28 }}>
              Cursos práticos para você e sua equipe dominarem a IA e aplicarem no negócio desde o primeiro dia.
            </p>
            {['Crie agentes de IA do zero', 'Automatize processos sem código', 'Venda soluções de IA para clientes', 'Certificado reconhecido pelo mercado'].map((t, i) => (
              <div key={i} className="check-item"><span>✓</span><span>{t}</span></div>
            ))}
            <button className="btn-primary" style={{ marginTop: 28 }}
              onClick={() => { GA.ctaClick('Academy — Explorar cursos'); onOpenModal() }}>
              Explorar cursos
            </button>
          </Reveal>
          <Reveal delay={140}>
            <div className="course-grid">
              {courses.map((c, i) => (
                <div key={i} className="course-card">
                  <div className="course-emoji">{c.emoji}</div>
                  <div className="course-title">{c.title}</div>
                  <div className="course-meta">{c.meta}</div>
                  <span className="course-pill">{c.level}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Pricing({ onOpenModal }: { onOpenModal: () => void }) {
  const plans = [
    {
      name: 'Starter', price: '0', period: '/mês',
      desc: 'Para testar e criar seu primeiro agente de IA.',
      feats: ['1 agente de IA', '500 mensagens/mês', 'WhatsApp (modo teste)', 'Suporte por e-mail'],
      off: ['Analytics avançado', 'Marketplace de Apps', 'API access'],
      cta: 'Começar grátis', best: false,
    },
    {
      name: 'Profissional', price: '397', period: '/mês',
      desc: 'Para empresas que querem escalar o atendimento.',
      feats: ['10 agentes de IA', 'Mensagens ilimitadas', 'WhatsApp + Instagram', 'Academia completa', 'Analytics em tempo real', 'Marketplace de Apps'],
      off: ['API dedicada'],
      cta: 'Assinar agora', best: true,
    },
    {
      name: 'Enterprise', price: null, period: '',
      desc: 'Solução sob medida para grandes operações.',
      feats: ['Agentes ilimitados', 'Canais ilimitados', 'SLA 99.9% garantido', 'Suporte dedicado 24/7', 'API dedicada', 'Deploy on-premise', 'Treinamento presencial'],
      off: [],
      cta: 'Falar com vendas', best: false,
    },
  ]
  return (
    <section className="sec" id="precos">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Preços</span>
          <h2 className="sec-title">Planos para cada estágio do negócio</h2>
          <p className="sec-sub">Comece grátis e escale conforme sua empresa cresce.</p>
        </Reveal>
        <div className="pricing-grid">
          {plans.map((pl, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className={`p-card ${pl.best ? 'best' : ''}`}>
                {pl.best && <div className="p-badge">MAIS POPULAR</div>}
                <div className="p-name">{pl.name}</div>
                <div className="p-price">
                  {pl.price !== null ? (
                    <><span className="p-cur">R$</span><span className="p-amt">{pl.price}</span><span className="p-per">{pl.period}</span></>
                  ) : (
                    <span className="p-amt" style={{ fontSize: 38 }}>Custom</span>
                  )}
                </div>
                <p className="p-desc">{pl.desc}</p>
                <ul className="p-feats">
                  {pl.feats.map((f, j) => <li key={j}>{f}</li>)}
                  {pl.off.map((f, j)   => <li key={j} className="off">{f}</li>)}
                </ul>
                <button className={`btn-plan ${pl.best ? 'best' : ''}`}
                  onClick={() => { GA.ctaClick(`pricing_${pl.name.toLowerCase()}`); onOpenModal() }}>
                  {pl.cta}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="cta-sec" id="contato">
      <div className="cta-halo" />
      <Reveal>
        <span className="eyebrow" style={{ display: 'block', marginBottom: 18 }}>Comece hoje</span>
        <h2>Pronto para crescer<br />com inteligência artificial?</h2>
        <p>Junte-se a milhares de empresas que já transformaram seus processos com a Kteck.</p>
        <div className="cta-btns">
          <button className="btn-primary"
            onClick={() => { GA.ctaClick('CTA Final — Criar conta'); onOpenModal() }}>
            Criar conta gratuita
          </button>
          <button className="btn-outline"
            onClick={() => { GA.ctaClick('CTA Final — Agendar demo'); onOpenModal() }}>
            Agendar demo personalizada
          </button>
        </div>
      </Reveal>
    </section>
  )
}

function Footer() {
  const cols = [
    {
      title: 'Serviços',
      links: [
        { label: 'IA & Chatbots',  href: '/ia'         },
        { label: 'Suporte de TI',  href: '/suporte-ti' },
        { label: 'Cloud',          href: '/cloud'       },
        { label: 'Segurança',      href: '/seguranca'   },
      ]
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre nós',  href: '/sobre' },
        { label: 'Blog',       href: '#'      },
        { label: 'Carreiras',  href: '#'      },
        { label: 'Imprensa',   href: '#'      },
      ]
    },
    {
      title: 'Suporte',
      links: [
        { label: 'Documentação',     href: '#' },
        { label: 'Central de ajuda', href: '#' },
        { label: 'Status',           href: '#' },
        { label: 'Contato',          href: '#' },
      ]
    },
  ]
  return (
    <footer>
      <div className="foot-grid">
        <div>
          <div className="foot-logo">K<span>teck</span></div>
          <p className="foot-desc">
            A plataforma das empresas que crescem com Inteligência Artificial.
            Simples, poderosa e feita no Brasil.
          </p>
          <div className="foot-badge">🇧🇷 Dados hospedados no Brasil</div>
        </div>
        {cols.map((c, i) => (
          <div key={i} className="foot-col">
            <h4>{c.title}</h4>
            <ul>
              {c.links.map((l, j) => (
                <li key={j}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="foot-bottom">
        <p>© 2025 Kteck. Todos os direitos reservados.</p>
        <p>Privacidade · Termos · LGPD</p>
      </div>
    </footer>
  )
}

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Navbar    onOpenModal={() => setModalOpen(true)} />
      <Hero      onOpenModal={() => setModalOpen(true)} />
      <Logos />
      <Features />
      <PlatformMockup />
      <HowItWorks />
      <Academy   onOpenModal={() => setModalOpen(true)} />
      <Pricing   onOpenModal={() => setModalOpen(true)} />
      <CTA       onOpenModal={() => setModalOpen(true)} />
      <Footer />
    </>
  )
}
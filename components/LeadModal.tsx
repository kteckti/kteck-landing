'use client'

import { useState, useEffect } from 'react'

interface LeadModalProps {
  isOpen: boolean
  onClose: () => void
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [nome, setNome] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => setVisible(true), 10)
    } else {
      setVisible(false)
      document.body.style.overflow = ''
      setTimeout(() => {
        setNome(''); setEmpresa(''); setTelefone(''); setEmail(''); setStatus('idle')
      }, 300)
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose])

  function formatTelefone(val: string) {
    const d = val.replace(/\D/g, '').slice(0, 11)
    if (d.length <= 2) return d
    if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`
    if (d.length <= 11) return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
    return val
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // necessário para o Apps Script aceitar
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          empresa,
          telefone,
          email,
          canal_origem: 'Landing Page Kteck',
          data_entrada: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
        }),
      })

      // com mode: 'no-cors' a resposta é opaca, assumimos sucesso
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (!isOpen) return null

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(7, 21, 34, 0.88)',
        backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.25s ease',
      }}
    >
      <div style={{
        background: '#0F2236',
        border: '1px solid #1E4468',
        borderRadius: 20,
        padding: '40px 36px',
        width: '100%', maxWidth: 480,
        position: 'relative',
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.97)',
        transition: 'transform 0.3s ease',
        boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
      }}>

        {/* botão fechar */}
        <button onClick={onClose} style={{
          position: 'absolute', top: 16, right: 16,
          background: 'rgba(255,255,255,0.06)', border: 'none',
          color: '#8FAFC8', width: 32, height: 32, borderRadius: '50%',
          cursor: 'pointer', fontSize: 16,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s',
        }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
        >✕</button>

        {status === 'success' ? (
          /* ── SUCESSO ── */
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div style={{
              width: 64, height: 64, borderRadius: '50%',
              background: 'rgba(45,212,160,0.12)',
              border: '1px solid rgba(45,212,160,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 28, margin: '0 auto 20px',
            }}>✓</div>
            <h3 style={{
              fontFamily: 'Epilogue, sans-serif',
              fontSize: 22, fontWeight: 900,
              color: '#F5F5F5', marginBottom: 10, letterSpacing: '-0.5px',
            }}>Recebido!</h3>
            <p style={{ fontSize: 15, color: '#8FAFC8', lineHeight: 1.6, marginBottom: 28 }}>
              Obrigado! Nossa equipe vai entrar em contato em breve.
            </p>
            <button onClick={onClose} style={{
              background: '#3DD6F5', color: '#071522',
              border: 'none', padding: '13px 32px',
              borderRadius: 10, fontSize: 15, fontWeight: 700,
              cursor: 'pointer', fontFamily: 'Epilogue, sans-serif',
            }}>Fechar</button>
          </div>
        ) : (
          /* ── FORMULÁRIO ── */
          <>
            <div style={{ marginBottom: 28 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: 'rgba(61,214,245,0.08)',
                border: '1px solid rgba(61,214,245,0.2)',
                padding: '5px 14px', borderRadius: 100,
                fontSize: 12, color: '#3DD6F5', fontWeight: 500, marginBottom: 14,
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#3DD6F5' }} />
                Acesso gratuito
              </div>
              <h2 style={{
                fontFamily: 'Epilogue, sans-serif',
                fontSize: 24, fontWeight: 900,
                color: '#F5F5F5', marginBottom: 8, letterSpacing: '-0.8px',
              }}>
                Comece a crescer<br />com IA hoje
              </h2>
              <p style={{ fontSize: 14, color: '#8FAFC8', lineHeight: 1.6 }}>
                Preencha abaixo e nossa equipe entra em contato para configurar sua conta.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

              {/* linha 1: nome + empresa */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={lbl}>Nome completo</label>
                  <input
                    type="text" placeholder="Seu nome"
                    value={nome} onChange={e => setNome(e.target.value)}
                    required style={inp}
                    onFocus={e => Object.assign(e.currentTarget.style, focus)}
                    onBlur={e => Object.assign(e.currentTarget.style, blur)}
                  />
                </div>
                <div>
                  <label style={lbl}>Empresa</label>
                  <input
                    type="text" placeholder="Sua empresa"
                    value={empresa} onChange={e => setEmpresa(e.target.value)}
                    required style={inp}
                    onFocus={e => Object.assign(e.currentTarget.style, focus)}
                    onBlur={e => Object.assign(e.currentTarget.style, blur)}
                  />
                </div>
              </div>

              {/* telefone */}
              <div>
                <label style={lbl}>Telefone / WhatsApp</label>
                <input
                  type="tel" placeholder="(11) 99999-9999"
                  value={telefone} onChange={e => setTelefone(formatTelefone(e.target.value))}
                  required style={inp}
                  onFocus={e => Object.assign(e.currentTarget.style, focus)}
                  onBlur={e => Object.assign(e.currentTarget.style, blur)}
                />
              </div>

              {/* email */}
              <div>
                <label style={lbl}>E-mail</label>
                <input
                  type="email" placeholder="voce@empresa.com"
                  value={email} onChange={e => setEmail(e.target.value)}
                  required style={inp}
                  onFocus={e => Object.assign(e.currentTarget.style, focus)}
                  onBlur={e => Object.assign(e.currentTarget.style, blur)}
                />
              </div>

              {/* erro */}
              {status === 'error' && (
                <p style={{
                  fontSize: 13, color: '#F97316',
                  background: 'rgba(249,115,22,0.08)',
                  border: '1px solid rgba(249,115,22,0.2)',
                  borderRadius: 8, padding: '10px 14px',
                }}>
                  Ocorreu um erro. Tente novamente.
                </p>
              )}

              {/* submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  background: status === 'loading' ? 'rgba(61,214,245,0.5)' : '#3DD6F5',
                  color: '#071522', border: 'none',
                  padding: 15, borderRadius: 10,
                  fontSize: 15, fontWeight: 700,
                  cursor: status === 'loading' ? 'wait' : 'pointer',
                  fontFamily: 'Epilogue, sans-serif',
                  marginTop: 4, width: '100%', transition: 'all 0.2s',
                }}
              >
                {status === 'loading' ? 'Enviando...' : 'Quero começar gratuitamente →'}
              </button>

              <p style={{ fontSize: 12, color: '#4A6880', textAlign: 'center' }}>
                🔒 Seus dados estão seguros. Sem spam.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

const lbl: React.CSSProperties = {
  display: 'block', fontSize: 13, fontWeight: 500,
  color: '#8FAFC8', marginBottom: 6,
}
const inp: React.CSSProperties = {
  width: '100%', padding: '11px 14px',
  background: '#071522', border: '1px solid #1E4468',
  borderRadius: 9, fontSize: 14, color: '#F5F5F5',
  outline: 'none', transition: 'border-color 0.2s',
  fontFamily: 'Inter, sans-serif',
}
const focus: React.CSSProperties = { borderColor: '#3DD6F5' }
const blur: React.CSSProperties = { borderColor: '#1E4468' }
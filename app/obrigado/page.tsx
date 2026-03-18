import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Obrigado — Kteck',
  description: 'Recebemos seu contato! Nossa equipe vai entrar em breve.',
  robots: { index: false, follow: false }, // não indexar essa página
}

export default function Obrigado() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700;900&family=Inter:wght@300;400;500&display=swap');

        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          font-family: 'Inter', sans-serif;
          background: #071522;
          color: #F5F5F5;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
          -webkit-font-smoothing: antialiased;
        }

        .card {
          background: #0F2236;
          border: 1px solid #1E4468;
          border-radius: 24px;
          padding: 56px 48px;
          max-width: 560px;
          width: 100%;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #3DD6F5, transparent);
        }

        /* ícone de check */
        .check-wrap {
          width: 80px; height: 80px;
          border-radius: 50%;
          background: rgba(45, 212, 160, 0.10);
          border: 1px solid rgba(45, 212, 160, 0.30);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 28px;
          animation: popIn .5s cubic-bezier(.175,.885,.32,1.275) both;
        }
        .check-wrap svg { width: 36px; height: 36px; }

        @keyframes popIn {
          from { opacity: 0; transform: scale(.6); }
          to   { opacity: 1; transform: scale(1);  }
        }

        /* título */
        h1 {
          font-family: 'Epilogue', sans-serif;
          font-size: 32px; font-weight: 900;
          letter-spacing: -1px;
          margin-bottom: 12px;
          animation: fadeUp .5s .1s ease both;
        }

        .subtitle {
          font-size: 16px; color: #8FAFC8;
          line-height: 1.7; font-weight: 300;
          margin-bottom: 40px;
          animation: fadeUp .5s .15s ease both;
        }

        /* próximos passos */
        .steps {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 40px;
          text-align: left;
          animation: fadeUp .5s .2s ease both;
        }

        .step {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: #071522;
          border: 1px solid #1E4468;
          border-radius: 12px;
          padding: 16px 18px;
        }

        .step-num {
          width: 28px; height: 28px;
          border-radius: 50%;
          background: rgba(61, 214, 245, 0.10);
          border: 1px solid rgba(61, 214, 245, 0.25);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Epilogue', sans-serif;
          font-size: 13px; font-weight: 700;
          color: #3DD6F5;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .step-text strong {
          display: block;
          font-size: 14px; font-weight: 600;
          color: #F5F5F5;
          margin-bottom: 3px;
        }

        .step-text span {
          font-size: 13px;
          color: #8FAFC8;
          line-height: 1.5;
        }

        /* botões */
        .btns {
          display: flex;
          flex-direction: column;
          gap: 12px;
          animation: fadeUp .5s .25s ease both;
        }

        .btn-whatsapp {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #25D366;
          color: #fff;
          padding: 15px;
          border-radius: 12px;
          font-size: 15px; font-weight: 700;
          text-decoration: none;
          font-family: 'Epilogue', sans-serif;
          transition: all .2s;
          border: none; cursor: pointer;
        }
        .btn-whatsapp:hover {
          background: #20bc5a;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.3);
        }

        .btn-voltar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: transparent;
          color: #8FAFC8;
          padding: 14px;
          border-radius: 12px;
          font-size: 14px; font-weight: 500;
          text-decoration: none;
          border: 1px solid #1E4468;
          transition: all .2s;
          font-family: 'Inter', sans-serif;
        }
        .btn-voltar:hover {
          border-color: #8FAFC8;
          color: #F5F5F5;
        }

        /* logo */
        .logo {
          font-family: 'Epilogue', sans-serif;
          font-size: 18px; font-weight: 900;
          color: #F5F5F5;
          text-decoration: none;
          display: inline-block;
          margin-bottom: 36px;
          animation: fadeUp .5s ease both;
        }
        .logo span { color: #3DD6F5; }

        /* glow */
        .glow {
          position: fixed;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(61,214,245,.06), transparent 70%);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 0;
        }

        .content { position: relative; z-index: 1; width: 100%; display: flex; flex-direction: column; align-items: center; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        @media (max-width: 480px) {
          .card { padding: 40px 24px; }
          h1    { font-size: 26px; }
        }
      `}</style>

      <div className="glow" />

      <div className="content">
        <a href="/" className="logo">K<span>teck</span></a>

        <div className="card">
          {/* check animado */}
          <div className="check-wrap">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 18L15 25L28 11"
                stroke="#2DD4A0"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1>Recebemos seu contato!</h1>
          <p className="subtitle">
            Obrigado pelo interesse na Kteck. Nossa equipe já foi notificada
            e vai entrar em contato em breve.
          </p>

          {/* próximos passos */}
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-text">
                <strong>Análise do seu perfil</strong>
                <span>Nossa equipe vai revisar suas informações e entender as necessidades da sua empresa.</span>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-text">
                <strong>Contato em até 24h</strong>
                <span>Um especialista Kteck vai entrar em contato pelo WhatsApp ou e-mail informado.</span>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-text">
                <strong>Diagnóstico gratuito</strong>
                <span>Vamos apresentar as melhores soluções de IA e TI para o seu negócio, sem compromisso.</span>
              </div>
            </div>
          </div>

          {/* botões */}
          <div className="btns">
            <a
              href="https://wa.me/5515996641070?text=Ol%C3%A1%20Kteck!%20Desejo%20saber%20mais%20sobre%20os%20servi%C3%A7os"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar agora no WhatsApp
            </a>

            <Link href="/" className="btn-voltar">
              ← Voltar para o site
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
# Kteck — Landing Page

Next.js 14 · TypeScript · CSS puro · Deploy gratuito no Vercel

---

## Rodando localmente

```bash
npm install
npm run dev
# acesse http://localhost:3000
```

---

## Deploy no Vercel (passo a passo)

### 1. Criar repositório no GitHub

```bash
git init
git add .
git commit -m "feat: kteck landing page"
```

Acesse https://github.com/new, crie um repositório **kteck-landing** (privado ou público) e siga as instruções para fazer push:

```bash
git remote add origin https://github.com/SEU_USUARIO/kteck-landing.git
git branch -M main
git push -u origin main
```

### 2. Conectar no Vercel

1. Acesse https://vercel.com/dashboard
2. Clique em **"Add New… → Project"**
3. Clique em **"Import"** ao lado do repositório `kteck-landing`
4. Mantenha todas as configurações padrão (framework detectado automaticamente como Next.js)
5. Clique em **"Deploy"**

Em ~90 segundos seu site estará no ar em uma URL `*.vercel.app`.

### 3. Domínio personalizado (opcional)

1. No painel do projeto no Vercel → **Settings → Domains**
2. Adicione `kteck.com.br` (ou seu domínio)
3. Copie os registros DNS mostrados e configure no seu registrador (Registro.br, Hostgator, etc.)

---

## Personalizando

### Cores
Edite as variáveis em `app/globals.css`:
```css
:root {
  --navy:   #102A43;   /* fundo principal  */
  --cream:  #F5F5F5;   /* superfícies      */
  --accent: #3DD6F5;   /* destaque / CTA   */
}
```

### Textos e conteúdo
Tudo está em `app/page.tsx` — cada seção é um componente separado e comentado.

### Metadata / SEO
Edite `app/layout.tsx` — título, descrição e Open Graph.

---

## Estrutura

```
kteck/
├── app/
│   ├── layout.tsx     # HTML root, fontes, metadata
│   ├── page.tsx       # Todos os componentes da página
│   └── globals.css    # Design system completo
├── next.config.js     # Static export (gratuito no Vercel)
├── vercel.json        # Região: São Paulo (gru1)
├── tsconfig.json
└── package.json
```

## Custo

| Serviço         | Plano  | Custo       |
|-----------------|--------|-------------|
| Vercel Hosting  | Hobby  | **R$ 0**    |
| Vercel Analytics| Free   | **R$ 0**    |
| Domínio .com.br | Anual  | ~R$ 40/ano  |

**Total: R$ 0/mês**

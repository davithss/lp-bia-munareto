# Site da {{NOME_PRODUTO}}

Este site foi feito por [seu nome / estúdio] e está hospedado automaticamente
na **Vercel**. Toda mudança que você (ou a IA) fizer em `src/data/content.json`
e enviar via `git push` aparece no site em ~30 segundos.

## Como pedir alterações

### Mudança de texto (headline, frase, depoimento, preço…)

1. Abra esta pasta no Cowork.
2. Converse com a IA. Exemplos prontos em `_PROMPTS_EXEMPLO.md`.
3. Em ~1 minuto o site atualiza em https://{{DOMINIO}}.

### Mudança de design ou estrutura

Para qualquer mudança que **não seja só texto** (cor, layout, nova seção,
nova página), entre em contato com [seu WhatsApp/email].

## O que é seguro a IA fazer sozinha

✅ Editar textos em `src/data/content.json`
✅ Adicionar fotos novas em `public/images/`
✅ Trocar números, datas, nomes de produto/método/bônus
✅ Adicionar/remover depoimentos
✅ Alterar preços, parcelamento ou bônus

## O que NÃO pedir pra IA fazer

❌ Mudar cores, fontes, layout
❌ Mexer em arquivos `.astro` ou `.css`
❌ Adicionar páginas novas
❌ Mudar integração com Hotmart/Kiwify

---

## Estrutura do projeto (referência rápida pra IA)

```
.
├── src/
│   ├── data/
│   │   └── content.json     ← TODA a copy. Editar AQUI.
│   ├── pages/
│   │   └── index.astro      ← layout (NÃO editar)
│   ├── layouts/
│   │   └── Layout.astro     ← head/SEO/GTM (NÃO editar)
│   └── styles/
│       └── global.css       ← paleta/tipografia (NÃO editar)
├── public/
│   └── images/              ← fotos
├── astro.config.mjs
├── package.json
└── vercel.json
```

## Comandos (rodam pela IA, você não precisa)

```bash
# Desenvolvimento local (preview antes de subir)
npm install
npm run dev                 # abre em http://localhost:4321

# Build + deploy (a IA faz isto)
git add .
git commit -m "Update copy"
git push
# → Vercel detecta o push e re-deploya em ~30s
```

## Em caso de problema

- O site não atualizou: confira a aba **Deployments** no Vercel — alguma build pode ter quebrado.
- A IA disse "não consegui": chame o designer.
- Tudo travou: rollback é com `git revert HEAD && git push` — a IA sabe fazer.

## Contatos

- Designer: [nome] · [whatsapp]
- Suporte técnico (Vercel/Hotmart): [contato]

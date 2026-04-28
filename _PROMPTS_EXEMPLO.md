# Prompts prontos para conversar com a IA

Cole estes prompts no Cowork (ou na IA da sua escolha) trocando o que estiver
em [colchetes] pelo texto que você quer.

---

## 1. Trocar a headline do site

```
Claude, no arquivo src/data/content.json, troca o campo "hero.headline" por:
"[sua nova headline aqui]"

Depois faz commit com a mensagem "Update hero headline" e dá push.
```

## 2. Atualizar o subtítulo do hero

```
Claude, no content.json, troca "hero.subheadline" por:
"[novo subtítulo, máximo 30 palavras]"

Commit e push.
```

## 3. Adicionar um depoimento novo

```
Claude, adiciona um depoimento novo em "testimonials.items" do content.json:

Nome: [Nome da aluna]
Cidade: [Cidade]
Foto: vou colocar em public/images/dep/[nome-da-aluna].jpg
Texto: "[texto do depoimento, 2 a 4 linhas]"

Depois commita e dá push.
```

## 4. Trocar o preço

```
Claude, atualiza o bloco "offer" do content.json:
- priceOld: [valor antigo, sem R$]
- priceMonthly: [parcelado]
- installments: [número de parcelas]
- priceCash: [à vista]

Commit e push.
```

## 5. Adicionar um item ao FAQ

```
Claude, adiciona uma pergunta nova em "faq.items" do content.json:

Pergunta: "[a pergunta]"
Resposta: "[a resposta, 2 a 4 linhas]"

Commit e push.
```

## 6. Mudar a urgência do hero (data do próximo encontro)

```
Claude, no content.json, atualiza "hero.urgency" para:
"Próximo encontro ao vivo dia [DD] de [mês]"

Commit e push.
```

## 7. Trocar a foto da fundadora

```
Claude, eu coloquei a foto nova em public/images/[nome-do-arquivo].jpg.

Atualiza o caminho em content.json no campo "founder.image" para:
"/images/[nome-do-arquivo].jpg"

Commit e push.
```

## 8. Pausar o site (manutenção)

```
Claude, troca temporariamente o "cta.link" do content.json para:
"https://wa.me/[meu_numero]?text=Quero%20saber%20quando%20abrem%20as%20vagas"

Commit com a mensagem "Pausa: vagas fechadas" e push.
```

## 9. Ver mudanças recentes

```
Claude, lista os últimos 5 commits desse repositório com mensagem e data.
```

## 10. Reverter uma mudança que deu errada

```
Claude, dá um git revert no último commit e push. Quero voltar pra
versão anterior do site.
```

---

## Dicas de uso

- **Sempre** revise o que a IA mostrar antes de dar push final. Pra grande
  parte das mudanças ela já dá push direto, mas se desconfiar, peça
  primeiro: "me mostra o que vai mudar antes de subir".
- Mudanças levam ~30 segundos pra aparecer. Se ainda não apareceu em 2 minutos,
  abre o painel da Vercel pra ver se a build deu erro.
- Se quiser **testar antes de subir**, peça à IA: "roda npm run dev e me
  mostra a página em localhost antes de fazer commit".

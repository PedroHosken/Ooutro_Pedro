# Ooutro Pedro — Site (link da bio + mídia kit)

## O que é

Página única do criador de conteúdo **Ooutro Pedro** (Pedro Hosken, o Mestre 🖖🏾), construída com React + Vite. É o link da bio do Instagram, então fala primeiro com quem segue (propósito e quadros) e depois com marcas (parcerias).

## Propósito

Entreter e agregar valor com o que eu vivo de verdade, da corrida à viagem, do look do dia ao livro que estou lendo.

## Tom

- Opinião leve, na primeira pessoa. Sem tom de coach.
- 🖖🏾 é a assinatura e o único emoji do site.
- Frases curtas, sem adjetivo vago.

## Quadros

| Pilar | Quadro |
|---|---|
| Estilo | Traje do Mestre |
| Futebol | Pelada com o Mestre e Análise sem clubismo |
| Cultura | Curadoria do Mestre (vários itens) e Review (um item) |
| Reflexão | Indagações do Mestre |
| Corrida | Corridinha com o Mestre |
| Rotina | Vlog |
| Stories | Diário de Bordo |

## Seções do site

| Seção | Descrição |
|---|---|
| Hero | Nome, propósito e dois caminhos: quadros (seguidor) e parceria (marca) |
| Como nasce cada conteúdo | Vivência, Veredito e Conversa |
| Os quadros do Mestre | Atalhos para cada quadro |
| Portfólio | Um bloco por quadro, com duas capas reais do Instagram |
| Diário de Bordo | Como funcionam os stories do fim do dia |
| Para marcas | Posicionamento e formatos de parceria |
| Vídeo de apresentação | Embed |
| Números recentes | Instagram, últimos 30 dias |
| Contato | Direct do Instagram, Instagram e TikTok |

## Métricas de referência

Instagram, 30 dias até 12/11/2026: 37.961 visualizações, 8.010 contas alcançadas (57,4% não seguidores), 1.036 interações (444 contas).

Atualizar no array `METRICAS` em `src/App.jsx`. Se ficarem velhas, deixar o array vazio e a seção some.

## Como editar

Tudo fica em `src/App.jsx`: contato (`EMAIL`, `INSTAGRAM`, `TIKTOK`), quadros e portfólio (`QUADROS`), Diário de Bordo (`DIARIO`), parcerias (`PARCERIA`) e métricas (`METRICAS`). As capas ficam em `public/capas`, na proporção 3:4.

## Stack técnica

- **Framework:** React 19
- **Bundler:** Vite 8
- **Estilo:** CSS puro (`App.css` / `index.css`)
- **Deploy:** Build estático via `vite build` (saída em `/dist`)

## Comandos

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # gera build de produção em /dist
npm run preview  # pré-visualiza o build local
```

## Contato oficial

- [Instagram](https://www.instagram.com/ooutropedro_/)
- [TikTok](https://www.tiktok.com/@ooutropedro)
- E-mail: pendente (o domínio `ooutropedro.com` não está registrado, então `contato@ooutropedro.com` não recebe mensagens)

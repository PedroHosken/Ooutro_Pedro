import './App.css'

/*
  ====================================================================
  COMO EDITAR
  --------------------------------------------------------------------
  1. Contato e redes: constantes logo abaixo (EMAIL, INSTAGRAM, TIKTOK).
     Se EMAIL ficar vazio (''), o botao de e-mail nao aparece.
  2. Quadros e portfolio: array QUADROS.
     - link:  link do post (Instagram), sem os parametros depois do "?".
     - thumb: capa em /public/capas (ex: "/capas/traje-suica.jpg").
              Proporcao 3:4, igual a grade do Instagram.
     - titulo: o que esta escrito na capa ou o veredito do video.
  3. Metricas: array METRICAS e a constante METRICAS_PERIODO.
     Se os numeros ficarem velhos, deixe METRICAS vazio ([]) e a
     secao some sozinha.
  4. Unico emoji do site: a assinatura (constante SINAL).
  ====================================================================
*/

const SINAL = '🖖🏾'

const INSTAGRAM = 'https://www.instagram.com/ooutropedro_/'
const INSTAGRAM_DM = 'https://ig.me/m/ooutropedro_'
const TIKTOK = 'https://www.tiktok.com/@ooutropedro'
const EMAIL = ''

const QUADROS = [
  {
    id: 'traje',
    pilar: 'Estilo',
    nome: 'Traje do Mestre',
    pitch:
      'A roupa certa para a ocasião. Digo para onde vou, o que definiu a escolha e, na volta, se funcionou. Sempre com a marca de cada peça.',
    itens: [
      {
        titulo: 'Se arrume com o Mestre',
        link: 'https://www.instagram.com/reel/De0DWfGxWKI/',
        thumb: '/capas/traje-se-arrume.jpg',
      },
      {
        titulo: 'Traje do Mestre: dia 2 na Suíça',
        link: 'https://www.instagram.com/reel/DasZCO4xcJY/',
        thumb: '/capas/traje-suica.jpg',
      },
    ],
  },
  {
    id: 'pelada',
    pilar: 'Futebol',
    nome: 'Pelada com o Mestre',
    pitch:
      'Eu jogando com os amigos e contando como saí de lá. Quando o Galo joga, tem Análise sem clubismo: placar, um ponto do jogo e sentimento de torcedor.',
    itens: [
      {
        titulo: 'Peladinha com os amigos',
        link: 'https://www.instagram.com/reel/Dd47JG6t5ry/',
        thumb: '/capas/pelada-amigos.jpg',
      },
      {
        titulo: 'Análise sem clubismo: Galo 0x1 Cruzeiro',
        link: 'https://www.instagram.com/reel/DfHy4c_RF4_/',
        thumb: '/capas/analise-galo-cruzeiro.jpg',
      },
    ],
  },
  {
    id: 'curadoria',
    pilar: 'Cultura',
    nome: 'Curadoria do Mestre',
    pitch:
      'Eu gasto o tempo para você não precisar gastar. Só entra o que eu consumi de verdade, e sempre tem um "pode pular". Quando é um item só, vira Review: vale ou não vale.',
    itens: [
      {
        titulo: 'Curadoria de conteúdos da semana',
        link: 'https://www.instagram.com/p/DfKD6z1EaiS/',
        thumb: '/capas/curadoria-semana.jpg',
      },
      {
        titulo: 'Review: primeira semana de Birkenstock',
        link: 'https://www.instagram.com/reel/Dby_pc9R0la/',
        thumb: '/capas/review-birkenstock.jpg',
      },
    ],
  },
  {
    id: 'indagacoes',
    pilar: 'Reflexão',
    nome: 'Indagações do Mestre',
    pitch:
      'Reflexões que nascem de uma cena real, nunca de frase solta. Conto o erro, o que percebi e o que serviu para mim. Sem tom de coach.',
    itens: [
      {
        titulo: 'Vida singleplayer x multiplayer',
        link: 'https://www.instagram.com/reel/DfXSQo4xLrD/',
        thumb: '/capas/indagacoes-singleplayer.jpg',
      },
      {
        titulo: 'O jogo da persistência',
        link: 'https://www.instagram.com/reel/DepmtgMzalg/',
        thumb: '/capas/indagacoes-persistencia.jpg',
      },
    ],
  },
  {
    id: 'corridinha',
    pilar: 'Corrida',
    nome: 'Corridinha com o Mestre',
    pitch:
      'O treino é o cenário. O que fica é o que eu percebi correndo: onde quebrei, o que testei, o que levo dali.',
    itens: [
      {
        titulo: '12,5 km de corridinha',
        link: 'https://www.instagram.com/reel/DW-ATVdDU66/',
        thumb: '/capas/corridinha-sat.jpg',
      },
      {
        titulo: 'Trecho do vlog de corridinha',
        link: 'https://www.instagram.com/reel/DfRurFSxXoJ/',
        thumb: '/capas/corridinha-vlog.jpg',
      },
    ],
  },
  {
    id: 'vlog',
    pilar: 'Rotina',
    nome: 'Vlog',
    pitch:
      'Um dia com um fio: uma pergunta ou missão no começo, a resposta no fim. Dia sem fio não vai para o feed, vai para o Diário de Bordo.',
    itens: [
      {
        titulo: 'Casal 20 por BH',
        link: 'https://www.instagram.com/reel/DfQRgwjR7Gr/',
        thumb: '/capas/vlog-casal20.jpg',
      },
      {
        titulo: 'Vlog matinal na faculdade',
        link: 'https://www.instagram.com/reel/DfpL-55xdun/',
        thumb: '/capas/vlog-faculdade.jpg',
      },
    ],
  },
]

const DIARIO = [
  {
    titulo: 'No fim do dia',
    texto: 'Todo dia eu publico o que vivi, nos stories do Instagram.',
  },
  {
    titulo: 'Em fotos e texto',
    texto: 'Sem vídeo. Cada story é um momento, com uma linha contando o que foi.',
  },
  {
    titulo: 'Em ordem cronológica',
    texto: 'Da manhã à noite, para você acompanhar como um diário de verdade.',
  },
  {
    titulo: 'Sem forçar cena',
    texto: 'O livro que peguei, o treino, onde estou. O que não vira quadro vem para cá.',
  },
]

const PARCERIA = [
  {
    titulo: 'Vídeo curto em um quadro',
    texto: 'A marca dentro do Traje, da Corridinha, do Review ou do Vlog.',
  },
  {
    titulo: 'Integração na rotina real',
    texto: 'O produto aparece no dia em que eu já ia usar.',
  },
  {
    titulo: 'Sequência no Diário de Bordo',
    texto: 'Stories em fotos e texto, no ritmo do meu dia.',
  },
]

const METRICAS_PERIODO = 'Instagram · 30 dias até 12 de novembro de 2026'

const METRICAS = [
  {
    label: 'Visualizações',
    valor: '37.961',
    nota: 'Reels: 58,2% | Stories: 41,5%',
  },
  {
    label: 'Contas alcançadas',
    valor: '8.010',
    nota: '57,4% ainda não me seguem',
  },
  {
    label: 'Interações',
    valor: '1.036',
    nota: '444 contas interagiram',
  },
]

function ContentCard({ item }) {
  return (
    <a className="content-card" href={item.link} target="_blank" rel="noreferrer">
      <div className="thumb">
        {item.thumb && <img src={item.thumb} alt="" loading="lazy" />}
        <span className="thumb-play" aria-hidden="true">▶</span>
      </div>
      <span className="content-title">{item.titulo}</span>
    </a>
  )
}

function App() {
  return (
    <main className="page">
      {/* ----------------------------- INTRO / HERO ----------------------------- */}
      <header className="hero" id="topo">
        <div className="hero-content">
          <p className="tag">Pedro Hosken · Belo Horizonte</p>
          <h1>
            Eu sou o <span className="accent">Ooutro Pedro</span>, o Mestre {SINAL}
          </h1>
          <p className="purpose">
            Meu propósito é entreter e agregar valor com o que eu vivo de verdade.
          </p>
          <p className="description">
            Da corrida à viagem, do look do dia ao livro que estou lendo. Eu vivo,
            dou a minha opinião e conto aqui. Sem personagem e sem superprodução.
          </p>
          <div className="actions">
            <a href="#quadros" className="button primary">
              Conhecer os quadros
            </a>
            <a href="#parcerias" className="button ghost">
              Sou marca
            </a>
          </div>
        </div>
        <div className="hero-profile">
          <img src="/perfil-pedro.jpg" alt="Pedro Hosken, o Ooutro Pedro" />
        </div>
      </header>

      {/* ------------------------------- SOBRE --------------------------------- */}
      <section id="sobre" className="card">
        <h2>Como nasce cada conteúdo</h2>
        <p className="section-intro">
          Antes de gravar, eu me faço três perguntas. Se uma ficar sem resposta,
          não é feed.
        </p>
        <ol className="steps">
          <li className="step">
            <span className="step-num">1</span>
            <strong>Vivência</strong>
            <p>O que eu já ia fazer de qualquer jeito? Nada de cena forçada.</p>
          </li>
          <li className="step">
            <span className="step-num">2</span>
            <strong>Veredito</strong>
            <p>Qual é a minha opinião em uma frase? O que eu achei, não o que você deve fazer.</p>
          </li>
          <li className="step">
            <span className="step-num">3</span>
            <strong>Conversa</strong>
            <p>Você concorda, discorda ou indica o seu. A resenha continua nos comentários.</p>
          </li>
        </ol>
      </section>

      {/* ----------------------------- QUADROS --------------------------------- */}
      <section id="quadros" className="card formats-card">
        <h2>Os quadros do Mestre</h2>
        <p className="section-intro">
          Seis quadros no feed e um nos stories. Cada um tem nome, fórmula e
          lugar certo na semana.
        </p>
        <div className="format-chips">
          {QUADROS.map((q) => (
            <a key={q.id} href={`#${q.id}`} className="format-chip">
              {q.nome}
            </a>
          ))}
          <a href="#diario" className="format-chip is-dark">
            Diário de Bordo
          </a>
        </div>
      </section>

      {/* --------------------------- PORTFOLIO --------------------------------- */}
      <section id="portfolio" className="portfolio">
        {QUADROS.map((quadro) => (
          <div key={quadro.id} id={quadro.id} className="card portfolio-block">
            <div className="portfolio-head">
              <p className="pilar">{quadro.pilar}</p>
              <h2>{quadro.nome}</h2>
              <p className="section-intro">{quadro.pitch}</p>
            </div>
            <div className="content-grid">
              {quadro.itens.map((item) => (
                <ContentCard key={item.link} item={item} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* -------------------------- DIARIO DE BORDO ---------------------------- */}
      <section id="diario" className="diario">
        <div className="diario-head">
          <p className="tag">Stories · todo dia</p>
          <h2>Diário de Bordo {SINAL}</h2>
          <p className="diario-lead">
            O feed é onde fica o conteúdo. O Diário é onde fica a vida: o meu
            dia do jeito que ele aconteceu, para você acompanhar a jornada.
          </p>
        </div>
        <ol className="diario-steps">
          {DIARIO.map((passo, i) => (
            <li key={passo.titulo} className="diario-step">
              <span className="step-num">{i + 1}</span>
              <strong>{passo.titulo}</strong>
              <p>{passo.texto}</p>
            </li>
          ))}
        </ol>
        <div className="diario-foot">
          <p>O que aparece no Diário hoje pode virar quadro no feed depois.</p>
          <a className="button primary" href={INSTAGRAM} target="_blank" rel="noreferrer">
            Acompanhar o Diário
          </a>
        </div>
      </section>

      {/* ------------------------------ PARCERIAS ------------------------------ */}
      <section id="parcerias" className="card">
        <p className="pilar">Para marcas</p>
        <h2>Sua marca dentro de uma vivência real</h2>
        <p className="section-intro">
          O que eu ofereço não é alcance bruto, é confiança: gente que acompanha
          o meu dia e leva a minha opinião a sério. A marca entra onde ela já
          faria sentido, como o tênis da corridinha ou a peça do Traje do Mestre,
          e eu recomendo do jeito que faço na Curadoria: com veredito e ressalva.
          Nada de anúncio cortado no meio do vídeo.
        </p>
        <ul className="brand-list">
          {PARCERIA.map((formato) => (
            <li key={formato.titulo} className="brand-item">
              <strong>{formato.titulo}</strong>
              <p>{formato.texto}</p>
            </li>
          ))}
        </ul>
        <div className="actions">
          <a href="#contato" className="button primary">
            Falar sobre parceria
          </a>
        </div>
      </section>

      {/* ------------------------- VIDEO DE APRESENTACAO ----------------------- */}
      <section className="card">
        <h2>Vídeo de apresentação</h2>
        <p className="section-intro">
          Um resumo rápido de quem eu sou e do tipo de conteúdo que eu faço.
        </p>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/N9YK2MHJaxQ"
            title="Vídeo de apresentação do Ooutro Pedro"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* ------------------------------ METRICAS ------------------------------- */}
      {METRICAS.length > 0 && (
        <section className="card">
          <div className="metrics-head">
            <h2>Números recentes</h2>
            <p>{METRICAS_PERIODO}</p>
          </div>
          <div className="metrics">
            {METRICAS.map((m) => (
              <article key={m.label} className="metric-card">
                <p className="metric-label">{m.label}</p>
                <strong className="metric-value">{m.valor}</strong>
                <span className="metric-note">{m.nota}</span>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* ----------------------------- CTA FINAL ------------------------------- */}
      <section id="contato" className="cta-final">
        <div className="cta-content">
          <p className="tag">Bora conversar</p>
          <h2>Me chama {SINAL}</h2>
          <p className="cta-text">
            Se você acompanha, vem trocar ideia. Se você é marca, me conta o que
            tem em mente e a gente monta a parceria em cima de um quadro.
          </p>
          <div className="cta-buttons">
            <a
              className="button primary big"
              href={INSTAGRAM_DM}
              target="_blank"
              rel="noreferrer"
            >
              Chamar no Instagram
            </a>
            {EMAIL && (
              <a className="button outline big" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            )}
          </div>
          <div className="links">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={TIKTOK} target="_blank" rel="noreferrer">
              TikTok
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">Ooutro Pedro {SINAL} Belo Horizonte</footer>
    </main>
  )
}

export default App

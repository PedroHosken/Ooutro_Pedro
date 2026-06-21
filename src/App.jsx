import './App.css'

/*
  ====================================================================
  COMO EDITAR / PREENCHER COM CONTEUDO REAL
  --------------------------------------------------------------------
  1. Fotos: jogue os arquivos na pasta /public e referencie como
     "/nome-do-arquivo.png" (igual ao /perfil-estetica.png ja usado).
  2. Conteudos de exemplo: edite o array PORTFOLIO abaixo.
     - link:  cole o link do post/video (Instagram, TikTok, YouTube...)
     - thumb: nome da imagem de capa em /public (ex: "/review1.png").
              Se deixar vazio (""), aparece uma capa-placeholder bonita.
     - titulo: titulo curto do conteudo.
  3. Pode adicionar ou remover slots a vontade dentro de "itens".
  ====================================================================
*/

const PORTFOLIO = [
  {
    id: 'reviews',
    emoji: '🔍',
    nome: 'Reviews',
    pitch:
      'Testo, uso e conto o que realmente vale a pena. Opinião sincera, do jeito que eu falaria com um amigo.',
    itens: [
      {
        titulo: 'Review completo',
        link: 'https://www.instagram.com/p/DZud3hVkT2_/?igsh=aW51OXk4bWZrMXc5',
        thumb: '',
      },
      {
        titulo: 'Review honesto',
        link: 'https://www.instagram.com/p/DYX9iR_EUoD/?igsh=MTE2dWV3ODBqaHYwdQ==',
        thumb: '',
      },
    ],
  },
  {
    id: 'vlogs',
    emoji: '🎥',
    nome: 'Vlogs',
    pitch:
      'A minha rotina virando história. A marca aparece dentro do contexto, nunca como um anúncio frio.',
    itens: [
      {
        titulo: 'Vlog de rotina',
        link: 'https://www.instagram.com/reel/DYxx_b8xbcB/?igsh=Mzh6cmM3dHM0NWgw',
        thumb: '',
      },
      {
        titulo: 'Um dia comigo',
        link: 'https://www.instagram.com/reel/DY0gD8rtWcu/?igsh=czByb2drMmlxbXFt',
        thumb: '',
      },
    ],
  },
  {
    id: 'moda',
    emoji: '🧥',
    nome: 'Moda e GRWM',
    pitch:
      'Get ready with me e looks do dia com estilo próprio e nada de pose. Naturalidade em primeiro lugar.',
    itens: [
      {
        titulo: 'Look do dia',
        link: 'https://www.instagram.com/p/DZI57sKEe5s/?igsh=bnpyczBpOWN0d2Rq',
        thumb: '',
      },
      {
        titulo: 'GRWM em reel',
        link: 'https://www.instagram.com/reel/DW408VwjYRx/?igsh=MWpwMGhmZTlzYTI5dw==',
        thumb: '',
      },
    ],
  },
  {
    id: 'curadoria',
    emoji: '📚',
    nome: 'Curadoria',
    pitch:
      'As indicações de cultura, leitura e descobertas que a minha audiência já espera de mim.',
    itens: [
      {
        titulo: 'Indicações da semana',
        link: 'https://www.instagram.com/p/DXu5RoiDSdz/?igsh=MnN6dzdxZmd3dXM1',
        thumb: '',
      },
      {
        titulo: 'Curadoria de cultura',
        link: 'https://www.instagram.com/p/DXNLNz7kXF3/?igsh=MTJsN2ozajZ0MXo1ag==',
        thumb: '',
      },
    ],
  },
  {
    id: 'corrida',
    emoji: '🏃',
    nome: 'Corrida',
    pitch:
      'Treinos, provas e a vida de corredor. Conteúdo que combina com marcas de esporte, performance e bem-estar.',
    itens: [
      {
        titulo: 'Treino de corrida',
        link: 'https://www.instagram.com/reel/DYNsXOMPWhu/?igsh=dmJsNng4amxyODBk',
        thumb: '',
      },
      {
        titulo: 'Rotina de corredor',
        link: 'https://www.instagram.com/reel/DW-ATVdDU66/?igsh=MTZnbzBveGp2Nnhuag==',
        thumb: '',
      },
    ],
  },
  {
    id: 'futebol',
    emoji: '⚽',
    nome: 'Futebol',
    pitch:
      'Da pelada ao estádio. A paixão pelo futebol vira conteúdo que conversa com quem também é apaixonado pelo esporte.',
    itens: [
      {
        titulo: 'Resenha de futebol',
        link: 'https://www.instagram.com/reel/DZAWxPDx8rK/?igsh=bnNlNmg3dTk1Nm5s',
        thumb: '',
      },
      {
        titulo: 'Dia de jogo',
        link: 'https://www.instagram.com/reel/DYaoUFYRH0D/?igsh=MWJ5dnV4aDcxNWg5NQ==',
        thumb: '',
      },
    ],
  },
]

function ContentCard({ item, emoji }) {
  const hasLink = Boolean(item.link)
  const inner = (
    <>
      <div className="thumb">
        {item.thumb ? (
          <img src={item.thumb} alt={item.titulo} loading="lazy" />
        ) : (
          <span className="thumb-placeholder">{emoji}</span>
        )}
        <span className="thumb-play" aria-hidden="true">▶</span>
      </div>
      <span className="content-title">{item.titulo}</span>
    </>
  )

  if (hasLink) {
    return (
      <a className="content-card" href={item.link} target="_blank" rel="noreferrer">
        {inner}
      </a>
    )
  }
  return <div className="content-card is-empty">{inner}</div>
}

function App() {
  return (
    <main className="page">
      {/* ----------------------------- INTRO / HERO ----------------------------- */}
      <header className="hero" id="topo">
        <div className="hero-content">
          <p className="tag">Criador de conteúdo</p>
          <h1>
            Oi, eu sou o <span className="accent">Pedro Hosken</span>.
          </h1>
          <p className="description">
            Faço conteúdo de verdade, do jeito que eu vivo o meu dia a dia. Gosto
            de aproximar as marcas das pessoas com leveza, bom humor e aquela
            conversa que prende até o final. Nada de personagem, nada de
            superprodução.
          </p>
          <div className="actions">
            <a href="#contato" className="button primary">
              Quero fechar parceria
            </a>
            <a href="#portfolio" className="button ghost">
              Ver meus conteúdos
            </a>
          </div>
        </div>
        <div className="hero-profile">
          <img src="/perfil-pedro.jpg" alt="Foto do Pedro Hosken" />
        </div>
      </header>

      {/* ------------------------------- SOBRE --------------------------------- */}
      <section id="sobre" className="card">
        <h2>Um pouco sobre mim</h2>
        <p>
          Sou prático e gosto de mostrar a vida como ela é: treino, casa, os
          perrengues e as coisas boas que eu curto. É esse clima próximo que faz
          a galera confiar no que eu indico. Quando uma marca chega junto, ela
          entra na minha rotina de um jeito natural, sem forçar a barra.
        </p>
      </section>

      {/* ----------------------------- FORMATOS -------------------------------- */}
      <section className="card formats-card">
        <h2>Formatos que eu crio</h2>
        <p className="section-intro">
          Me viro bem em quatro frentes, cada uma pensada para um objetivo
          diferente da sua marca.
        </p>
        <div className="format-chips">
          {PORTFOLIO.map((f) => (
            <a key={f.id} href={`#${f.id}`} className="format-chip">
              <span className="chip-emoji">{f.emoji}</span>
              {f.nome}
            </a>
          ))}
        </div>
      </section>

      {/* --------------------------- PORTFOLIO --------------------------------- */}
      <section id="portfolio" className="portfolio">
        {PORTFOLIO.map((formato) => (
          <div key={formato.id} id={formato.id} className="card portfolio-block">
            <div className="portfolio-head">
              <h2>
                <span className="portfolio-emoji">{formato.emoji}</span>
                {formato.nome}
              </h2>
              <p className="section-intro">{formato.pitch}</p>
            </div>
            <div className="content-grid">
              {formato.itens.map((item, i) => (
                <ContentCard key={i} item={item} emoji={formato.emoji} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ------------------------- VIDEO DE APRESENTACAO ----------------------- */}
      <section className="card">
        <h2>Vídeo de apresentação</h2>
        <p className="section-intro">
          Um resumo rápido de quem eu sou e do tipo de conteúdo que eu curto
          fazer.
        </p>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/N9YK2MHJaxQ?si=rR8sbpcoawN1zIAN"
            title="Vídeo de apresentação do Pedro Hosken"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* ------------------------------ METRICAS ------------------------------- */}
      <section className="card">
        <div className="metrics-head">
          <h2>Resultados recentes</h2>
          <p>Período analisado: março de 2026 (do dia 1 ao 31)</p>
        </div>
        <div className="metrics">
          <article className="metric-card">
            <p className="metric-label">YouTube · visualizações</p>
            <strong className="metric-value">3,5 mil</strong>
            <span className="metric-note">Tempo de exibição: 9,3h | Inscritos: +6</span>
          </article>
          <article className="metric-card">
            <p className="metric-label">Instagram · visualizações</p>
            <strong className="metric-value">7.523</strong>
            <span className="metric-note">
              Contas alcançadas: 2.723 | Não seguidores: 72,4%
            </span>
          </article>
          <article className="metric-card">
            <p className="metric-label">TikTok · visualizações</p>
            <strong className="metric-value">8.426</strong>
            <span className="metric-note">
              Curtidas: 285 | Comentários: 42 | Compartilhamentos: 9
            </span>
          </article>
        </div>
      </section>

      {/* ----------------------------- CTA FINAL ------------------------------- */}
      <section id="contato" className="cta-final">
        <div className="cta-content">
          <p className="tag">Bora trabalhar juntos</p>
          <h2>Sua marca na minha história</h2>
          <p className="cta-text">
            Conteúdo autêntico, narrativa natural e formatos que encaixam no seu
            objetivo: reviews, vlogs, moda, GRWM e curadoria. Me manda uma
            mensagem que a gente monta a parceria ideal juntos.
          </p>
          <a className="button primary big" href="mailto:contato@ooutropedro.com">
            contato@ooutropedro.com
          </a>
          <div className="links">
            <a
              href="https://www.instagram.com/ooutropedro_?igsh=aTY0cGlzejVpNjNt&utm_source=qr"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@ooutropedro?_r=1&_t=ZS-95v566OnsbE"
              target="_blank"
              rel="noreferrer"
            >
              TikTok
            </a>
            <a
              href="https://youtube.com/@ooutropedro?si=lovxxJ8nO6A5SLiK"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>
            <a href="https://linktr.ee/ooutropedro" target="_blank" rel="noreferrer">
              Linktree
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App

import './App.css'

function App() {
  return (
    <main className="page">
      <header className="hero">
        <div className="hero-content">
          <p className="tag">Expedicao Ooutro Pedro</p>
          <h1>Aventura, historias e conteudo que puxa a galera pra bordo.</h1>
          <p className="description">
            Aqui e onde publico, comunidade e marcas encontram minha rota:
            conteudo divertido, energia alta e projetos com cara de jornada.
          </p>
          <div className="actions">
            <a href="#midia-kit" className="button primary">
              Abrir mapa de parcerias
            </a>
            <a href="#contato" className="button ghost">
              Chamar pra aventura
            </a>
          </div>
        </div>
        <div className="hero-profile">
          <img
            src="/perfil-estetica.png"
            alt="Retrato classico usado como foto de perfil"
          />
        </div>
      </header>

      <section id="sobre" className="card">
        <h2>Quem e Ooutro Pedro</h2>
        <p>
          Criador de conteudo com vibe exploradora: humor, curiosidades e
          historias que fazem a audiencia sentir que esta vivendo a jornada junto.
        </p>
      </section>

      <section className="metrics">
        <article className="metric-card">
          <p className="metric-label">YouTube</p>
          <strong className="metric-value">Atualizar</strong>
          <span className="metric-note">Inscritos</span>
        </article>
        <article className="metric-card">
          <p className="metric-label">Instagram</p>
          <strong className="metric-value">Atualizar</strong>
          <span className="metric-note">Seguidores</span>
        </article>
        <article className="metric-card">
          <p className="metric-label">TikTok</p>
          <strong className="metric-value">Atualizar</strong>
          <span className="metric-note">Seguidores</span>
        </article>
        <article className="metric-card">
          <p className="metric-label">Media mensal</p>
          <strong className="metric-value">Atualizar</strong>
          <span className="metric-note">Visualizacoes</span>
        </article>
      </section>

      <section id="projetos" className="card">
        <h2>Diario de bordo</h2>
        <ul className="project-list">
          <li>Videos e playlists com narrativa de aventura.</li>
          <li>Quadros criativos para conectar publico e tendencia.</li>
          <li>Projetos especiais com formato multiplataforma.</li>
        </ul>
      </section>

      <section id="midia-kit" className="card">
        <h2>Mapa de parceria para marcas</h2>
        <ul className="project-list">
          <li>Posicionamento: conteudo aventureiro, leve e compartilhavel.</li>
          <li>Publico: comunidade ativa, curiosa e participativa.</li>
          <li>Formatos: video curto, roteiro integrado e sequencia de stories.</li>
          <li>Entregaveis: briefing, criacao, publicacao e relatorio final.</li>
        </ul>
      </section>

      <section id="contato" className="card">
        <h2>Links oficiais e contato</h2>
        <div className="links">
          <a href="https://linktr.ee/ooutropedro" target="_blank" rel="noreferrer">
            Linktree oficial
          </a>
          <a
            href="https://youtube.com/@ooutropedro?si=lovxxJ8nO6A5SLiK"
            target="_blank"
            rel="noreferrer"
          >
            Canal no YouTube
          </a>
          <a href="mailto:contato@ooutropedro.com">contato@ooutropedro.com</a>
        </div>
      </section>
    </main>
  )
}

export default App

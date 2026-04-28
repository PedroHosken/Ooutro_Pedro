import './App.css'

function App() {
  return (
    <main className="page">
      <header className="hero">
        <div className="hero-content">
          <p className="tag">Midia Kit + Repositorio Oficial</p>
          <h1>Ooutro Pedro: criador de conteudo, projetos e parcerias de marca.</h1>
          <p className="description">
            Este e o primeiro layout da sua pagina oficial para apresentar seu
            trabalho ao publico e a marcas interessadas em colaboracoes.
          </p>
          <div className="actions">
            <a href="#midia-kit" className="button primary">
              Ver midia kit
            </a>
            <a href="#contato" className="button ghost">
              Falar sobre parceria
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
          Criador focado em conteudo digital com linguagem proxima da comunidade,
          curadoria autoral e narrativa leve para engajar audiencia.
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
        <h2>Repositorio de conteudos</h2>
        <ul className="project-list">
          <li>Videos em destaque e playlists autorais.</li>
          <li>Campanhas e publis anteriores para prova social.</li>
          <li>Projetos especiais com formatos multiplataforma.</li>
        </ul>
      </section>

      <section id="midia-kit" className="card">
        <h2>Midia kit para marcas</h2>
        <ul className="project-list">
          <li>Posicionamento: conteudo de curadoria, lifestyle e entretenimento.</li>
          <li>Publico: comunidade digital ativa e em crescimento.</li>
          <li>Formatos: video curto, integracao em roteiro e sequencia de stories.</li>
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

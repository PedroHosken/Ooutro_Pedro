import './App.css'

function App() {
  return (
    <main className="page">
      <header className="hero">
        <div className="hero-content">
          <p className="tag">Expedicao Ooutro Pedro</p>
          <h1>Vida real, aventura leve e conversa de verdade.</h1>
          <p className="description">
            Sem personagem e sem superproducao: eu compartilho o que vivo no dia
            a dia e transformo isso em conteudo com entretenimento e curadoria.
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
        <h2>Quem e o Pedro nessa expedicao</h2>
        <p>
          Sou um criador pratico, com camera ligada na rotina de verdade: tarde
          comum, treino, casa, lanche e papo reto. O foco e registrar a vida como
          ela acontece, com leveza, humor e proximidade.
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
          <li>
            Lifestyle e esporte: corrida, futebol e habitos que movem minha
            rotina.
          </li>
          <li>
            Curadoria e cultura: leituras, filmes e ideias que estou descobrindo.
          </li>
          <li>
            Conteudo multiplataforma com cara de historia, nao de anuncio frio.
          </li>
        </ul>
      </section>

      <section id="midia-kit" className="card">
        <h2>Mapa de parceria para marcas</h2>
        <ul className="project-list">
          <li>
            Posicionamento: criador autentico, sem roteiro engessado e com
            narrativa natural.
          </li>
          <li>
            Territorio editorial: lifestyle, esporte, curadoria e cultura.
          </li>
          <li>
            Formatos: video curto, integracao no roteiro real e sequencia de
            stories.
          </li>
          <li>
            Entrega de valor: marca entra no contexto da rotina com conexao
            genuina.
          </li>
        </ul>
      </section>

      <section className="card">
        <h2>Video de apresentacao</h2>
        <p className="video-text">
          Um resumo rapido de quem eu sou e da proposta do meu conteudo.
        </p>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/N9YK2MHJaxQ?si=rR8sbpcoawN1zIAN"
            title="Video de apresentacao do Ooutro Pedro"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="card">
        <h2>Objetivo final: comunidade de conversa</h2>
        <p>
          Mais do que publicar video, quero criar um espaco de troca nos
          comentarios: experiencias, opinioes e referencias que a galera tambem
          vive. A comunidade e parte da expedicao.
        </p>
      </section>

      <section id="contato" className="card">
        <h2>Links oficiais e contato</h2>
        <p className="contact-intro">
          Quer falar de parceria, campanha ou projeto especial? O canal mais
          rapido e por e-mail:
        </p>
        <a className="email-cta" href="mailto:contato@ooutropedro.com">
          contato@ooutropedro.com
        </a>
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
        </div>
      </section>
    </main>
  )
}

export default App

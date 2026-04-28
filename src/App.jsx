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

      <section className="card">
        <div className="metrics-head">
          <h2>Metricas do ultimo mes</h2>
          <p>Periodo analisado: Marco de 2026 (1 a 31 de marco)</p>
        </div>
        <div className="metrics">
          <article className="metric-card">
            <p className="metric-label">YouTube - visualizacoes</p>
            <strong className="metric-value">3,5 mil</strong>
            <span className="metric-note">Tempo de exibicao: 9,3 horas | Inscritos: +6</span>
          </article>
          <article className="metric-card">
            <p className="metric-label">Instagram - visualizacoes</p>
            <strong className="metric-value">7.523</strong>
            <span className="metric-note">
              Contas alcancadas: 2.723 | Nao seguidores: 72,4%
            </span>
          </article>
          <article className="metric-card">
            <p className="metric-label">TikTok - visualizacoes de publicacao</p>
            <strong className="metric-value">8.426</strong>
            <span className="metric-note">
              Curtidas: 285 | Comentarios: 42 | Compartilhamentos: 9
            </span>
          </article>
        </div>
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

      <section id="curadoria" className="card">
        <h2>Curadoria do Mestre</h2>
        <p className="video-text">
          Espaco dedicado as recomendacoes que compartilho com a audiencia. Em
          breve vou adicionar novos links aqui.
        </p>
        <a
          className="button primary curadoria-cta"
          href="https://youtube.com/playlist?list=PLifk6ODQW1xIbuOM28fLEf9BOGrPjS93D&si=QGSNAM33ZACw-CqC"
          target="_blank"
          rel="noreferrer"
        >
          Abrir playlist recomendada
        </a>
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
          <a
            href="https://www.instagram.com/ooutropedro_?igsh=aTY0cGlzejVpNjNt&utm_source=qr"
            target="_blank"
            rel="noreferrer"
          >
            Instagram oficial
          </a>
          <a
            href="https://www.tiktok.com/@ooutropedro?_r=1&_t=ZS-95v566OnsbE"
            target="_blank"
            rel="noreferrer"
          >
            TikTok oficial
          </a>
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

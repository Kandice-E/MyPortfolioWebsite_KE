import './Hero.css'

function Hero({ data }) {
  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm {data.name}</h1>
          <p className="hero-subtitle">{data.title}</p>
          <p className="hero-description">{data.description}</p>
          <div className="hero-cta">
            <a href="#contact" className="btn-primary">Get In Touch</a>
            <a href="#projects" className="btn-secondary">View My Work</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

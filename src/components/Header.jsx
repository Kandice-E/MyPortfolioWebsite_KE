import './Header.css'

function Header({ data }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">{data.name}</div>
          <nav className="nav">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

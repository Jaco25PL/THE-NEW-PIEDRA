import '../App.css';

export function Header() {

    return (
        <header className="header">
        {/* Left: social media icons */}
        <div className="header-left">
          {/* Inline <img> tags, or you could inline the SVG code directly */}
          <a href="#facebook">
            <img
              src="./facebook_logo.svg"
              alt="Facebook Icon"
              className="social-icon"
            />
          </a>
          <a href="#instagram">
            <img
              src="./Instagram_logo.svg"
              alt="Instagram Icon"
              className="social-icon"
            />
          </a>
          <a href="#youtube">
            <img
              src="./youtube_logo.svg"
              alt="YouTube Icon"
              className="social-icon"
            />
          </a>
        </div>

        {/* Center: main logo */}
        <div className="header-center">
          {/* The “PIEDRA Construcciones” black block logo. */}
          <a href="#home">
            <img
              src="./piedra_logo.svg"
              alt="Piedra Construcciones"
              className="main-logo"
            />
          </a>
        </div>

        {/* Right: nav links + contact button */}
        <nav className="header-right">
          <ul className="nav-menu">
            <li><a href="#historia">HISTORIA</a></li>
            <li><a href="#construcciones">CONSTRUCCIONES</a></li>
            <li><a href="#remodelaciones">REMODELACIONES</a></li>
            <li><a href="#blog">BLOG</a></li>
          </ul>
          <button className="contact-btn">CONTACTAR</button>
        </nav>
      </header>
    )
}
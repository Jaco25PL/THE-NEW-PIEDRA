import '../App.css';

export function Header() {

    return (
        <header className="header-container">
            <nav className="header-grid">
              {/* 1) First column: Social icons (subdivided into three) */}
              <div className="column social-column">
                <img src="./images/instagram-logo.svg" alt="Instagram" />
                <img src="./images/facebook-logo.svg" alt="Facebook" />
                <img src="./images/youtube-logo.svg" alt="YouTube" />
              </div>

              {/* 2) Second column */}
              <div className="column"><a>HISTORIA</a> </div>

              {/* 3) Third column */}
              <div className="column"><a>CONSTRUCCIONES</a> </div>

              {/* 4) Fourth column (Center - your logo, for example) */}
              <div className="column logo-column">
                <img className="main-logo" src="./images/piedra_logo-2.svg" alt="Piedra Construcciones" />
              </div>

              {/* 5) Fifth column */}
              <div className="column"><a>REMODELACIONES</a> </div>

              {/* 6) Sixth column */}
              <div className="column"><a>BLOG</a> </div>

              {/* 7) Seventh column: “Contactar” button */}
              <div className="column">
                <button type="button" className="contact-button">CONTACTAR</button>
              </div>
            </nav>
        </header>
    )
}
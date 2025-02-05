import '../App.css';

export function Header() {

    return (
        <header className="header-container">
            <nav className="header-grid">
              {/* 1) First column: Social icons (subdivided into three) */}
              <div className="column social-column">


                <a href="http://" target="_blank" ><img src="./images/instagram-logo.svg" alt="Instagram" /></a>
                <a href="http://" target="_blank" ><img src="./images/facebook-logo.svg" alt="Facebook" /></a>
                <a href="http://" target="_blank" ><img src="./images/youtube-logo.svg" alt="YouTube" /></a>


                
                
                
              </div>

              {/* 2) Second column */}
              <div className="column"><a href='#'>HISTORIA</a> </div>

              {/* 3) Third column */}
              <div className="column"><a href='#'>CONSTRUCCIONES</a> </div>

              {/* 4) Fourth column (Center - your logo, for example) */}
              <div className="column logo-column">
                <a href="#">
                    <img className="main-logo" src="./images/piedra_logo-2.svg" alt="Piedra Construcciones" />
                </a>
              </div>

              {/* 5) Fifth column */}
              <div className="column"><a href='#'>REMODELACIONES</a> </div>

              {/* 6) Sixth column */}
              <div className="column"><a href='#'>BLOG</a> </div>

              {/* 7) Seventh column: “Contactar” button */}
              <div className="column">
                <button type="button" className="contact-button">CONTACTAR</button>
              </div>
            </nav>
        </header>
    )
}
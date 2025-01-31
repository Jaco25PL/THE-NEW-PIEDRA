import '../App.css';

export function Main() {

    return (
        <main className="main-content">
          <section className="split-container">
            {/* Left half: Construcciones */}
            <div className="split-image left-image">
              <img className="image" src="./sample-house-1.jpg" alt="sample house" />
              <h2>CONSTRUCCIONES</h2>
            </div>
            
            {/* Right half: Remodelaciones */}
            <div className="split-image right-image">
              <img className="image" src="./sample-house-2.jpg" alt="sample house" />
              <h2>REMODELACIONES</h2>
            </div>
          </section>
        </main>
    )
}
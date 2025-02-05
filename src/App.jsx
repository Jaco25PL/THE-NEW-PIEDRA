// import facebookIcon from "./pfacebook_logo.svg";
// import instagramIcon from "./assets/instagram.svg";
// import youtubeIcon from "./assets/youtube.svg";
// import mainLogo from "./assets/main-logo.svg";
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'

function App() {

  return (
    <div className="app-container">
      <Header/>

      <Main/>

      <Footer/>
    </div>
  )
}

export default App

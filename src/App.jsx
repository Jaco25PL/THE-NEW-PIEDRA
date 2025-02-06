import './App.css'
import styles from './styles/App.module.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'

function App() {

  return (
    <div className={styles.appContainer}>
      <Header/>

      <Main/>

      <Footer/>
    </div>
  )
}

export default App

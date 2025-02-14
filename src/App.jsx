// import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import styles from './styles/App.module.css'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './pages/Home'
// import { Main } from './components/Main'

function App() {

  return (

    <div className={styles.appContainer}>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </main>
      <Footer/>
    </div>

  )
}

export default App



// <div className={styles.appContainer}>

  // <Main/>

// </div>
// import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import styles from './styles/App.module.css'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Construir } from './pages/Construir'
import { NotFound } from './pages/404'
import { Remodelar } from './pages/Remodelar'

function App() {

  return (

    <div className={styles.appContainer}>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/construir' element={<Construir/>} />
          <Route path='/remodelar' element={<Remodelar/>} />
          <Route path="*" element={<NotFound/>} />
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
// import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import styles from './styles/App.module.css'

import { Footer } from './components/common/Footer/Footer'
import { Header } from './components/common/Header/Header'
import { Home } from './pages/Home'
import { Construir } from './pages/Construir'
import { NotFound } from './pages/404'
import { Remodelar } from './pages/Remodelar'
import { Nosotros } from './pages/Nosotros'
import { Blog } from './pages/Blog'

function App() {

  return (

    <div className={styles.appContainer}>
      <Header/>
      <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/construir' element={<Construir/>} />
            <Route path='/remodelar' element={<Remodelar/>} />
            <Route path='/nosotros' element={<Nosotros/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
      </main>
      <Footer/>
    </div>

  )
}

export default App

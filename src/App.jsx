import React, { Suspense, useState, useCallback, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AnimatePresence, motion } from 'framer-motion'

import './App.css'
import styles from './styles/App.module.css'

import { Footer } from './components/common/Footer/Footer'
import { Navbar } from './components/common/Navbar/Navbar'
import { useScrollToTop } from './hooks/useScrollToTop'
import { PageSkeleton } from './components/common/PageSkeleton/PageSkeleton'
import { IMAGES_TO_PRELOAD } from './data/imagesToPreload'

const Home = React.lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })))
const Construir = React.lazy(() => import('./pages/Construir').then((m) => ({ default: m.Construir })))
const Remodelar = React.lazy(() => import('./pages/Remodelar').then((m) => ({ default: m.Remodelar })))
const Nosotros = React.lazy(() => import('./pages/Nosotros').then((m) => ({ default: m.Nosotros })))
const Proyectos = React.lazy(() => import('./pages/Proyectos').then((m) => ({ default: m.Proyectos })))
const Blog = React.lazy(() => import('./pages/Blog').then((m) => ({ default: m.Blog })))
const Contacto = React.lazy(() => import('./pages/Contacto').then((m) => ({ default: m.Contacto })))
const NotFound = React.lazy(() => import('./pages/404').then((m) => ({ default: m.NotFound })))

function preloadImages(urls) {
  return Promise.all(
    urls.map(
      (url) =>
        new Promise((resolve) => {
          const img = new Image()
          img.onload = resolve
          img.onerror = resolve
          img.src = url
        })
    )
  )
}

function SuspenseChildren({ onReady, children }) {
  useEffect(() => {
    onReady()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return children
}

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
}

const isMobile = window.innerWidth < 768
const pageTransition = { duration: isMobile ? 0.12 : 0.2, ease: 'easeInOut' }

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path='/construir' element={<Construir />} />
          <Route path='/remodelar' element={<Remodelar />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/proyectos' element={<Proyectos />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  useScrollToTop()

  const [pageReady, setPageReady] = useState(false)
  const [imagesReady, setImagesReady] = useState(false)
  const [loading, setLoading] = useState(true)
  const [overlayVisible, setOverlayVisible] = useState(true)

  useEffect(() => {
    preloadImages(IMAGES_TO_PRELOAD).then(() => setImagesReady(true))
  }, [])

  useEffect(() => {
    if (pageReady && imagesReady) setLoading(false)
  }, [pageReady, imagesReady])

  const handleReady = useCallback(() => setPageReady(true), [])

  return (
    <HelmetProvider>
      {overlayVisible && (
        <PageSkeleton
          fadeOut={!loading}
          onFadeEnd={() => setOverlayVisible(false)}
        />
      )}
      <div className={styles.appContainer}>
        <Navbar />
        <main className={styles.main}>
          <Suspense fallback={null}>
            <SuspenseChildren onReady={handleReady}>
              <AnimatedRoutes />
            </SuspenseChildren>
          </Suspense>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  )
}

export default App

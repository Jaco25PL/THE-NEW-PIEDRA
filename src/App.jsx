import React, { Suspense, useState, useCallback, useEffect, useRef } from 'react'
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

const isMobile = window.innerWidth < 768

const pageVariants = isMobile
  ? { initial: {}, animate: {}, exit: {} }
  : { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }

const pageTransition = isMobile
  ? { duration: 0 }
  : { duration: 0.2, ease: 'easeInOut' }

/* Fires onMounted when the lazy page component renders (Suspense resolved) */
function PageMounted({ onMounted, routeKey, children }) {
  useEffect(() => {
    if (onMounted) onMounted()
  }, [routeKey, onMounted])
  return children
}

function AnimatedRoutes({ onRouteChange, onPageMounted }) {
  const location = useLocation()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    if (isMobile && onRouteChange) onRouteChange()
  }, [location.pathname, onRouteChange])

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
        <Suspense fallback={null}>
          <PageMounted onMounted={onPageMounted} routeKey={location.pathname}>
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
          </PageMounted>
        </Suspense>
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

  // Mobile navigation skeleton
  const [mobileNavLoading, setMobileNavLoading] = useState(false)
  const [mobileNavFading, setMobileNavFading] = useState(false)
  const mobileNavLoadingRef = useRef(false)
  const fadeTimerRef = useRef(null)

  useEffect(() => {
    preloadImages(IMAGES_TO_PRELOAD).then(() => setImagesReady(true))
  }, [])

  useEffect(() => {
    if (pageReady && imagesReady) setLoading(false)
  }, [pageReady, imagesReady])

  const handleReady = useCallback(() => setPageReady(true), [])

  // Step 1: Route changes on mobile → show skeleton immediately
  const handleRouteChange = useCallback(() => {
    clearTimeout(fadeTimerRef.current)
    mobileNavLoadingRef.current = true
    setMobileNavLoading(true)
    setMobileNavFading(false)
  }, [])

  // Step 2: Lazy page component mounted (Suspense resolved) → wait 500ms then fade out
  const handlePageMounted = useCallback(() => {
    if (!mobileNavLoadingRef.current) return
    clearTimeout(fadeTimerRef.current)
    fadeTimerRef.current = setTimeout(() => {
      setMobileNavFading(true)
    }, 300)
  }, [])

  // Step 3: Fade-out CSS transition ends → remove skeleton from DOM
  const handleMobileNavFadeEnd = useCallback(() => {
    mobileNavLoadingRef.current = false
    setMobileNavLoading(false)
    setMobileNavFading(false)
  }, [])

  return (
    <HelmetProvider>
      {/* Initial load skeleton */}
      {overlayVisible && (
        <PageSkeleton
          fadeOut={!loading}
          onFadeEnd={() => setOverlayVisible(false)}
        />
      )}
      {/* Mobile navigation skeleton — below menu (z-index 98), above everything else */}
      {mobileNavLoading && !overlayVisible && (
        <PageSkeleton
          fadeOut={mobileNavFading}
          onFadeEnd={handleMobileNavFadeEnd}
          behindNav
        />
      )}
      <div className={styles.appContainer}>
        <Navbar />
        <main className={styles.main}>
          <Suspense fallback={null}>
            <SuspenseChildren onReady={handleReady}>
              <AnimatedRoutes
                onRouteChange={handleRouteChange}
                onPageMounted={handlePageMounted}
              />
            </SuspenseChildren>
          </Suspense>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  )
}

export default App

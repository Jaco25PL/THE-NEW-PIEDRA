import { useEffect, useRef, useState } from "react"

export function useHeaderScroll() {
    const [isScrolling, setIsScrolling] = useState(false)
    const [isStopScrolling, setIsStopScrolling] = useState(true)

    // Refs para estado derivado sin re-render y control de rAF
    const lastYRef = useRef(0)
    const tickingRef = useRef(false)
    const isScrollingRef = useRef(false)

    useEffect(() => {
        const TOP_OFFSET = 10       // px que consideras "arriba del todo"
        const MIN_HIDE_Y = 300      // desde dónde puede ocultarse el header
        const DELTA = 5             // histéresis para evitar parpadeos

        const onScroll = () => {
            if (tickingRef.current) return
            tickingRef.current = true

            requestAnimationFrame(() => {
                const y = window.scrollY
                const lastY = lastYRef.current

                // Top fijo: mostrar header y marcar stopScrolling
                const atTop = y <= TOP_OFFSET
                setIsStopScrolling(atTop)

                let nextIsScrolling = isScrollingRef.current

                if (atTop) {
                    nextIsScrolling = false
                } else {
                    const goingDown = y > lastY + DELTA
                    const goingUp = y < lastY - DELTA

                    if (goingDown && y > MIN_HIDE_Y) {
                        nextIsScrolling = true
                    } else if (goingUp) {
                        nextIsScrolling = false
                    }
                }

                if (nextIsScrolling !== isScrollingRef.current) {
                    isScrollingRef.current = nextIsScrolling
                    setIsScrolling(nextIsScrolling)
                }

                lastYRef.current = y
                tickingRef.current = false
            })
        }

        // Inicialización
        lastYRef.current = window.scrollY
        isScrollingRef.current = false
        setIsStopScrolling(window.scrollY <= TOP_OFFSET)
        setIsScrolling(false)

        window.addEventListener('scroll', onScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return {
        isScrolling,
        isStopScrolling
    }
}
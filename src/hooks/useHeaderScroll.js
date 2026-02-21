import { useEffect, useRef, useState } from "react"

export function useHeaderScroll() {
    const [isScrolled, setIsScrolled] = useState(false)
    const tickingRef = useRef(false)
    const isScrolledRef = useRef(false)

    useEffect(() => {
        const SCROLL_DOWN = 80  // px to trigger compact header
        const SCROLL_UP   = 20  // px to restore full header (near top)

        const onScroll = () => {
            if (tickingRef.current) return
            tickingRef.current = true

            requestAnimationFrame(() => {
                const y = window.scrollY
                const current = isScrolledRef.current
                let next = current

                if (!current && y > SCROLL_DOWN) next = true
                else if (current && y < SCROLL_UP)  next = false

                if (next !== current) {
                    isScrolledRef.current = next
                    setIsScrolled(next)
                }

                tickingRef.current = false
            })
        }

        const initialScrolled = window.scrollY > SCROLL_DOWN
        isScrolledRef.current = initialScrolled
        setIsScrolled(initialScrolled)

        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return { isScrolled }
}

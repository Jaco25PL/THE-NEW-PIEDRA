import { useEffect, useRef, useState } from "react"

export function useHeaderScroll() {
    const [isScrolled, setIsScrolled] = useState(false)

    // Refs to avoid re-renders and control requestAnimationFrame
    const tickingRef = useRef(false)
    const isScrolledRef = useRef(false)
    const debounceTimeoutRef = useRef(null)

    useEffect(() => {
        // Stable thresholds with hysteresis to prevent loops
        const SCROLL_THRESHOLD_DOWN = 120  // Switch to small logo when scrolling down past 120px
        const SCROLL_THRESHOLD_UP = 80     // Switch to big logo when scrolling up past 80px
        const DEBOUNCE_DELAY = 80          // Wait 80ms before switching logos

        const onScroll = () => {
            if (tickingRef.current) return
            tickingRef.current = true

            requestAnimationFrame(() => {
                const y = window.scrollY
                const currentIsScrolled = isScrolledRef.current

                let nextIsScrolled = currentIsScrolled

                // Use hysteresis to prevent loops
                if (!currentIsScrolled && y > SCROLL_THRESHOLD_DOWN) {
                    // Currently showing big logo, switch to small if scrolled past threshold
                    nextIsScrolled = true
                } else if (currentIsScrolled && y < SCROLL_THRESHOLD_UP) {
                    // Currently showing small logo, switch to big if scrolled back up
                    nextIsScrolled = false
                }

                // Only update state if it actually changed, but with debounce
                if (nextIsScrolled !== currentIsScrolled) {
                    // Clear any existing timeout
                    if (debounceTimeoutRef.current) {
                        clearTimeout(debounceTimeoutRef.current)
                    }

                    // Set a new timeout to delay the state change
                    debounceTimeoutRef.current = setTimeout(() => {
                        // Double-check the scroll position hasn't changed back
                        const currentY = window.scrollY
                        let finalIsScrolled = isScrolledRef.current

                        if (!isScrolledRef.current && currentY > SCROLL_THRESHOLD_DOWN) {
                            finalIsScrolled = true
                        } else if (isScrolledRef.current && currentY < SCROLL_THRESHOLD_UP) {
                            finalIsScrolled = false
                        }

                        if (finalIsScrolled !== isScrolledRef.current) {
                            isScrolledRef.current = finalIsScrolled
                            setIsScrolled(finalIsScrolled)
                        }
                    }, DEBOUNCE_DELAY)
                }

                tickingRef.current = false
            })
        }

        // Initialize
        const initialY = window.scrollY
        const initialIsScrolled = initialY > SCROLL_THRESHOLD_DOWN
        isScrolledRef.current = initialIsScrolled
        setIsScrolled(initialIsScrolled)

        window.addEventListener('scroll', onScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', onScroll)
            // Clear any pending timeout
            if (debounceTimeoutRef.current) {
                clearTimeout(debounceTimeoutRef.current)
            }
        }
    }, [])

    return {
        isScrolled
    }
}
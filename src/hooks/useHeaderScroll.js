import { useEffect, useState } from "react"

export function useHeaderScroll() {
    const [isScrolling, setIsScrolling] = useState(false)
    
    
    useEffect(() => {
    
        let timeoutId = null
        
        const handleScroll = () => {


            const scrollY = window.scrollY

            const height = 300
        
            if (timeoutId) {
                clearTimeout(timeoutId)
            }

            timeoutId = setTimeout(() => {
                scrollY >= height ? setIsScrolling(true) : setIsScrolling(false)
            }, 30)
        }


            handleScroll()

            window.addEventListener('scroll', handleScroll)

            return () => {
                window.removeEventListener('scroll', handleScroll)
                if (timeoutId) {
                    clearTimeout(timeoutId)
                }
            }
    }, [])
    
    return {
        isScrolling
    }
}
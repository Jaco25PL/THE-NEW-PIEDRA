import { useEffect, useState } from "react"

export function useHeaderScroll() {
    const [isScrolling, setIsScrolling] = useState(false)
    const [isStopScrolling, setIsStopScrolling] = useState(true)
    
    
    useEffect(() => {
    
        let timeoutId = null
        
        const handleScrollOn = () => {


            const scrollY = window.scrollY

            const height = 300
        
            if (timeoutId) {
                clearTimeout(timeoutId)
            }

            timeoutId = setTimeout(() => {
                scrollY >= height ? setIsScrolling(true) : setIsScrolling(false)
            }, 30)
        }


            handleScrollOn()

            window.addEventListener('scroll', handleScrollOn)

            return () => {
                window.removeEventListener('scroll', handleScrollOn)
                if (timeoutId) {
                    clearTimeout(timeoutId)
                }
            }
    }, [])

    useEffect(() => {
        // let timeoutId = null
        
        const handleScrollOff = () => {

            const scrollY = window.scrollY
            const height = 10
        
            scrollY <= height ? setIsStopScrolling(true) : setIsStopScrolling(false)
        }
        handleScrollOff()
        window.addEventListener('scroll', handleScrollOff)
        return () => {
            window.removeEventListener('scroll', handleScrollOff)
        }
    }, [])
    
    return {
        isScrolling,
        isStopScrolling
    }
}
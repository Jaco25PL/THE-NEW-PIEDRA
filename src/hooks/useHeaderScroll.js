import { useEffect, useState } from "react"

export function useHeaderScroll() {
    const [isScrolling, setIsScrolling] = useState(false)
    
    const handleScroll = () => {
        const scrollY = window.scrollY
        
        const height = 300
        
        scrollY > height ? setIsScrolling(true) : setIsScrolling(false)

    }
    
    useEffect(() => {

        handleScroll()
        
        window.addEventListener('scroll', handleScroll)
        
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    return {
        isScrolling
    }
}
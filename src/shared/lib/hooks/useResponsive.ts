import { useState, useEffect } from 'react'

function useMediaQuery (query: string): boolean {
    const [matches, setMatches] = useState(window.matchMedia(query).matches)
    useEffect(() => {
        const mediaQueryList = window.matchMedia(query)
        const handleMediaQueryChange = (event: MediaQueryListEvent): void => {
            setMatches(event.matches)
        }
        mediaQueryList.addEventListener('change', handleMediaQueryChange)
        return () => {
            mediaQueryList.removeEventListener('change', handleMediaQueryChange)
        }
    }, [query])
    return matches
}

export default function useResponsive (): boolean[] {
    const isMobile = useMediaQuery('(max-width: 600px)')
    const isTablet = useMediaQuery('(min-width: 601px) and (max-width: 960px)')
    return [isMobile, isTablet]
}

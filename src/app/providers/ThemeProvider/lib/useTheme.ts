import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'
import { useContext } from 'react'

export interface UseThemeResult {
    theme: Theme
    toggleTheme: () => void
}

export function useTheme (): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = (): undefined => {
        const newTheme: Theme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme,
        toggleTheme
    }
}

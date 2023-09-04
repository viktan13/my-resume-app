import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import ThemeIcon from 'shared/assets/icons/theme-light.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { type ReactElement } from 'react'

export interface ThemeSwitcherProps {
    className?: string
    size?: string
}

export const ThemeSwitcher = ({ className, size = '40px' }: ThemeSwitcherProps): ReactElement => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button theme={ButtonTheme.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
            <ThemeIcon width={size} height={size} fill={theme === Theme.DARK ? 'blue' : '#0fd90f'}/>
        </Button>
    )
}

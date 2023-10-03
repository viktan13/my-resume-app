import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type ReactElement } from 'react'

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINED = 'outlined'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    disabled?: boolean
}

export const Button = ({ className, children, theme, disabled, ...otherProps }: ButtonProps): ReactElement => {
    return (
        <button disabled={disabled} className={classNames(cls.Button, { [cls.disabled]: disabled }, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    )
}

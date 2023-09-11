import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'
import { type ReactElement } from 'react'

export enum ApplinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
}

export interface AppLinkProps extends LinkProps {
    className?: string
    theme?: ApplinkTheme
    sidebar?: boolean
    active?: boolean
}

export const AppLink = (props: AppLinkProps): ReactElement => {
    const { className, sidebar, active, theme = ApplinkTheme.PRIMARY, children, to, ...otherProps } = props
    return (
        <Link to={to} className={classNames(cls.AppLink, { [cls.sidebar]: sidebar, [cls.active]: active }, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    )
}

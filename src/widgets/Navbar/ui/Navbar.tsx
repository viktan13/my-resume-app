import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import React, { type ReactElement } from 'react'
import { AppLink, ApplinkTheme } from 'shared/ui/AppLink/AppLink'

export interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps): ReactElement => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={ApplinkTheme.INVERTED} to={'/'} className={cls.mainLink}>Home</AppLink>
                <AppLink theme={ApplinkTheme.INVERTED} to={'/about'}>About</AppLink>
            </div>
        </div>
    )
}

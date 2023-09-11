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

            </div>
        </div>
    )
}

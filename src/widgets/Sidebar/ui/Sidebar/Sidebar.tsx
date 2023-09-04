import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, { type ReactElement, useState } from 'react'
import { ThemeSwitcher } from 'features/ThemeSwitcher'

export interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps): ReactElement => {
    const [collapsed, setCollapsed] = useState(false)

    const toggle = (): undefined => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={toggle}>toggle</button>
            <div className={cls.themeSwitcher}>
                <ThemeSwitcher />
            </div>
        </div>
    )
}

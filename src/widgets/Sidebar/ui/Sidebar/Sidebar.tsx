import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, { type ReactElement, useState } from 'react'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { AppLink, ApplinkTheme } from 'shared/ui/AppLink/AppLink'
import { v4 as uuidv4 } from 'uuid'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export interface SidebarMenuItem {
    path: string
    id: string
    name: string
}

export interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps): ReactElement => {
    const [collapsed, setCollapsed] = useState(false)
    const [active, setActive] = useState('Home')
    // const toggle = (): undefined => {
    //     setCollapsed(prev => !prev)
    // }

    const sidebarMenu: SidebarMenuItem[] = [
        { path: RoutePath.home, id: uuidv4(), name: 'Home' },
        { path: RoutePath.about, id: uuidv4(), name: 'About' },
        { path: RoutePath.skills, id: uuidv4(), name: 'Skills' },
        { path: RoutePath.experience, id: uuidv4(), name: 'Experience' },
        { path: RoutePath.education, id: uuidv4(), name: 'Education' },
        { path: RoutePath.contact, id: uuidv4(), name: 'Contact' }
    ]

    const handleClick = (name: string): undefined => {
        setActive(name)
    }

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            {/* <button onClick={toggle}>toggle</button> */}
            <div className={cls.links}>
                {sidebarMenu.map(el => (
                    <AppLink
                        key={el.id}
                        sidebar
                        active={el.name === active}
                        theme={ApplinkTheme.INVERTED}
                        to={el.path}
                        onClick={() => { handleClick(el.name) }}
                    >
                        {el.name}
                    </AppLink>
                ))}
            </div>
            <div className={cls.themeSwitcher}>
                <ThemeSwitcher />
            </div>
        </div>
    )
}

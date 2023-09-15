import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, { type ReactElement, useEffect, useState } from 'react'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { AppLink, ApplinkTheme } from 'shared/ui/AppLink/AppLink'
import { v4 as uuidv4 } from 'uuid'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { ProfilePicture } from 'entities/ProfilePicture'
import { useLocation } from 'react-router-dom'
import { useGetActiveLink } from 'shared/lib/hooks/useGetActiveLink'

export interface SidebarMenuItem {
    path: string
    id: string
    name: string
}

export interface SidebarProps {
    className?: string
    mobile?: boolean
}

const sidebarMenu: SidebarMenuItem[] = [
    { path: RoutePath.home, id: uuidv4(), name: 'Home' },
    { path: RoutePath.about, id: uuidv4(), name: 'About' },
    { path: RoutePath.skills, id: uuidv4(), name: 'Skills' },
    { path: RoutePath.experience, id: uuidv4(), name: 'Experience' },
    { path: RoutePath.education, id: uuidv4(), name: 'Education' },
    { path: RoutePath.contact, id: uuidv4(), name: 'Contact' }
]

export const Sidebar = ({ className, mobile }: SidebarProps): ReactElement => {
    const [collapsed, setCollapsed] = useState(false)
    const [active, setActive] = useState(useGetActiveLink(sidebarMenu))

    useEffect(() => {
        setCollapsed(mobile)
    }, [mobile])

    const toggle = (): undefined => {
        setCollapsed(prev => !prev)
    }

    const handleClick = (name: string): undefined => {
        setActive(name)
    }

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            {mobile &&
                <Button theme={ButtonTheme.CLEAR} onClick={toggle} className={cls.hamburger}>
                    <GiHamburgerMenu size='2rem' />
                </Button>}
            <ProfilePicture className={cls.profilePicture}/>
            <div className={cls.sidebarContent}>
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
        </div>
    )
}

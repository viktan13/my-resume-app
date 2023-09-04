import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import React, {useState} from "react";
import {ThemeSwitcher} from "features/ThemeSwitcher";

export interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={toggle}>toggle</button>
            <div className={cls.themeSwitcher}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};

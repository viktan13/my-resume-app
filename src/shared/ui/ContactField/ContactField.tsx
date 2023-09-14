import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ContactField.module.scss'
import { cloneElement, type ReactElement } from 'react'

export interface ContactFieldProps {
    className?: string
    text: string
    type: string
    href: string
    icon: ReactElement
}

export const ContactField = ({ className, text, icon, href, type }: ContactFieldProps): ReactElement => {
    const typeMapping = (type: string): string => {
        return type === 'address' || type === 'linkedIn' ? '_blank' : ''
    }

    return (
        <a href={href} target={typeMapping(type)} className={classNames(cls.ContactField, {}, [className])}>
            {cloneElement(icon, { className: cls.icon }) }
            <div>{text}</div>
        </a>
    )
}

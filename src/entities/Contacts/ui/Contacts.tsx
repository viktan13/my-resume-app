import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Contacts.module.scss'
import { ContactField } from 'shared/ui/ContactField/ContactField'
import { type ReactElement } from 'react'
import { GrLinkedin } from 'react-icons/gr'
import { MdEmail, MdLocationOn } from 'react-icons/md'

export interface ContactsProps {
    className?: string
}

interface ContactFieldsType {
    text: string
    type: string
    href: string
    icon: ReactElement
}

const fields: ContactFieldsType[] = [
    {
        text: 'LinkedIn',
        type: 'linkedIn',
        href: 'https://www.linkedin.com/in/viktor-dzyuba/',
        icon: <GrLinkedin/>
    },
    {
        text: 'viktan13@gmail.com',
        type: 'email',
        href: 'mailto: viktan13@gmail.com',
        icon: <MdEmail/>
    },
    {
        text: 'Palatine, IL',
        type: 'address',
        href: 'https://www.google.com/maps/place/Palatine,+IL/@42.1146811,-88.0903074,13z/data=!4m15!1m8!3m7!1s0x880e4b2fbfc93755:0x872123abccc87c00!2sPalatine,+IL!3b1!8m2!3d42.1103041!4d-88.03424!16zL20vMHM1ZHY!3m5!1s0x880e4b2fbfc93755:0x872123abccc87c00!8m2!3d42.1103041!4d-88.03424!16zL20vMHM1ZHY?entry=ttu',
        icon: <MdLocationOn/>
    }
]

export const Contacts = ({ className }: ContactsProps): ReactElement => {
    return (
        <div className={classNames(cls.Contacts, {}, [className])}>
            {fields.map(field => (
                <ContactField key={field.type} text={field.text} type={field.type} href={field.href} icon={field.icon}/>
            ))}
        </div>
    )
}

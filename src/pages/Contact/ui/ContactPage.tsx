import { type ReactElement } from 'react'
import { Contacts } from 'entities/Contacts'
import cls from './Contact.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

const ContactPage = (): ReactElement => {
    return (
        <div className={classNames(cls.Contact)}>
            <h1>Contact</h1>
            <h2>Get in touch</h2>
            <Contacts/>
        </div>
    )
}

export default ContactPage

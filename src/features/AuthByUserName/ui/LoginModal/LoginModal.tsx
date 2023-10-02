import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginModal.module.scss'
import { type ReactElement } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from 'features/AuthByUserName/ui/LoginForm/LoginForm'

export interface LoginModalProps {
    className?: string
    isOpen?: boolean
    onClose?: () => void
}

export const LoginModal = (props: LoginModalProps): ReactElement => {
    const {
        className,
        isOpen,
        onClose
    } = props

    return (
        <Modal
            lazy
            className={classNames(cls.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
        >
            <LoginForm />
        </Modal>
    )
}

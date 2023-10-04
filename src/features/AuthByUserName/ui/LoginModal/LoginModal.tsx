import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginModal.module.scss'
import { memo, type ReactElement, Suspense } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { Loader } from 'shared/ui/Loader/Loader'

export interface LoginModalProps {
    className?: string
    isOpen?: boolean
    onClose?: () => void
}

export const LoginModal = memo((props: LoginModalProps): ReactElement => {
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
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    )
})

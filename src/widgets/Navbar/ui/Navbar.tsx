import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import React, { type ReactElement, useCallback, useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUserName'

export interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps): ReactElement => {
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onCloseModal = useCallback((): void => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback((): void => {
        setIsAuthModal(true)
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
                    Log in
                </Button>
            </div>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    )
}

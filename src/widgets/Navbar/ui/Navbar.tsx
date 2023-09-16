import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import React, { type ReactElement, useCallback, useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'

export interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps): ReactElement => {
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback((): void => {
        setIsAuthModal(prev => !prev)
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
                    Log in
                </Button>
            </div>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores atque dignissimos ducimus ea maxime mollitia obcaecati temporibus tenetur vel? Beatae blanditiis dolor similique velit?
            </Modal>
        </div>
    )
}

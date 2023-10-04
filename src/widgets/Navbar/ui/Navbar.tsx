import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import React, { type ReactElement, useCallback, useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUserName'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, type User, userActions } from 'entities/User'

export interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps): ReactElement => {
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData: User = useSelector(getUserAuthData)
    const dispatch = useDispatch()

    const onCloseModal = useCallback((): void => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback((): void => {
        setIsAuthModal(true)
    }, [])

    const onLogout = useCallback((): void => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.links}>
                    <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogout}>
                        Log out
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
                    Log in
                </Button>
            </div>
            {isAuthModal && <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />}
        </div>
    )
}

import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { type ReactElement } from 'react'

export interface LoginFormProps {
    className?: string
}

export const LoginForm = (props: LoginFormProps): ReactElement => {
    const {
        className
    } = props

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input autoFocus label='username' type="text" className={cls.input}/>
            <Input label='password' type="text" className={cls.input}/>
            <Button className={cls.loginBtn} theme={ButtonTheme.OUTLINED}>
                Log in
            </Button>
        </div>
    )
}

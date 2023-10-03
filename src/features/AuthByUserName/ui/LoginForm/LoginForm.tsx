import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { memo, type ReactElement, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from 'features/AuthByUserName/model/slice/loginSlice'
import { getLoginState } from 'features/AuthByUserName/model/selectors/getLoginState'
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'

export interface LoginFormProps {
    className?: string
}

export const LoginForm = memo((props: LoginFormProps): ReactElement => {
    const {
        className
    } = props

    const dispatch = useDispatch<any>()
    const { username, password, isLoading, error } = useSelector(getLoginState)

    const onChangeUsername = useCallback((val: string): void => {
        dispatch(loginActions.setUsername(val))
    }, [dispatch])

    const onChangePassword = useCallback((val: string): void => {
        dispatch(loginActions.setPassword(val))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, username, password])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title='Login form' className={cls.header}/>
            {error && <Text text={error} theme={TextTheme.ERROR}/>}
            <Input label='username' type="text" value={username} className={cls.input} onChange={onChangeUsername}/>
            <Input label='password' type="text" value={password} className={cls.input} onChange={onChangePassword}/>
            <Button disabled={isLoading} className={cls.loginBtn} theme={ButtonTheme.OUTLINED} onClick={onLoginClick}>
                Log in
            </Button>
        </div>
    )
})

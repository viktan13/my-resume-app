import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { memo, type ReactElement, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getLoginUsername } from '../../model/selectors/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

export interface LoginFormProps {
    className?: string
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
}

const LoginForm = memo((props: LoginFormProps): ReactElement => {
    const {
        className
    } = props

    const dispatch = useDispatch<any>()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)

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
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title='Login form' className={cls.header}/>
                {error && <Text text={error} theme={TextTheme.ERROR}/>}
                <Input autoFocus label='username' type="text" value={username} className={cls.input} onChange={onChangeUsername}/>
                <Input label='password' type="text" value={password} className={cls.input} onChange={onChangePassword}/>
                <Button disabled={isLoading} className={cls.loginBtn} theme={ButtonTheme.OUTLINED} onClick={onLoginClick}>
                    Log in
                </Button>
            </div>
        </DynamicModuleLoader>
    )
})

export default LoginForm

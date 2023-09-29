import { classNames } from 'shared/lib/classNames/classNames'
import { type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/createReduxStore'
import { type StateSchema } from '../config/StateSchema'

export interface StoreProviderProps {
    children?: ReactNode
    initialState?: StateSchema
}

export const StoreProvider = (props: StoreProviderProps): ReactNode => {
    const {
        children,
        initialState
    } = props
    const store = createReduxStore(initialState)
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

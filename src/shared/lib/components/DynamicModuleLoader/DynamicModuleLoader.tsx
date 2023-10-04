import { type ReactElement, type ReactNode, useEffect } from 'react'
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { useDispatch, useStore } from 'react-redux'
import { type StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { type Reducer } from '@reduxjs/toolkit'
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice'

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [
    StateSchemaKey,
    Reducer
]

export interface DynamicModuleLoaderProps {
    children?: ReactNode
    reducers: ReducersList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps): ReactElement => {
    const {
        children,
        reducers,
        removeAfterUnmount
    } = props

    const store: ReduxStoreWithManager = useStore()
    const dispatch = useDispatch()

    useEffect(() => {
        Object.entries(reducers).forEach(([key, reducer]: ReducerListEntry) => {
            store.reducerManager.add(key, reducer)
            dispatch({ type: `@INIT ${key} reducer` })
        })

        if (removeAfterUnmount) {
            return () => {
                Object.entries(reducers).forEach(([key, reducer]: ReducerListEntry) => {
                    store.reducerManager.remove(key)
                    dispatch({ type: `@DESTROY ${key} reducer` })
                })
            }
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}

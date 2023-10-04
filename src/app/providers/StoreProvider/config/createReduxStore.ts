import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type ReduxStoreWithManager, type StateSchema } from '../config/StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager'

export const createReduxStore = (initialState?: StateSchema): ReturnType<typeof configureStore> => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer
    }

    const reducerManager = createReducerManager(rootReducers)

    const store: ReduxStoreWithManager = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        preloadedState: initialState
    })

    store.reducerManager = reducerManager

    return store
}

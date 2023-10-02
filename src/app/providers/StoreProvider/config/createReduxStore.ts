import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema } from '../config/StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

export const createReduxStore = (initialState?: StateSchema): ReturnType<typeof configureStore> => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducers,
        preloadedState: initialState
    })
}

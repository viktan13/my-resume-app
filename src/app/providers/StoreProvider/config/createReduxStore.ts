import { configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from '../config/StateSchema'
import { counterReducer } from 'entities/Counter'

export const createReduxStore = (initialState?: StateSchema): ReturnType<typeof configureStore> => {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer
        },
        preloadedState: initialState
    })
}

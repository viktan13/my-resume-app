import { createSlice } from '@reduxjs/toolkit'
import { type CounterSchema } from '../types/counterSchema'

const initialState: CounterSchema = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented: state => {
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        }
    }
})

export const { actions: counterActions, reducer: counterReducer } = counterSlice

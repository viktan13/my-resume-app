import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type LoginSchema } from '../types/loginSchema'
import { loginByUsername } from '../services/loginByUsername'
import { type User } from 'entities/User'

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state: LoginSchema, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state: LoginSchema, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(loginByUsername.pending, (state: LoginSchema, action: PayloadAction<boolean>) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(loginByUsername.fulfilled, (state: LoginSchema, action: PayloadAction<User>) => {
                state.isLoading = false
            })
            .addCase(loginByUsername.rejected, (state: LoginSchema, action: PayloadAction<string>) => {
            // Add user to the state array
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { actions: loginActions, reducer: loginReducer } = loginSlice

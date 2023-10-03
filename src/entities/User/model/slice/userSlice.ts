import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type UserSchema, type User } from 'entities/User/model/types/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

const initialState: UserSchema = {}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state: UserSchema, action: PayloadAction<User>) => {
            state.authData = action.payload
        },
        initAuthData: (state: UserSchema) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)

            if (user) {
                state.authData = JSON.parse(user)
            }
        },
        logout: (state: UserSchema) => {
            state.authData = undefined
            localStorage.removeItem(USER_LOCALSTORAGE_KEY)
        }
    }
})

export const { actions: userActions, reducer: userReducer } = userSlice

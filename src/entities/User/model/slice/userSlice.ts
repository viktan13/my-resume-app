import { createSlice } from '@reduxjs/toolkit'
import { type UserSchema } from 'entities/User/model/types/User'

const initialState: UserSchema = {}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
})

export const { actions: userActions, reducer: userReducer } = userSlice

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { type User, userActions } from 'entities/User'
import { getUserByUsername } from 'shared/api/crud/getUserByUsername'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

interface LoginByUsernameProps {
    username: string
    password: string
}
// First, create the thunk
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async ({ username, password }, thunkAPI) => {
        try {
            // your api request to the server here
            const authUser: User = await getUserByUsername(username, password)

            if (!authUser) {
                return thunkAPI.rejectWithValue('Username or password is incorrect')
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(authUser))
            thunkAPI.dispatch(userActions.setAuthData(authUser))

            return authUser
        } catch (e) {
            console.log(e)
            thunkAPI.rejectWithValue('Server Error')
        }
    }
)

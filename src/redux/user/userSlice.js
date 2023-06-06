import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./actions";

const initialState = {
    currentUser: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: (state, action) => {
            localStorage.removeItem('user')
            state.currentUser = null
        },
        userFound: (state, action) => {
            state.currentUser = action.payload
        },
    },
    extraReducers: {
        [loginUser.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        }
    }
})

export const { logoutUser, userFound } = userSlice.actions

export default userSlice.reducer
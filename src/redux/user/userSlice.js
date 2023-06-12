import { createSlice, isPending } from "@reduxjs/toolkit";
import { loginUser } from "./actions";

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    currentUser:  user ? user : null,
    validUser: user ? true : false,
    isPending: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: (state, action) => {
            localStorage.removeItem('user')
            state.currentUser = null
            state.validUser = false
        },
    },
    extraReducers: {
        [loginUser.pending]:(state,action) => {
            state.isPending = true
        },
        [loginUser.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            state.validUser = true
            state.isPending = false
        }
    }
})

export const { logoutUser,userFound } = userSlice.actions

export default userSlice.reducer
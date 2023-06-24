import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./actions";

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);

localStorage.setItem("user", params)

const initialState = {
    validUser: false,
    userNotFound: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: (state, action) => {
            localStorage.removeItem('user')
            state.validUser = false
        },
        userFound: (state, action) => {
            state.validUser = true
            state.isPending = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload === 200) {
                state.validUser = true
            }
            state.userNotFound = true
        })
    }
})

export const { logoutUser, userFound } = userSlice.actions

export default userSlice.reducer
import { createSlice, isPending } from "@reduxjs/toolkit";
import { loginUser } from "./actions";


const initialState = {
    validUser: false
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
            state.validUser = true
        })
    }
})

export const { logoutUser, userFound } = userSlice.actions

export default userSlice.reducer
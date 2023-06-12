import { createSlice, isPending } from "@reduxjs/toolkit";
import { loginUser } from "./actions";


const initialState = {
    currentUser: null,
    validUser: false
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
        userFound: (state, action) => {
            state.currentUser = action.payload
            state.validUser = true
            state.isPending = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.currentUser = action.payload
            state.validUser = true
        })
    }
})

export const { logoutUser, userFound } = userSlice.actions

export default userSlice.reducer
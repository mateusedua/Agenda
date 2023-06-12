import { createSlice, isPending } from "@reduxjs/toolkit";
import { loginUser } from "./actions";


const initialState = {
<<<<<<< HEAD
    currentUser:  user ? user : null,
    validUser: user ? true : false,
    isPending: false
=======
    currentUser: null,
    validUser: false
>>>>>>> origin/main
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
<<<<<<< HEAD
    },
    extraReducers: {
        [loginUser.pending]:(state,action) => {
            state.isPending = true
        },
        [loginUser.fulfilled]: (state, action) => {
=======
        userFound: (state, action) => {
>>>>>>> origin/main
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

<<<<<<< HEAD
export const { logoutUser,userFound } = userSlice.actions
=======
export const { logoutUser, userFound } = userSlice.actions
>>>>>>> origin/main

export default userSlice.reducer
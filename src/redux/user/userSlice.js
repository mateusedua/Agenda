import { createSlice } from "@reduxjs/toolkit";
import request from "../../utils/request";
import { apiSlice } from "../apiSlice";

const user = localStorage.getItem('user')

let result = ''

if (user) {
    result = await request('http://localhost:5555/api/userFound', 'POST', {
        data: user
    })
}


const initialState = {
    validUser: result ? true : false,
    userNotFound: false,
    user: result.data,
    dataUser: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: (state, action) => {
            localStorage.removeItem('user')
            state.validUser = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(apiSlice.endpoints.loginUser.matchFulfilled, (state, action) => {
                localStorage.setItem('user', action.payload)
                state.validUser = true
            })
            .addMatcher(apiSlice.endpoints.loginUser.matchRejected, (state, action) => {
                state.userNotFound = true
            })
            .addMatcher(apiSlice.endpoints.loginUser.matchPending, (state, action) => {
                state.userNotFound = false
            })
    }
})

export const { logoutUser } = userSlice.actions

export default userSlice.reducer
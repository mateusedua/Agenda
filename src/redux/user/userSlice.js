import { createSlice } from "@reduxjs/toolkit";
import { dataUser, loginUser } from "./actions";
import request from "../../utils/request";
import { apiSlice } from "./apiSlice";


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
    dataUser: {}
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
            .addCase(dataUser.fulfilled, (state, action) => {
                state.dataUser = action.payload
            })
            .addMatcher(apiSlice.endpoints.loginUser.matchFulfilled, (state, action) => {
                console.log(action.payload)
            })
    }
})

export const { logoutUser, userFound } = userSlice.actions

export default userSlice.reducer
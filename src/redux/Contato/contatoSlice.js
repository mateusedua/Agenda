import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    redirect: false
}

export const contatoSlice = createSlice({
    name: 'contato',
    initialState,
    reducers: {
        redirectState: (state, action) => {
            state.redirect = true
        }
    }
})

export const { redirectState } = contatoSlice.actions

export default contatoSlice.reducer
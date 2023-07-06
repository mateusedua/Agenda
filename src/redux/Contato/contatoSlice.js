import { createSlice } from "@reduxjs/toolkit";
import { cadastrarContato, alterarContato, deleteContato } from "./actions";

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
    },
    extraReducers: {
        [cadastrarContato.fulfilled]: (state, action) => {
            state.redirect = true
        },
        [alterarContato.fulfilled]: (state, action) => {
            state.redirect = true
        },
        [deleteContato.fulfilled]: (state, action) => {
            state.redirect = true
        }
    }
})

export const { redirectState } = contatoSlice.actions

export default contatoSlice.reducer
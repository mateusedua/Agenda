import { createSlice } from "@reduxjs/toolkit";
import { getContatos, getCategoria, cadastrarContato, alterarContato, deleteContato } from "./actions";

const initialState = {
    data: [],
    categoria: [],
    redirect: false
}

export const contatoSlice = createSlice({
    name: 'contato',
    initialState,
    reducers: {
        redirectState: (state, action) => {
            state.redirect = false
        }
    },
    extraReducers:{
        [getContatos.fulfilled]: (state,action) => {
            state.data = action.payload
        },
        [getCategoria.fulfilled] : (state,action) => {
            state.categoria = action.payload
        },
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
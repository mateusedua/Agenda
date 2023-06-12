import { createSlice } from "@reduxjs/toolkit";
import { getContatos, getCategoria, cadastrarContato } from "./actions";
const initialState = {
    data: [],
    categoria: [],
    redirect: false
}

export const contatoSlice = createSlice({
    name: 'contato',
    initialState,
    extraReducers:{
        [getContatos.fulfilled]: (state,action) => {
            state.data = action.payload
        },
        [getCategoria.fulfilled] : (state,action) => {
            state.categoria = action.payload
        },
        [cadastrarContato.fulfilled]: (state, action) => {
            state.redirect = true
        }
    }
})

export default contatoSlice.reducer 
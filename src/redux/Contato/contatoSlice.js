import { createSlice } from "@reduxjs/toolkit";
import { getContatos } from "./actions";
import { getCategoria } from "./actions";

const initialState = {
    data: [],
    categoria: []
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
        }
    }
})

export default contatoSlice.reducer 
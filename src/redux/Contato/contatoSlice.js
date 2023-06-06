import { createSlice } from "@reduxjs/toolkit";
import { getContatos } from "./actions";

const initialState = {
    data: []
}

export const contatoSlice = createSlice({
    name: 'contato',
    initialState,
    extraReducers:{
        [getContatos.fulfilled]: (state,action) => {
            state.data = action.payload
        }
    }
})

export default contatoSlice.reducer 
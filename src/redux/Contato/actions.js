import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/request";

export const cadastrarContato = createAsyncThunk(
    'contato/cadastrarContato',
    async (data) => {
        await request('http://localhost:5555/api/cadastrarContato', 'POST', data)

    }

)

export const alterarContato = createAsyncThunk(
    'contato/alterarContato',
    async (data) => {
        await request('http://localhost:5555/api/alterarContato', 'PUT', data)
    }
)

export const deleteContato = createAsyncThunk(
    'contato/deleteContato',
    async (data, { dispatch }) => {
        await request('http://localhost:5555/api/deleteContato', 'DELETE', data)


    }
)
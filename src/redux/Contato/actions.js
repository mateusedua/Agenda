import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/request";

export const getContatos = createAsyncThunk(
    'contato/getContatos',
    async (data) => {
            const result = await request('http://localhost:5555/api/contatos','POST',data)
            return result.data
    }
)

export const getCategoria = createAsyncThunk(
    'contato/getCategira',
    async () => {
        const result = await request('http://localhost:5555/api/categoria','GET')
        return result.data
    }
)

export const cadastrarContato = createAsyncThunk(
    'contato/cadastrarContato',
    async (data) => {
        await request('http://localhost:5555/api/cadastrarContato', 'POST', data)
    }

)
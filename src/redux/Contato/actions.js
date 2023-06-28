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

        const user = localStorage.getItem('user').replace('?', '')

        const response = await request('http://localhost:5555/api/userFound', 'POST', {
            data: user.replace(/"/g, '')
        })

        dispatch(getContatos({
            idUsuario: response.data.id_usuario
        }))

    }
)
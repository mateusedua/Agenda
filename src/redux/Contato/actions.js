import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/request";

export const getContatos = createAsyncThunk(
    'contato/getContatos',
    async (data) => {
        try {
            const result = await request('http://localhost:5555/api/contatos','POST',data)
    
            if(result.status === 200){
                return result.data
            }
        }catch(err){
            console.log(err)
        }
    }
)
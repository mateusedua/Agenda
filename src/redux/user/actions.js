import { createAsyncThunk } from '@reduxjs/toolkit'
import request from '../../utils/request'

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async(data) => {
        try{

            const result = await request('http://localhost:5555/api/userFound','POST',data)
            
            if(result.status === 200){
                localStorage.setItem('user',JSON.stringify(result.data[0]))
            }

            return result.data

            

        }catch(err){
            console.log(err)
        }
    }
)

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5555" }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (data) => ({
                url: "/api/auth",
                method: "POST",
                body: data
            })
        }),
        cadastrarContato: builder.mutation({
            query: (data) => ({
                url: "/api/cadastrarContato",
                method: "POST",
                body: data
            })
        }),
        getContatos: builder.query({
            query: (data) => ({
                url: `/api/contatos/${data}`,
            }),
            providesTags: ['Post']
        }),
        getCategoria: builder.query({
            query: () => ({
                url: "/api/categoria"
            }),
            providesTags: ['Post']
        })
    })
})


export const {
    useLoginUserMutation,
    useGetContatosQuery,
    useGetCategoriaQuery,
    useCadastrarContatoMutation
} = apiSlice

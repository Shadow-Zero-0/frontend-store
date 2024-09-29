
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `products`,
    }),
  }),
})

export const onepokemonApi = createApi({
  reducerPath: 'onepokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    getonepokemonApiByName: builder.query({
      query: (name) => `products/${name}`,
    }),
  }),
})

export const { useGetPokemonByNameQuery } = pokemonApi
export const { useGetonepokemonApiByNameQuery } = onepokemonApi


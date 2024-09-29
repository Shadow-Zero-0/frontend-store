import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { onepokemonApi, pokemonApi } from './pokemon'
import counterReducer from './counterSlice'
export const store = configureStore({
  reducer: {
   
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [onepokemonApi.reducerPath]: onepokemonApi.reducer,
  

  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware).concat(onepokemonApi.middleware),
})


setupListeners(store.dispatch)
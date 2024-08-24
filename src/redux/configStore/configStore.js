import { configureStore } from "@reduxjs/toolkit"
import selectedPokemonSlice from "../slices/selectedPokemonSlice"

const store = configureStore({
  reducer: {
    selectedPokemon: selectedPokemonSlice,
  }
})

export default store;
import React from 'react'
import Dashboard from '../components/Dashboard'
import PokemonList from '../components/PokemonList'
import MOCK_DATA from '../mock.js'
import { PokemonProvider } from '../context/PokemonContext.jsx'

const Dex = () => {

  return (
    <PokemonProvider>
      <Dashboard />
      <PokemonList PokemonList={MOCK_DATA} />
    </PokemonProvider>
  )
}

export default Dex
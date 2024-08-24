import React from 'react'
import Dashboard from '../components/Dashboard'
import PokemonList from '../components/PokemonList'
import MOCK_DATA from '../mock.js'

const Dex = () => {
  return (
    <>
      <Dashboard />
      <PokemonList PokemonList={MOCK_DATA} />
    </>
  )
}

export default Dex
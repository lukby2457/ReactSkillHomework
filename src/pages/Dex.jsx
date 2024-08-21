import React, { useState } from 'react'
import Dashboard from '../components/Dashboard'
import PokemonList from '../components/PokemonList'
import MOCK_DATA from '../mock.js'

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    setSelectedPokemon([...selectedPokemon, pokemon]);
    console.log(selectedPokemon);
  }

  const removePokemon = (pokemon) => {
    const deletedPokemon = selectedPokemon.filter((p) => p.id !== pokemon.id);
    setSelectedPokemon([...deletedPokemon]);
  }

  return (
    <>
      <Dashboard selectedPokemon={selectedPokemon} onRemovePokemon={removePokemon} />
      <PokemonList PokemonList={MOCK_DATA} onAddPokemon={addPokemon} />
    </>
  )
}

export default Dex
import React, { useState } from 'react'
import Dashboard from '../components/Dashboard'
import PokemonList from '../components/PokemonList'
import MOCK_DATA from '../mock.js'

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    const selectedPokemonId = selectedPokemon.map((list) => list.id);

    if(selectedPokemon.length < 6) {
      if(!selectedPokemonId.some((id) => id === pokemon.id)) {
        setSelectedPokemon([...selectedPokemon, pokemon]);
      } else alert("이미 선택된 포켓몬입니다.");
    } else alert("포켓몬은 최대 여섯개까지만 선택 할 수 있어요.");

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
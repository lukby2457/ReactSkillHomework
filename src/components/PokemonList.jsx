import React from 'react'
import { styled } from 'styled-components'
import PokemonCard from './PokemonCard'

const ListContainer = styled.div`
  background-color: green;
  display: flex;
  flex-wrap: wrap;
`

const PokemonList = ({ PokemonList, onAddPokemon }) => {
  return (
    <ListContainer>
      {
        PokemonList.map(pokemon => (
          <PokemonCard 
            key={pokemon.id} 
            pokemon={{...pokemon}} 
            click={onAddPokemon}
            isSelected={false}
          />
        ))
      }
    </ListContainer>
  )
}

export default PokemonList
import React from 'react'
import { styled } from 'styled-components'
import PokemonCard from './PokemonCard'

const ListContainer = styled.div`
  background-color: #ebebeb;
  padding: 25px;
  margin: 40px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  justify-self: center;
  align-self: center;
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
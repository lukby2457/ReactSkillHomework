import React from 'react';
import { styled } from 'styled-components'
import PokemonCard from './PokemonCard';

const DashBoardContainer = styled.div`
  background-color: yellow;
  margin-bottom: 25px;
`

const ListContainer = styled.div`
  background-color: lightgreen;
  display: flex;
  flex-wrap: wrap;
`

const Dashboard = ({ selectedPokemon, onRemovePokemon }) => {
  return (
    <DashBoardContainer>
      <h2>나만의 포켓몬</h2>
      <ListContainer>
        {selectedPokemon.length === 0 ? (
          <p>선택된 포켓몬이 없습니다</p>
        ) : (
          selectedPokemon.map(pokemon => (
            <PokemonCard 
              key={pokemon.id} 
              pokemon={{...pokemon}} 
              click={onRemovePokemon}
              isSelected={true}
            />
          ))
        )}
      </ListContainer>
    </DashBoardContainer>
  )
}

export default Dashboard
import React from 'react';
import { styled } from 'styled-components'
import PokemonCard from './PokemonCard';
import EmptyCard from './EmptyCard';
import { useSelector } from 'react-redux';

const DashBoardContainer = styled.div`
  background-color: #ebebeb;
  padding: 25px;
  margin: 40px;
`

const DashboardTitle = styled.h2`
  color: #FF1A1A;
`

const ListContainer = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  justify-self: center;
  align-self: center;
  color: #333333;
`

const Dashboard = () => {
  const PokemonList = useSelector((state) => state.selectedPokemon.selectedPokemon);
  let emptyArray = new Array(6 - PokemonList.length);
  emptyArray = [...PokemonList, ...emptyArray];

  return (
    <DashBoardContainer>
      <DashboardTitle>나만의 포켓몬</DashboardTitle>
      <ListContainer>
        {emptyArray.map((object, index) => {
          if (object === undefined) {
            return <EmptyCard key={"empty" + index} />
          } else {
            return <PokemonCard
              key={object.id}
              pokemon={{ ...object }}
              isSelected={true}
            />
          }
        })}
      </ListContainer>
    </DashBoardContainer>
  )
}

export default Dashboard
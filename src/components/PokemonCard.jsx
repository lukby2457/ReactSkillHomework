import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
  width: 100px;
  background-color: beige;
  margin-bottom: 4px;
  margin-right: 4px;
`

const PokemonCard = ({ pokemon, click, isSelected }) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/pokemon-detail?id=${pokemon.id}`)}>
      <img src={pokemon.img_url} />
      <p>{pokemon.korean_name}</p>
      {isSelected ? (
        <button type='button' onClick={(e) => {
          e.stopPropagation();
          click(pokemon);
        }}>삭제</button>
      ) : (
        <button type='button' onClick={(e) => {
          e.stopPropagation();
          click(pokemon);
        }}>추가</button>
      )}
    </Card>
  )
}

export default PokemonCard
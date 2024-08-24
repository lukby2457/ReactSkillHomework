import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { addPokemon, removePokemon } from '../redux/slices/selectedPokemonSlice'

const Card = styled.div`
  width: 155px;
  height: 250px;
  background-color: beige;
  color: #333333;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

const CardImage = styled.img`
  object-fit: none;
  width: 100px;
  height: 100px;
`

const CardName = styled.h4`
  margin: 5px 0;
`

const CardNumber = styled.p`
  font-size: 14px;
  color: #c2c2c2;
`

const CardButton = styled.button`
  background-color: #FF1A1A;
  color: #fff;
  outline: none;
  border: 0;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`

const PokemonCard = ({ pokemon, isSelected }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formattedNumber = String(pokemon.id).padStart(3, '0');

  const handleAddPokemon = (pokemon) => {
    dispatch(addPokemon(pokemon));
  }

  const handleRemovePokemon = (pokemon) => {
    dispatch(removePokemon(pokemon));
  }

  return (
    <Card onClick={() => navigate(`/pokemon-detail?id=${pokemon.id}`)}>
      <CardImage src={pokemon.img_url} />
      <CardName>{pokemon.korean_name}</CardName>
      <CardNumber>{`No. ${formattedNumber}`}</CardNumber>
      {isSelected ? (
        <CardButton type='button' onClick={(e) => {
          e.stopPropagation();
          handleRemovePokemon(pokemon);
        }}>삭제</CardButton>
      ) : (
        <CardButton type='button' onClick={(e) => {
          e.stopPropagation();
          handleAddPokemon(pokemon);
        }}>추가</CardButton>
      )}
    </Card>
  )
}

export default PokemonCard
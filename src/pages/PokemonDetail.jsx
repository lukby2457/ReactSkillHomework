import React from 'react'
import { useSearchParams } from 'react-router-dom'
import MOCK_DATA from '../mock.js'
import styled from 'styled-components'

const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const DetailTitle = styled.h2`
  color: #FF1A1A;
`

const DetailLetter = styled.p`
  color: #333333;
`

const DetailButton = styled.button`
  border: 0;
  background-color: #333333;
  outline: none;
  color: #ffffff;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 10px 0;
  &:hover {
    filter: brightness(0.8);
  }
`

const PokemonDetail = () => {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get('id'));
  const pokemon = MOCK_DATA.find(p => p.id === id);

  return (
    <DetailContainer>
      <img src={pokemon.img_url} />
      <DetailTitle>{pokemon.korean_name}</DetailTitle>
      <DetailLetter>타입 : {pokemon.types.join(', ')}</DetailLetter>
      <DetailLetter>{pokemon.description}</DetailLetter>
      <DetailButton onClick={() => history.go(-1)}>뒤로 가기</DetailButton>
    </DetailContainer>
  )
}

export default PokemonDetail
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import MOCK_DATA from '../mock.js'

const PokemonDetail = () => {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get('id'));
  const pokemon = MOCK_DATA.find(p => p.id === id);

  return (
    <div>
      <img src={pokemon.img_url} />
      <h2>{pokemon.korean_name}</h2>
      <p>타입 : {pokemon.types.join(', ')}</p>
      <p>{pokemon.description}</p>
      <button onClick={() => history.go(-1)}>뒤로 가기</button>
    </div>
  )
}

export default PokemonDetail
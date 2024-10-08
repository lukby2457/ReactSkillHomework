import React from 'react'
import styled from 'styled-components'
import pokeball from '../assets/pokeball-13iwdk7Y.png'

const Card = styled.div`
  width: 155px;
  height: 250px;
  background-color: beige;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CardImage = styled.img`
  object-fit: fill;
  width: 100px;
  height: 100px;
`

const EmptyCard = () => {
  return (
    <Card>
      <CardImage src={pokeball} />
    </Card>
  )
}

export default EmptyCard
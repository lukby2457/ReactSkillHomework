import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Img = styled.img`
  width: 660px;
  margin-bottom: 25px;
`

const HomeButton = styled.button`
  border: 0;
  background-color: #FF1A1A;
  outline: none;
  color: #FFFFFF;
  font-size: 20px;
  padding: 15px;
  border-radius: 10px;
  &:hover {
    filter: brightness(0.8);
  }
`


const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <Img src='../src/assets/pokemon-logo-RN0wntMB.png' />
      <HomeButton onClick={() => navigate('/dex')}>포켓몬 도감 시작하기</HomeButton>
    </HomeContainer>
  )
}

export default Home
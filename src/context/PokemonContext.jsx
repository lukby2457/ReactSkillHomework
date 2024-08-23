import { createContext, useContext, useState } from "react";

// Context 생성
const PokemonContext = createContext();

// Provider 컴포넌트 정의
export const PokemonProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    const selectedPokemonId = selectedPokemon.map((list) => list.id);

    if(selectedPokemon.length < 6) {
      if(!selectedPokemonId.some((id) => id === pokemon.id)) {
        setSelectedPokemon([...selectedPokemon, pokemon]);
      } else alert("이미 선택된 포켓몬입니다.");
    } else alert("포켓몬은 최대 여섯개까지만 선택 할 수 있어요.");
  }

  const removePokemon = (pokemon) => {
    const deletedPokemon = selectedPokemon.filter((p) => p.id !== pokemon.id);
    setSelectedPokemon([...deletedPokemon]);
  }

  return (
    <PokemonContext.Provider value={{selectedPokemon, addPokemon, removePokemon}} >
      {children}
    </PokemonContext.Provider>
  )
}

// useContext를 사용하기 쉽게 custom hook 제작
export const usePokemon = () => {
  const context = useContext(PokemonContext);
  return context;
}
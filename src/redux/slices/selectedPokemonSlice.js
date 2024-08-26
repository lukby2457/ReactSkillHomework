import { createSlice } from "@reduxjs/toolkit"

const selectedPokemonSlice = createSlice({
  name: "selectedPokemon",
  initialState: {
    selectedPokemon: [],
  },
  reducers: {
    addPokemon: (state, action) => {
      const selectedPokemonId = state.selectedPokemon.map((list) => list.id);

      if(state.selectedPokemon.length < 6) {
        if(!selectedPokemonId.some((id) => id === action.payload.id)) {
          state.selectedPokemon.push(action.payload);
        } else alert("포켓몬은 중복으로 선택할 수 없습니다.");
      } else alert("포켓몬은 최대 여섯개까지만 선택 할 수 있습니다.");
    },
    removePokemon: (state, action) => {
      state.selectedPokemon = state.selectedPokemon.filter((p) => p.id !== action.payload.id);
    },
  }
})

export const { addPokemon, removePokemon } = selectedPokemonSlice.actions;
export default selectedPokemonSlice.reducer;
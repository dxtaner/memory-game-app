import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.js";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    items: data.sort(() => Math.random() - 0.5),
    selectedAll: 0,
    score: 100,
  },
  reducers: {
    activeToggle: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.status = !item.status;
    },
    increment: (state) => {
      state.selectedAll += 1;
    },
    newGame: (state) => {
      const shuffle = [...state.items].sort(() => Math.random() - 0.5);
      state.items.forEach((item) => (item.status = false));
      state.items = shuffle;
      state.selectedAll = 0;
    },
    scoreIncrement: (state) => {
      state.score += 50;
    },
    scoreDecrement: (state) => {
      state.score -= 10;
    },
    resetScore: (state) => {
      state.score = 100;
    },
    resetGame: (state) => {
      state.items.forEach((card) => {
        card.status = false;
      });

      state.score = 100;
    },
  },
});

export const {
  activeToggle,
  increment,
  newGame,
  scoreIncrement,
  scoreDecrement,
  resetScore,
  resetGame,
} = cardsSlice.actions;
export default cardsSlice.reducer;

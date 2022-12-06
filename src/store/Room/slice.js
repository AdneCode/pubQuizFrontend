import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  categories: [],
  players: [],
  currentQuestion: {},
  playerCount: 0,
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
      console.log("question state", state.questions);
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
      console.log("category state", state.categories);
    },
    setPlayers: (state, action) => {
      state.players = action.payload;
    },
    setCurrentQuestion: (state, action) => {},
    setPlayerCount: (state, action) => {
      state.playerCount = action.payload;
    },
  },
});

export const { setQuestions, setCategories } = roomSlice.actions;
export default roomSlice.reducer;

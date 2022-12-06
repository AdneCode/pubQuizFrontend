import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  categories: [],
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setQuestion: (state, action) => {
      state.questions = action.payload;
      console.log("question state", state.questions);
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
      console.log("category state", state.categories);
    },
  },
});

export const { setQuestions, setCategories } = roomSlice.actions;
export default roomSlice.reducer;

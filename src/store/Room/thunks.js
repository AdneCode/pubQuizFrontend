import axios from "axios";

export const getQuestions =
  (limit, categories, diff) => async (dispatch, getState) => {
    const response = await axios.get(
      `https://the-trivia-api.com/api/questions?categories=${categories}&limit=${limit}&region=NL&difficulty=${diff}`
    );
    console.log(response);
  };

export const getCategories = () => async (dispatch, getState) => {
  const response = await axios.get(`https://the-trivia-api.com/api/categories`);
  console.log(response.data);
};

import { getQuestions, getCategories } from "../../store/Room/thunks";
import { useDispatch } from "react-redux";

export const Quizpage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Quizpage</h1>
      <button onClick={() => dispatch(getQuestions(10, "music", "easy"))}>
        questions
      </button>
      <button onClick={() => dispatch(getCategories())}>questions</button>
    </div>
  );
};

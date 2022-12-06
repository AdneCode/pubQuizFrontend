import { getQuestions, getCategories } from "../../store/Room/thunks";
import { useDispatch, useSelector } from "react-redux";
import { selectQuestions } from "../../store/Room/selectors";

export const Quizpage = () => {
  const dispatch = useDispatch();
  const questions = useSelector(selectQuestions);
  console.log(questions);
  return (
    <div>
      <h1>Quizpage</h1>
      <button onClick={ () => dispatch(getQuestions(10, "music", "easy")) }>
        questions
      </button>
      <button onClick={ () => dispatch(getCategories()) }>questions</button>
    </div>
  );
};

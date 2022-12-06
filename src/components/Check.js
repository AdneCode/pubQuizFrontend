import { useDispatch } from "react-redux";
import { getQuestions } from "../store/Room/thunks";
import { getCategories } from "../store/Room/thunks";

export const Check = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(getCategories())}>check</button>
    </div>
  );
};

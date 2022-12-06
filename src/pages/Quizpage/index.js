import { useDispatch } from 'react-redux';
import { selectQuestions } from '../../store/Room/selectors';
import { useSelector } from 'react-redux';

export const Quizpage = () => {
    const dispatch = useDispatch();

    const questions = useSelector(selectQuestions);
    console.log(questions);

    return (
        <div>
            <h1>Quizpage</h1>
        </div>
    );
};

import { getQuestions } from "../../store/Room/thunks";
import { selectQuestions } from "../../store/Room/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Scorepage } from "../Scorepage";
import { useNavigate } from "react-router-dom";
import { LoadingPage } from "../LoadingPage";

const randomInteger = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

export const QuestionPage = () => {
    const dispatch = useDispatch();
    const questions = useSelector(selectQuestions);
    // console.log("questions", questions);
    // const quizLength = questions.length;
    // // console.log("legnth", quizLength);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answerOptions, setAnswerOptions] = useState([]);
    // console.log("answeroption", answerOptions);
    const navigate = useNavigate();


    useEffect(() => {
        if (questions.length) {
            const question = questions[questionIndex];
            // console.log("quesyion", question);
            let answers = [...question.incorrectAnswers];
            // console.log("answers", answers);
            // console.log("random integer", randomInteger(5));
            answers.splice(randomInteger(question.incorrectAnswers.length), 0, question.correctAnswer
            );
            setAnswerOptions(answers);
        }

    }, [questions, questionIndex]);

    const handleChosenAnswer = (e) => {
        const question = questions[questionIndex];
        // console.log("quesyion", question);
        if (e.target.textContent === question.correctAnswer) {
            // create score thunk to set the score
            // dispatch(handleScoreChange(score + 1));
            console.log("correct");
        } else {
            console.log(":incorrect");
        }

        if (questionIndex + 1 < questions.length) {
            setQuestionIndex(questionIndex + 1);
            console.log("questionindex", questionIndex);
        } else {
            navigate("/score");
        }
    };
    return (
        <div>
            { !questions
                ? <LoadingPage />
                :
                <div>
                    <h3>{ questions[questionIndex].question }</h3>
                    { answerOptions.map((answer, id) => {
                        return (
                            <button onClick={ handleChosenAnswer } key={ id }>{ answer }</button>
                        );
                    }) }
                    <br />
                    <br />
                    <Scorepage />
                </div>
            }

        </div>
    );
}


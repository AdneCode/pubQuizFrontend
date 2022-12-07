import { useDispatch, useSelector } from 'react-redux';
import { selectQuestions } from '../../store/Room/selectors';
import { useContext, useState } from 'react';
import { SocketContext } from '../../socket';
import { selectRoom } from '../../store/Room/selectors';
import { ProgressBar } from '../../components/ProgressBar';
import { useEffect } from 'react';

export const Quizpage = () => {
    const dispatch = useDispatch();
    const socket = useContext(SocketContext);
    const room = useSelector(selectRoom);
    console.log('room', room);

    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        setCompleted(100 - room.timer * 4);
    }, [room.timer]);

    const handleChosenAnswer = (choice) => {
        const data = { answer: choice, roomId: room.roomId };
        socket.emit('lockAnswer', data);
    };

    return (
        <div>
            <h1>Quizpage</h1>
            <h1>{room.currentQuestion.category}</h1>
            <h1>{room.currentQuestion.question}</h1>
            {room.currentQuestion.choices.map((choice, id) => {
                return (
                    <button onClick={() => handleChosenAnswer(choice)} key={id}>
                        {choice}
                    </button>
                );
            })}
            <br></br>
            <br></br>
            <ProgressBar bgColor="#6C4FE0" completed={completed} />
        </div>
    );
};

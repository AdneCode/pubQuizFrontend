import { useDispatch, useSelector } from 'react-redux';
import { selectQuestions } from '../../store/Room/selectors';
import { useContext } from 'react';
import { SocketContext } from '../../socket';
import { selectRoom } from '../../store/Room/selectors';

export const Quizpage = () => {
    const dispatch = useDispatch();
    const socket = useContext(SocketContext);
    const room = useSelector(selectRoom);
    console.log(room);
    return (
        <div>
            <h1>Quizpage</h1>
        </div>
    );
};

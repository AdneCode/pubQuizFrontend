import { useSelector, useDispatch } from 'react-redux';
import { selectRoom } from '../../store/Room/selectors';

export const Scorepage = () => {
    const room = useSelector(selectRoom);
    const previousAnswer = room.previousAnswer.answer;
    const playerArray = room?.players;
    const sortedPlayerArray = [...playerArray].sort(
        (a, b) => b.score - a.score,
    );
    console.log('playerArray', playerArray);
    console.log('room', room);
    return (
        <div>
            <h1>
                The answer to the previous question was
                {' ' + previousAnswer}
            </h1>
            <h1>Player Ranking:</h1>
            <ol>
                {sortedPlayerArray.map((player) => {
                    return (
                        <li>
                            {player.name} score: {player.score} Previous answer:
                            {previousAnswer === player.previousAnswer
                                ? `GREEN ${player.previousAnswer}`
                                : ` RED ${player.previousAnswer}`}
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

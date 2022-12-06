import { useContext } from 'react';
import { useSelector } from 'react-redux';
import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';
import runningGameBoy from './runningGameBoy.json';
import { SocketContext } from '../../socket';
import { selectRoom } from '../../store/Room/selectors';
export const LoadingPage = () => {
    const navigate = useNavigate();
    const socket = useContext(SocketContext);
    const room = useSelector(selectRoom);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: runningGameBoy,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const startGame = () => {
        socket.emit('startGame', room.roomId);
    };
    return (
        <div>
            <Lottie options={defaultOptions} />
            <button onClick={startGame}>Start quiz</button>
        </div>
    );
};

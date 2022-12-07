import { useContext, useEffect, useDispatch } from "react";
import { useSelector } from "react-redux";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import runningGameBoy from "./runningGameBoy.json";
import retro from "./retro.json";
import { SocketContext } from "../../socket";
import { selectRoom } from "../../store/Room/selectors";
import "./style.scss";

export const LoadingPage = () => {
  const navigate = useNavigate();
  const socket = useContext(SocketContext);
  const room = useSelector(selectRoom);
  console.log("room", room);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: retro,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const startGame = () => {
    socket.emit("startGame", room.roomId);
  };

  return (
    <div className="loading">
      <Lottie options={defaultOptions} />
      <div className="loading__wrapper">
        <h1>join with code: {room.roomId}</h1>
        <p>Current players:</p>
        <div className="loading__players">
          {room.players.map((player) => {
            return <p className="player">{player.name}</p>;
          })}
        </div>
        <button onClick={startGame} className="btn btn-success">
          Start quiz
        </button>
      </div>
    </div>
  );
};

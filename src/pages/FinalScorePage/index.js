import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectRoom } from "../../store/Room/selectors";
import { useSelector } from "react-redux";

export const FinalScorePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const room = useSelector(selectRoom);
  const playerArray = room?.players;
  const sortedPlayerArray = [...playerArray].sort((a, b) => b.score - a.score);
  console.log("playerArrayFinal", playerArray);

  const startNewGame = () => {
    // dispatch set scroes to 0
    navigate("/"); // to "/"? "or anotheo page"
  };

  const endGame = () => {
    navigate("/"); // change to bye page
  };

  return (
    <div>
      <h1>Final Scores:</h1>
      <ol>

        { sortedPlayerArray.map((player) => {
          return <li>{ player.name } scored: { player.score }</li>;
        }) }

      </ol>

      <button onClick={ startNewGame }>Start a new Game</button>
      <button onClick={ endGame }>Exit</button>
    </div>
  );
};

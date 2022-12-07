import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectRoom } from "../../store/Room/selectors";
import { useSelector } from "react-redux";
import "./styles.scss";
import WinnerAnimation from "../../components/Winner";

export const FinalScorePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const room = useSelector(selectRoom);
  const playerArray = room?.players;
  const sortedPlayerArray = [...playerArray].sort((a, b) => b.score - a.score);
  console.log("playerArrayFinal", playerArray);
  console.log("sorted", sortedPlayerArray);

  const startNewGame = () => {
    // dispatch set scroes to 0
    navigate("/"); // to "/"? "or anotheo page"
  };

  const endGame = () => {
    navigate("/"); // change to bye page
  };



  return (
    <div>
      <h1 className="finalScoreTitle">Final Scores</h1>
      <WinnerAnimation />
      <h1 className="congratulationsTitle">Congratulations: { sortedPlayerArray[0].name }!</h1>
      { sortedPlayerArray.map((player) => {
        return <p className="finalScore">{ player.name } scored: { player.score }</p>;
      }) }
      <div className="finalScoreButtonContainer">
        <button className="finalScoreButton" onClick={ startNewGame }>Start a new Game</button>
        <button className="finalScoreButton" onClick={ endGame }>Exit</button>
      </div>
    </div>
  );
};

import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectRoom } from "../../store/Room/selectors";
import { useSelector } from "react-redux";
import "./styles.scss";
import WinnerAnimation from "../../components/Winner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

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
    <Container className="container-center">
      <Row>
        <Col className="wrapper">
          <h1 className="finalScoreTitle">Final Scores</h1>
          <WinnerAnimation />
          <h1 className="congratulationsTitle">
            Congratulations: {sortedPlayerArray[0].name}!
          </h1>
          {sortedPlayerArray.map((player) => {
            return (
              <div className="finalScore">
                <img src={player.imageUrl} alt="anything" />
                <span>
                  {player.name} scored: {player.score}
                </span>
              </div>
            );
          })}
          <div className="finalScoreButtonContainer">
            <Button
              variant="success"
              className="finalScoreButton"
              onClick={startNewGame}
            >
              Start a new Game
            </Button>
            <Button
              className="finalScoreButton"
              variant="outline-danger"
              onClick={endGame}
            >
              Exit
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

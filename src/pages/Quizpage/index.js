import { useDispatch, useSelector } from "react-redux";
import { selectQuestions } from "../../store/Room/selectors";
import { useContext, useState } from "react";
import { SocketContext } from "../../socket";
import { selectRoom } from "../../store/Room/selectors";
import { ProgressBar } from "../../components/ProgressBar";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.scss";

export const Quizpage = () => {
    const dispatch = useDispatch();
    const socket = useContext(SocketContext);
    const room = useSelector(selectRoom);
    // console.log('room', room);

  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setCompleted(100 - room.timer * 4);
  }, [room.timer]);

  const handleChosenAnswer = (choice) => {
    const data = { answer: choice, roomId: room.roomId };
    socket.emit("lockAnswer", data);
  };

  return (
    <Container className="container-center quiz bg-patterns">
      <Row>
        <Col>
          <ProgressBar bgColor="rgb(224, 79, 79)" completed={completed} />
          <h1 className="category">{room.currentQuestion.category}</h1>
          <h2 className="question">{room.currentQuestion.question}</h2>
          <div className="choices">
            {room.currentQuestion.choices.map((choice, id) => {
              return (
                <button
                  onClick={() => handleChosenAnswer(choice)}
                  key={id}
                  className="btn-choices"
                >
                  {choice}
                </button>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

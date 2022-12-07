import { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getQuestions } from "../../store/Room/thunks";
import Form from "react-bootstrap/Form";
import { SocketContext } from "../../socket";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.scss";

export const Hostpage = () => {
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedNumQuestions, setSelectedNumQuestion] = useState("");
  const [hostName, setHostName] = useState("");

  const submitGameSettings = async (e) => {
    e.preventDefault();
    // dispatch(
    //   getQuestions(selectedNumQuestions, selectedCategory, selectedDifficulty)
    // );
    const response = await axios.get(
      `https://the-trivia-api.com/api/questions?categories=${selectedCategory}&limit=${selectedNumQuestions}&region=NL&difficulty=${selectedDifficulty}`
    );

    //for more guidance on socket.emit, see the homepage.
    //emit to create a new room
    const data = { name: hostName, questions: response.data };
    socket.emit("createRoom", data);
  };

  return (
    <Container className="container-center bg-patterns">
      <Row>
        <Col className="host">
          <h1>Create your game</h1>
          <Form onSubmit={submitGameSettings}>
            {/* Host name section (guys I don't know wtf the Form.Label thing is but Form.Input was not a thing, im so sorry)*/}
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={hostName}
              onChange={(e) => setHostName(e.target.value)}
              placeholder="Enter your name"
            ></Form.Control>
            {/* End host name section */}
            <Form.Label>Category</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>-</option>
              <option value="arts_and_literature">Arts & Literature</option>
              <option value="film_and_tv">Film & TV</option>
              <option value="food_and_drink">Food & Drink</option>
              <option value="general_knowledge">General Knowledge</option>
              <option value="geography">Geography</option>
              <option value="history">History</option>
              <option value="music">Music</option>
              <option value="science">Science</option>
              <option value="society_and_culture">Society & Culture</option>
              <option value="sport_and_leisure">Sport & Leisure</option>
            </Form.Select>
            <Form.Label>Difficulty</Form.Label>
            <Form.Select
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              aria-label="Default select example"
            >
              <option>-</option>
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </Form.Select>
            <Form.Label># Questions</Form.Label>
            <Form.Select
              onChange={(e) => setSelectedNumQuestion(e.target.value)}
              aria-label="Default select example"
            >
              <option>-</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </Form.Select>
            <button type="submit" className="btn btn-success">
              Create Game
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

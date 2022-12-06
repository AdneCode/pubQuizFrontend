import { useState } from "react";
import { useDispatch } from "react-redux";
import { getQuestions } from "../../store/Room/thunks";
import Form from 'react-bootstrap/Form';

export const Hostpage = () => {

  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedNumQuestions, setSelectedNumQuestion] = useState("");

  const submitGameSettings = (e) => {
    e.preventDefault();
    dispatch(getQuestions(selectedNumQuestions, selectedCategory, selectedDifficulty));
  };

  return (
    <div>
      <h1>Hostpage</h1>
      <Form onSubmit={ submitGameSettings }>
        <Form.Label>select category</Form.Label>
        <Form.Select aria-label="Default select example" onChange={ (e) => setSelectedCategory(e.target.value) }>
          <option>Open this select menu</option>
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
        <br />
        <Form.Label>select difficulty</Form.Label>
        <Form.Select onChange={ (e) => setSelectedDifficulty(e.target.value) } aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </Form.Select>
        <br />
        <Form.Label>select amount of questions</Form.Label>
        <Form.Select onChange={ (e) => setSelectedNumQuestion(e.target.value) } aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </Form.Select>
        <button type="submit">Start Game</button>
      </Form>
    </div>
  );
};

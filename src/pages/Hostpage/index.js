import { useState, useContext } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ImageSelector } from "../../components";
import { getQuestions } from "../../store/Room/thunks";
import Form from "react-bootstrap/Form";
import { SocketContext } from "../../socket";
import axios from "axios";

export const Hostpage = () => {
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedNumQuestions, setSelectedNumQuestion] = useState("");
  const [hostName, setHostName] = useState("");
  const [image, setImage] = useState("");
  console.log(image);

  const categoryValues = selectedCategory?.map((cat) => {
    return cat.value;
  });
  const categoryString = categoryValues.join();

  const submitGameSettings = async (e) => {
    e.preventDefault();
    // dispatch(
    //   getQuestions(selectedNumQuestions, selectedCategory, selectedDifficulty)
    // );
    const response = await axios.get(
      `https://the-trivia-api.com/api/questions?categories=${categoryString}&limit=${selectedNumQuestions}&region=NL&difficulty=${selectedDifficulty}`
    );

    //for more guidance on socket.emit, see the homepage.
    //emit to create a new room
    const data = { name: hostName, questions: response.data };
    socket.emit("createRoom", data);
  };

  const options = [
    { value: "film_and_tv", label: "Film & TV" },
    { value: "food_and_drink", label: "Food & Drink" },
    { value: "general_knowledge", label: "General Knowledge" },
    { value: "geography", label: "Geography" },
    { value: "history", label: "History" },
    { value: "science", label: "Science" },
    { value: "society_and_culture", label: "Society & Culture" },
    { value: "sport_and_leisure", label: "Sport & Leisure" },
  ];

  const handleSelect = (data) => {
    setSelectedCategory(data);
  };

  console.log("selected", selectedCategory);

  return (
    <div>
      <h1>Hostpage</h1>
      <Form onSubmit={submitGameSettings}>
        {/* Host name section (guys I don't know wtf the Form.Label thing is but Form.Input was not a thing, im so sorry)*/}
        <Form.Label>Name</Form.Label>
        <input
          value={hostName}
          onChange={(e) => setHostName(e.target.value)}
          placeholder="enter your name"
        />
        {/* End host name section */}
        <ImageSelector setImage={setImage} />
        <Form.Label>select category</Form.Label>
        <Select
          options={options}
          placeholder="Select category"
          value={selectedCategory}
          onChange={handleSelect}
          isMulti
        />
        <br />
        <Form.Label>select difficulty</Form.Label>
        <Form.Select
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          aria-label="Default select example"
        >
          <option>-</option>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </Form.Select>
        <br />
        <Form.Label>select amount of questions</Form.Label>
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
        <button type="submit">Create Game</button>
      </Form>
    </div>
  );
};

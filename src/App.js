import logo from "./logo.svg";

import { Route, Routes } from "react-router-dom";
import { Welcomepage, Homepage, Hostpage, Quizpage, Scorepage } from "./pages";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcomepage />} />
      <Route path="/start" element={<Homepage />} />
      <Route path="/host" element={<Hostpage />} />
      <Route path="/quiz" element={<Quizpage />} />
      <Route path="/score" element={<Scorepage />} />
    </Routes>
  );

}

export default App;

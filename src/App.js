
import { Route, Routes } from 'react-router-dom';
import { Welcomepage, Homepage, Hostpage, Quizpage, Scorepage, LoadingPage, QuestionPage } from "./pages";
import { AppNavbar } from './components';

import './App.scss';

//socket dependent:
import { useContext, useEffect } from 'react';
import { SocketContext } from './socket';

function App() {
    //extract socket from the socketContext (the one that is wrapped around App.js)
    const socket = useContext(SocketContext);
    useEffect(() => {
        //when the socket receives the "roomUpdate" signal, data is sent along. We can use that data like in the console.log
        socket.on('roomUpdate', (data) => {
            //for now just a console.log, we need to dispatch the data to the
            console.log(data);
        });
    }, []);
    return (
        <div>
            <AppNavbar />
            <Routes>
      <Route path="/" element={ <Welcomepage /> } />
      <Route path="/start" element={ <Homepage /> } />
      <Route path="/host" element={ <Hostpage /> } />
      <Route path="/quiz" element={ <Quizpage /> } />
      <Route path="/score" element={ <Scorepage /> } />
      <Route path="/loading" element={ <LoadingPage /> } />
      <Route path="/question" element={ <QuestionPage /> } />
    </Routes>
        </div>
    );
}

export default App;

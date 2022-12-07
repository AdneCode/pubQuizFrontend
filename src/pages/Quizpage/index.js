import { useDispatch, useSelector } from 'react-redux';
import { selectQuestions } from '../../store/Room/selectors';
import { useContext, useState } from 'react';
import { SocketContext } from '../../socket';
import { selectRoom } from '../../store/Room/selectors';

export const Quizpage = () => {
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);
  const room = useSelector(selectRoom);
  console.log(room);

  const handleChosenAnswer = (choice) => {
    socket.emit("lockAnswer", choice);
  };

  return (
    <div>
      <h1>Quizpage</h1>
      <h1>{ room.currentQuestion.category }</h1>
      { room.currentQuestion.choices.map((choice, id) => {
        return (
          <button onClick={ handleChosenAnswer(choice) } key={ id }>{ choice }</button>
        );
      }) }
    </div>
  );
};

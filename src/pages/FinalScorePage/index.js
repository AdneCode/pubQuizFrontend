import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const FinalScorePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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

            <button onClick={ startNewGame }>Start a new Game</button>
            <button onClick={ endGame }>Exit</button>
        </div>
    );
}


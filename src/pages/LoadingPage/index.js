import React from 'react';
import Lottie from "react-lottie";
import { useNavigate } from 'react-router-dom';
import runningGameBoy from "./runningGameBoy.json";

export const LoadingPage = () => {

    const navigate = useNavigate();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: runningGameBoy,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const startGame = () => {
        navigate("/question");
    };
    return (
        <div>
            <Lottie options={ defaultOptions } />
            <button onClick={ startGame }>Start quiz</button>
        </div>
    );
}


import React from 'react';

import Lottie from 'react-lottie';

import winner from './winner.json';
function WinnerAnimation() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: winner,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return (
        <Lottie options={ defaultOptions } style={ { width: "40%" } } />
    );
}

export default WinnerAnimation;
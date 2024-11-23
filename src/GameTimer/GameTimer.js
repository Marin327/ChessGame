// GameTimer.js
import React, { useEffect, useState } from 'react';
import '../App.css';


const GameTimer = ({ isPlayerTurn }) => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        let timer;
        if (isPlayerTurn) {
            timer = setInterval(() => setTime((prev) => prev + 1), 1000);
        } else {
            setTime(0);
        }
        return () => clearInterval(timer);
    }, [isPlayerTurn]);

    return (
        <div className="game-timer">
            <h5>Time: {Math.floor(time / 60)}:{time % 60}</h5>
        </div>
    );
};

export default GameTimer;

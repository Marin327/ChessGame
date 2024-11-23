// GameStatus.js
import React from 'react';
import '../App.css';


const GameStatus = ({ status }) => {
    return (
        <div className="game-status">
            <h4>Status: {status}</h4>
        </div>
    );
};

export default GameStatus;
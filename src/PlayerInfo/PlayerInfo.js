// PlayerInfo.js
import React from 'react';
import '../App.css';

const PlayerInfo = ({ player }) => {
    return (
        <div className="player-info">
            <h3>Current Player: {player === 'w' ? 'White' : 'Black'}</h3>
        </div>
    );
};

export default PlayerInfo;
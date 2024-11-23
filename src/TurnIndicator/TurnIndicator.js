// TurnIndicator.js
import React from 'react';
import '../App.css';


const TurnIndicator = ({ turn }) => {
    return (
        <div className="turn-indicator">
            <h4>It's {turn === 'w' ? 'White' : 'Black'}'s turn</h4>
        </div>
    );
};

export default TurnIndicator;
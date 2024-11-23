// MoveHistory.js
import React from 'react';
import '../App.css';


const MoveHistory = ({ moves }) => {
    return (
        <div className="move-history">
            <h4>Move History:</h4>
            <ul>
                {moves.map((move, index) => (
                    <li key={index}>{move}</li>
                ))}
            </ul>
        </div>
    );
};

export default MoveHistory;

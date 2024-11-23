// CapturedPieces.js
import React from 'react';
import '../App.css';

const CapturedPieces = ({ capturedPieces }) => {
    return (
        <div className="captured-pieces">
            <h4>Captured Pieces:</h4>
            <div>
                <h5>White: {capturedPieces.white.join(', ')}</h5>
                <h5>Black: {capturedPieces.black.join(', ')}</h5>
            </div>
        </div>
    );
};

export default CapturedPieces;

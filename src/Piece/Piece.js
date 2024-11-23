import React from 'react';
import '../App.css';

const Piece = ({ piece }) => {
    if (piece === '.') return null;  // No piece on the square
    return <span className={`piece ${piece.toLowerCase()}`}>{piece}</span>;
};

export default Piece;
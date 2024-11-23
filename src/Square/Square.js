import React from 'react';
import '../App.css';

const Square = ({ color, children }) => {
    return <div className={`square ${color}`}>{children}</div>;
};

export default Square;
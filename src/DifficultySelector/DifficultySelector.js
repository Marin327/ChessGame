// DifficultySelector.js
import React from 'react';
import '../App.css';


const DifficultySelector = ({ onDifficultyChange }) => {
    return (
        <div className="difficulty-selector">
            <h4>Select AI Difficulty:</h4>
            <select onChange={(e) => onDifficultyChange(e.target.value)}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>
    );
};

export default DifficultySelector;

// UndoButton.js
import React from 'react';

const UndoButton = ({ onUndo }) => {
    return (
        <button onClick={onUndo}>Undo Move</button>
    );
};

export default UndoButton;
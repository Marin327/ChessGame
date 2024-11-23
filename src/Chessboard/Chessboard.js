import React, { useState } from 'react';
import '../App.css'; // Стилове за Chessboard
import Piece from '../Piece/Piece'; // Компонент за фигури
import Square from '../Square/Square'; // Компонент за квадратчета

const Chessboard = () => {
    const [board, setBoard] = useState([
        ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.'],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
    ]);

    const renderSquare = (row, col) => {
        const squareColor = (row + col) % 2 === 0 ? 'white' : 'black';
        const piece = board[row][col];
        return (
            <Square key={`${row}-${col}`} color={squareColor}>
                <Piece piece={piece} />
            </Square>
        );
    };

    return (
        <div className="chessboard">
            {Array.from({ length: 8 }).map((_, row) => (
                <div className="row" key={row}>
                    {Array.from({ length: 8 }).map((_, col) => renderSquare(row, col))}
                </div>
            ))}
        </div>
    );
};

export default Chessboard;

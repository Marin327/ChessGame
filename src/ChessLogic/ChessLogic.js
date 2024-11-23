import { Chess } from 'chess.js';

const game = new Chess();

export const getGameState = () => game.fen(); // Get the current board state in FEN format
export const makeMove = (move) => {
    const result = game.uci(move); // Make a move
    return result ? game.fen() : null;
};
export const resetGame = () => game.reset(); // Reset the game
export const getValidMoves = (square) => game.ugly_moves({ square }); // Get valid moves for a square

import React, { useState } from 'react';
import './App.css';
import CapturedPieces from './CapturedPieces/CapturedPieces';
import Chessboard from './Chessboard/Chessboard';
import DifficultySelector from './DifficultySelector/DifficultySelector';
import GameStatus from './GameStatus/GameStatus';
import GameTimer from './GameTimer/GameTimer';
import MoveHistory from './MoveHistory/MoveHistory';
import PlayerInfo from './PlayerInfo/PlayerInfo';
import ResetButton from './ResetButton/ResetButton';
import SoundToggle from './SoundToggle/SoundToggle';
import TurnIndicator from './TurnIndicator/TurnIndicator';
import UndoButton from './UndoButton/UndoButton';

const App = () => {
  const [gameStatus, setGameStatus] = useState('In Progress');
  const [moves, setMoves] = useState([]);
  const [capturedPieces, setCapturedPieces] = useState({ white: [], black: [] });
  const [turn, setTurn] = useState('w'); // 'w' or 'b'
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  // Reset the game state to the initial conditions
  const onReset = () => {
    setGameStatus('In Progress');
    setMoves([]);
    setCapturedPieces({ white: [], black: [] });
    setTurn('w');
    setIsPlayerTurn(true);
  };

  // Undo the last move logic
  const onUndo = () => {
    if (moves.length > 0) {
      const lastMove = moves[moves.length - 1];
      const newMoves = moves.slice(0, -1);
      setMoves(newMoves);

      // Switch player after undo
      setTurn(turn === 'w' ? 'b' : 'w'); // Switch the turn

      // Handle captured pieces removal if necessary
      if (lastMove.capturedPiece) {
        const updatedCapturedPieces = { ...capturedPieces };
        const color = lastMove.capturedPiece.color;
        updatedCapturedPieces[color] = updatedCapturedPieces[color].filter(
          (piece) => piece !== lastMove.capturedPiece
        );
        setCapturedPieces(updatedCapturedPieces);
      }
      setIsPlayerTurn(!isPlayerTurn);
    }
  };

  // Handle difficulty change, placeholder
  const onDifficultyChange = (difficulty) => {
    console.log('Difficulty changed to:', difficulty);
  };

  return (
    <div className="App">
      <h1>Chess Game</h1>
      <PlayerInfo player={turn} /> {/* Use turn state for current player */}
      <GameStatus status={gameStatus} />
      <TurnIndicator turn={turn} />
      <GameTimer isPlayerTurn={isPlayerTurn} />
      <CapturedPieces capturedPieces={capturedPieces} />
      <MoveHistory moves={moves} />
      <Chessboard
        moves={moves}
        setMoves={setMoves}
        setCapturedPieces={setCapturedPieces}
        setTurn={setTurn}
        setIsPlayerTurn={setIsPlayerTurn}
      />
      <ResetButton onReset={onReset} />
      <UndoButton onUndo={onUndo} /> {/* Ensure this is correctly wired */}
      <SoundToggle />
      <DifficultySelector onDifficultyChange={onDifficultyChange} />
    </div>
  );
};

export default App;

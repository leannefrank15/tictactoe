import React, { useState } from "react";
import Board from "./components/Board"
import "./styles/root.scss"
import { calculateWinner } from "./helpers"

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(board);

  const message = winner ? `winner is ${winner}` : `next player is ${isXNext ? 'X' : 'O'}`;

  const handleSquareClick = (position) => {

    if (board[position] != null || winner != null){
      return;
    }
    
    setBoard( (prev) => {
      return prev.map((square, pos) => {
        if (pos === position){
          return isXNext ? 'X' : 'O'
        }
        return square;
       
      })

    })

    setIsXNext( (prev) => !prev);

  }
  return (
    <div className='app'>
      <h1>TIC <span className='header'>TAC</span> TOE</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
      
    </div>
  )
}

export default App

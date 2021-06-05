import React, { useState } from "react";
import Board from "./components/Board"
import "./styles/root.scss"
import { calculateWinner } from "./helpers"

const App = () => {
  const [history, setHistory] = useState([{board : Array(9).fill(null), isXNext : true}]);
  
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  console.log(history);

  let msg;
  const winner = calculateWinner(current.board);
  

if (winner){
   msg= `winner is ${winner}!!!`;
}
else if(winner == null){
  msg= `next player is ${current.isXNext ? 'X': 'O'}`;
}


  const handleSquareClick = (position) => {

    if (current.board[position] != null || winner != null){
      return;
    }
  
    setHistory( (prev) => {

      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position){
          return last.isXNext ? 'X' : 'O'
        }
        return square;
      })

      return prev.concat({ board : newBoard, isXNext : !last.isXNext});

    })

    setCurrentMove(prev => prev + 1);

  }

  
  return (
    <div className='app'>
      <h1>TIC <span className='header'>TAC</span> TOE</h1>
      <h2 className='header'>{msg}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      
    </div>
  )
}

export default App

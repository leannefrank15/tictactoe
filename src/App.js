import React from "react";
import Board from "./components/Board"
import "./styles/root.scss"

export default () => (
  <div className='app'>
    <h1 className='headerfull'>TIC <span className='header'>TAC</span> TOE!</h1>
    <Board />
  </div>
);

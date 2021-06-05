import React from 'react'

const History = ({history, moveTo, currentMove}) => {
  return (
    <ul>
      {
      history.map((_, move) => {
        return (
          <li key={move}>
            <button 
            style ={{
              fontWeight : move === currentMove ? 'bold' : 'normal',
              color: move === currentMove ? 'seagreen' : 'black',
              fontSize: move=== currentMove ? '18px' : '16px'
            }}
            type='button' onClick = {() =>{
              moveTo(move);
            }}>
              {move === 0 ? 'go to game start' : `go to move #${move}`}</button>
          </li>
        )
      })}

    </ul>
  );
};

export default History

import React from 'react'

const Square = ({value, onClick, isWinningSquare}) => {
  return (
    <button 
      type='button'
      className='square'
      onClick={onClick}
      style={{
        backgroundColor : isWinningSquare ? 'lightgreen' : 'mintcream'
      }}
    >
     {value}
    </button>
  )
}
export default Square

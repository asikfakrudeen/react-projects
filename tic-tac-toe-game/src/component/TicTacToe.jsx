import React from 'react'
import './tictactoe.css'
// import circleIcon from './assets/circle.svg'
// import crossIcon from './assets/cross.svg'

const TicTacToe = () => {
  return (
    <div className='container'>
        <h1 className='title'>Tic Toe <span>Tac</span></h1>
        <div className='board'>
          <div className='row1'>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
          </div>
            <div className='row2'>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
          </div>
            <div className='row3'>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
          </div>
        </div>
        <button className='reset'>Reset</button>
    </div>
  )
}

export default TicTacToe;
import { useState } from 'react';
import Board from './components/Board.js'
import Game from './components/Game.js'
import Square from  './components/Square.js'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1 className='title'>"Tic-Tac-Toe"</h1>
      <p className='subtitle'>Easy game. get three in a row and you win. good luck. </p>
      <Game></Game>
    </div>
  );
}

export default App;

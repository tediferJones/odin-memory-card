import { useState } from 'react';
import ScoreBoard from './components/scoreBoard.js';
import MemoryCard from './components/memoryCard.js'
import './App.css';

function App() {
  // Our theme is gunna be Metroid Zero Mission Items

  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const [memoryCard, setMemoryCard] = useState({
    // The name of an option must directly correlate to it's image file name
    options: ['Morph Ball', 'Ball Bomb'],
    used: [],
  });

  function selectHandler(e) {
    console.log(e.target.getAttribute('value'));
  }

  // To shuffle an array, use Fisher-Yates algorithm, or Durstenfeld Shuffle algorithm

  return (
    <div>
      <h1>HELLO WORLD</h1>
      <ScoreBoard currentScore={currentScore} highScore={highScore}/>
      <MemoryCard memoryCard={memoryCard} selectHandler={selectHandler}/>
    </div>
  );
}

export default App;

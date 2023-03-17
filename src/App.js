import { useState } from 'react';
import './App.css';

function App() {
  // Our theme is gunna be Metroid Zero Mission Items
  // We need at least two components
  // one for our score, and high score
  // second, to hold our 'items', should randomize the order of these objects after each selection

  const [score, setScore] = useState({
    currentScore: 0,
    highScore: 0,
  });

  const [memoryCard, setMemoryCard] = useState({
    options: [], // some array of choices
    used: [], // array of choices that have already been selected
  });

  // To shuffle an array, use Fisher-Yates algorithm, or Durstenfeld Shuffle algorithm

  return (
    <h1>HELLO WORLD</h1>
  );
}

export default App;

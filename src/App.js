import { useState } from 'react';
import ScoreBoard from './components/scoreBoard.js';
import MemoryCard from './components/memoryCard.js'
import './App.css';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(localStorage.getItem('highScore') || 0);
  const [selected, setSelected] = useState([]);

  const options = [
    'Ball Bomb', 'Charge Beam', 'Gravity Suit', 'High Jump Boots', 'Ice Beam',
    'Ledge Grab', 'Long Beam', 'Morph Ball', 'Plasma Beam', 'Screw Attack',
    'Space Jump', 'Speed Booster', 'Varia Suit', 'Wave Beam',
  ];

  function selectHandler(e) {
    if (selected.includes(e.target.getAttribute('value'))) {
      // if the value already exists in selected var, you lose, reset the game
      if (currentScore > highScore) {
        setHighScore(currentScore);
        localStorage.setItem('highScore', currentScore);
        // console.log(`LOCALSTORAGE = ${localStorage.getItem('highScore')}`)
      }
      setCurrentScore(0);
      setSelected([]);
    } else {
      // if the value isn't already present in selected var, the game continues
      setCurrentScore(currentScore + 1);
      setSelected(selected.concat(e.target.getAttribute('value')));
    }
  }

  function shuffleArray(arr) {
    // uses the Fisher-Yates Algorithm to maximize randomness
    let result = JSON.parse(JSON.stringify(arr));
    let i = arr.length - 1;
    while (i > 0) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      [result[i], result[randomIndex]] = [result[randomIndex], result[i]];
      i--;
    }
    return result;
  }

  return (
    <div>
      <h1>HELLO WORLD</h1>
      <ScoreBoard
      currentScore={currentScore}
      highScore={highScore}
      />
      <MemoryCard
      options={shuffleArray(options)}
      selectHandler={selectHandler}
      />
    </div>
  );
}

// TO-DO LIST
//    - [ DONE ] Use localStorage to save highScore
//    - Styling, go with a dark theme, our icons tend to be pretty bright
//    - Use a flexible grid like in this project: https://github.com/tediferJones/odin-library

export default App;

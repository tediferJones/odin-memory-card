import { useState } from 'react';
import ScoreBoard from './components/scoreBoard.js';
import MemoryCard from './components/memoryCard.js';
import GameOver from './components/gameOver.js';
import './App.css';

function App() {
  const [highScore, setHighScore] = useState(localStorage.getItem('highScore') || 0);
  const [selected, setSelected] = useState([]);

  const currentScore = selected.length;
  const options = [
    'Ball Bomb', 'Charge Beam', 'Gravity Suit', 'High Jump Boots', 'Ice Beam',
    'Ledge Grab', 'Long Beam', 'Morph Ball', 'Plasma Beam', 'Screw Attack',
    'Space Jump', 'Speed Booster', 'Varia Suit', 'Wave Beam',
  ];

  function selectHandler(e) {
    // if selected includes the value, end the game, else add the value to selected Arr and continue the game
    if (selected.includes(e.target.getAttribute('value'))) {
      toggleModal();
    } else {
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

  function toggleModal() {
    document.getElementsByClassName('modal')[0].classList.toggle('hidden');
  }

  function resetHandler() {
    if (currentScore > highScore) {
      setHighScore(currentScore);
      localStorage.setItem('highScore', currentScore);
    }
    toggleModal();
    setSelected([]);
  }

  return (
    <div>
      <ScoreBoard
      currentScore={currentScore}
      highScore={highScore}
      />
      <MemoryCard
      options={shuffleArray(options)}
      selectHandler={selectHandler}
      />
      <GameOver 
      toggleModal={resetHandler}
      currentScore={currentScore}
      highScore={highScore}
      />
      <a className='footer'
      href='https://github.com/tediferJones/'
      >Check out more of my projects
      </a>
    </div>
  );
}

// New Feature Ideas
//    - Leveling system, show 5 images for level 1, 10 images for level 2, etc...

// TO-DO LIST
//    - [ DONE ] Use localStorage to save highScore
//    - [ DONE ] Add some kind of indicator for when the game resets, like a pop-up
//    - [ DONE ] Styling, go with a dark theme, our icons tend to be pretty bright
//    - [ DONE ] Add the word 'icon' to image alt tags, so it doesnt display the same exact text twice when images fail to load
//    - [ DONE ] Remove score var, replace with selected.length

export default App;

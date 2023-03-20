import { useState } from 'react';
import ScoreBoard from './components/scoreBoard.js';
import MemoryCard from './components/memoryCard.js'
import './App.css';

function App() {
  // CURRENTSCORE IS ALWAYS EQUAL TO SELECTED.LENGTH, this var is useless
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
      toggleModal();
      if (currentScore > highScore) {
        setHighScore(currentScore);
        localStorage.setItem('highScore', currentScore);
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

  function toggleModal() {
    document.getElementsByClassName('modal')[0].classList.toggle('hidden');
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
      <div className='footer'>
        <a href='https://github.com/tediferJones/'
        >Check out more of my projects
        </a>
      </div>
      {/* MAKE THE BELOW INTO ITS OWN COMPONENT */}
      <div className='modal hidden'>
        <button onClick={toggleModal}>BACK TO GAME</button>
      </div>
    </div>
  );
}

// TO-DO LIST
//    - [ DONE ] Use localStorage to save highScore
//    - Add some kind of indicator for when the game resets, like a pop-up
//    - [ DONE ] Styling, go with a dark theme, our icons tend to be pretty bright
//    - Add the word 'icon' to image alt tags, so it doesnt display the same exact text twice when images fail to load
//    - Remove score var, replace with selected.length

export default App;

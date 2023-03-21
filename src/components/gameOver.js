function gameOver(props) {
  const newHighScore = (
    <div className='score'>
      <h2>NEW HIGH SCORE</h2>
      <h2>Your Score: {props.currentScore}</h2>
    </div>
  )

  const oldHighScore = (
    <div className='score'>
      <h2>Your Score: {props.currentScore}</h2>
      <h2>High Score: {props.highScore}</h2>
    </div>
  )

  return (
    <div className='modal hidden'>
      <h1 className='gameOver'>GAME OVER</h1>
      {props.currentScore > props.highScore ? newHighScore : oldHighScore}
      <button className='resetButton' onClick={props.toggleModal}>RESET</button>
    </div>
  )
}

export default gameOver;

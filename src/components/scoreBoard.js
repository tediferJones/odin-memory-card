
function ScoreBoard(props) {
  // console.log(props)

  return (
    <div className='scoreBoard'>
      <h4>Score: {props.currentScore}</h4>
      <h4>High Score: {props.highScore}</h4>
    </div>
  );
};

export default ScoreBoard;

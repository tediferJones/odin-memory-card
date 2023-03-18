
function ScoreBoard(props) {
  // console.log(props)

  return (
    <div>
      <h2>Score Board</h2>
      <div>Score: {props.currentScore}</div>
      <div>High Score: {props.highScore}</div>
    </div>
  );
};

export default ScoreBoard;

import { v4 as uuidv4 } from 'uuid';

function MemoryCard(props) {
  const optionCards = props.options.map(option => {
    return (
      <div className='optionCard'
      onClick={props.selectHandler} 
      key={uuidv4()} 
      value={option}>
        <img src={require(`../assets/images/${option}.png`)}
        alt={`${option} Icon`}
        value={option}
        />
        {option}
      </div>
    )
  })

  return (
    <div>
      <h1 className='title'>MemoryCard</h1>
      <div className='gridContainer'>{optionCards}</div>
    </div>
  )
}

export default MemoryCard;


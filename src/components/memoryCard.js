import { v4 as uuidv4 } from 'uuid';

function MemoryCard(props) {
  // console.log(props)

  const optionCards = props.memoryCard.options.map(option => {
    return (
      <div
      onClick={props.selectHandler} 
      key={uuidv4()} 
      value={option}>
        <img src={require(`../assets/images/${option}.png`)} alt={option}/>
        {option}
      </div>
    )
  })

  return (
    <div>
      <h1>MemoryCard</h1>
      <div>{optionCards}</div>
    </div>
  )
}

export default MemoryCard;


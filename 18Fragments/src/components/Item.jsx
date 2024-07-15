import styels from './Item.module.css'

function Item(props){
  console.log(styels);
  return(
    <li className={`${styels['kg-item']} list-group-item`}>
      <span className={`${styels['kg-span']}`}>{props.foodItem}</span>
    </li>
  )
}

export default Item
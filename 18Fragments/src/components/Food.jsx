import Item from "./Item"

function Food({items}){
  return(
    <>
      <ul className="list-group">
          {items.map(item => <Item key={item} foodItem={item} />)}
        </ul>
    </>
  )
}

export default Food
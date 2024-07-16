import TodoItem from "./TodoItem"
import styles from "./TodoItems.module.css"

function TodoItems({todoItems}){
  return(
    <>
      <div className={`${styles['items-container']}`}>
        {todoItems.map(items => <TodoItem todoName={items.name} todoDate={items.dueDate} />)}
        <br />
        </div>
    </>
  )
}

export default TodoItems
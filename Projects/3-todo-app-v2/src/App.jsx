import AddTodo from "./components/AddTodo.jsx";
import AppName from "./components/AppName.jsx";
import "./App.css";
import TodoItems from "./components/TodoItems.jsx";


function App() {

  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/23",
    },
    {
      name: "Go To College",
      dueDate: "4/10/23",
    },
    {
      name: "Like this",
      dueDate: "Just",
    },
  ];

  return (
    <>
      <div className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems}/>
      </div>
    </>
  );
}

export default App;

import AddTodo from "./components/AddTodo.jsx";
import AppName from "./components/AppName.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="todo-container">
         <AppName />
        <div className="items-container">
        <AddTodo
        label1={<input type="text" placeholder="Enter your todo here" />}
        label2={<input type="date" />}
        button={
          <button type="button" class="btn btn-success kg-button">
            Add
          </button>
        }
      />
      <br />
      <AddTodo
        label1={"Buy Milk"}
        label2={"4/10/23"}
        button={
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        }
      />
      <br />
      <AddTodo
        label1={"Go To College"}
        label2={"4/10/23"}
        button={
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        }
      />
        </div>
      </div>
    </>
  );
}

export default App;

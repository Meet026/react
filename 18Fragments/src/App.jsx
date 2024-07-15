import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Food from "./components/Food";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItem = ["Daal", "Rice", "Roti",  "Salad"]
  return (
      <> 
        <h1>Healthy Food</h1>
        <ErrorMessage items={foodItem}/>
        <Food items={foodItem}/>
      </>
  );
}

export default App;

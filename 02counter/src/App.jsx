import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)


  // let counter = 15

  const addvalue = () => {
    if(counter >= 0){
      document.querySelector(".demo").innerHTML = ""
    }
    counter = counter + 1
    setCounter(counter)
    console.log("Clicked", counter)
  }

  const removevalue = () => {
     if(counter !== 0){
      counter = counter - 1
      setCounter(counter)
     }else{
      document.querySelector(".demo").innerHTML = "You  can not assign negative value to counter"
     }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addvalue}>add Valur</button>
      <br />
      <button onClick={removevalue}>remove value</button>

      <p class='demo' style={{ backgroundColor: 'black', color: 'white' }}></p>
    </>
  )
}

export default App

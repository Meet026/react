import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  const myObj = {
    username: "Meet",
    age: 19
  }

  return (
    <>
     <h1 className='bg-green-300 text-black mb-10'>Tailwind test</h1>

    <Card channel='Meet pokal'/>
     

    </>
  )
}

export default App

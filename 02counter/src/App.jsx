import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 0
  let [counter, setCounter] = useState(10)

  const addValue = () =>{
    console.log("clicked adder")
    // counter = counter + 1
    setCounter(counter + 1)
  }
  
  const remValue = () =>{
    console.log("clicked remover")
    // counter = counter - 1
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur counter</h1>
      <h2>counter value: {counter}</h2>

      <button
        onClick = {addValue}
      >Add value</button>
      <br />
      <button
        onClick={remValue}
      >Remove value</button>

      <p>value: {counter}</p>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Clock from './components/clock'
import Todo from './components/todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="container" className="App">
      <div id="left">
        <Clock id="clock"/>
      </div>
      <div id="right">
        <Todo />
      </div>
    </div>
  )
}

export default App

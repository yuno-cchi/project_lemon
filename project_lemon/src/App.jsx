import { useState } from 'react'
import './App.css'
import Clock from './components/clock'
import Todo from './components/todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Clock />
      <Todo />
    </div>
  )
}

export default App

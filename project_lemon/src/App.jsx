import { useState } from 'react'
import './App.css'
import Clock from './components/clock'
import Todo from './components/todo'
import Greeting from './components/greeting'

function App() {
  return (
    <div id="container" className="App">
      <div id="left">
        <Clock id="clock"/>
        <Greeting />
      </div>
      <div id="right">
        <Todo />
      </div>
    </div>
  )
}

export default App

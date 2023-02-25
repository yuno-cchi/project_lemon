import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://www.youtube.com/shorts/Nuk08ggByKs" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.youtube.com/watch?v=DUVJxgZX0UQ" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Project Lemon</h1>
      <h2>Deez Nuts™</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {count} victims<br />Click to add another
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        My name Jeff
      </p>
    </div>
  )
}

export default App

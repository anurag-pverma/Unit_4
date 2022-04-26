import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Forms } from './Components/Forms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Forms/>
    </div>
  )
}

export default App

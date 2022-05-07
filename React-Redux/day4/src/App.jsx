import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Todo } from './Components/Todo/Todo'
import { Counter } from './Components/Counter/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Counter/>
      <hr />
      <Todo/>


    </div>
  )
}

export default App

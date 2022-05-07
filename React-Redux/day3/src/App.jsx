import { useState } from 'react'
import './App.css'
import { Todo } from './Components/Todo/Todo'
import { TodoInput } from './Components/Todo/TodoInput'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>hello react
      
      <TodoInput/>
      <Todo/>

      </h1>
    </div>
  )
}

export default App

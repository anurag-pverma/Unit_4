import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Button from './Components/Button'
import Card from './Components/Card'
import EmployeeDetails from './Components/EmpolyeeData'
import { Todo } from './Components/Todo'
import style from './Components/Card.module.css'

function App() {
  

  return (
    <div className="App">
     

     <Button/>
     <Card/>
     <EmployeeDetails/>
     <Todo/>
    </div>
  )
}

export default App

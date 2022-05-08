import React from 'react'
import { useDispatch } from 'react-redux'
import { deletetodo } from '../redux/action'

function Todo({elem , id}) {
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        deletetodo(dispatch , id)
    }
  return (
    <div>
        <h3>{elem.title}</h3>
        

    </div>
  )
}

export default Todo
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { deletetodo, gettodo, showdata } from '../redux/action'
import Todo from './Todo'
import TodoInput from './TodoInput'

function Todos() {
    let todos = useSelector((state)=>state.todos)
    let singledata = useSelector((state)=>state.singletodo)
    let navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        gettodo(dispatch)
    } , [])
    const handleClick = (elem , id)=>{
        dispatch(showdata(elem))
        navigate(`/todos/{id}`)
    }
    
    const handleDelete = (id) => {
        deletetodo(dispatch , id)
    }
  return (
    <div>
        <h1 style={{color : "blue"}}>Todos</h1>
        <TodoInput/>
        <Outlet/>
        {todos.map((elem)=>{
            return (
                <>
                
                <div onClick={()=>handleClick(elem , elem.id)} key={elem.id}><Todo elem = {elem} id = {elem.id}/></div>
                <button onClick={()=>handleDelete(elem.id)}>DELETE</button>
                </>
            )
        })}
    
    </div>
  )
}

export default Todos
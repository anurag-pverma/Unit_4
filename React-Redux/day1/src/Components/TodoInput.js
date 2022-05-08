import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { posttodo } from '../redux/action';
import styled from 'styled-components'

const Div = styled.input`
    height : 20px ;
    width : 200px;
    border : 2px solid red;
    border-radius : 10px;
`
function TodoInput() {
    const [task , settask] = useState("")
    const dispatch = useDispatch()
    const handleChange = (e)=>{
        settask(e)
    }
    const handleAdd = ()=>{
        const payload = {
            id : uuidv4() , 
            title : task ,
            status : false
        }
        posttodo(dispatch , payload)
    }
  return (
    <div>
        <div><Div type="text" onChange={(e)=>handleChange(e.target.value)}/></div>
        <br />
        <div><button onClick={handleAdd}>Add todo</button></div>
    </div>
  )
}

export default TodoInput
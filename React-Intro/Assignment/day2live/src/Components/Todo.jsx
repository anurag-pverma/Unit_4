


import React,{useState} from "react"

export const Todo = () =>{
    const [task,setTask] = useState("")
    const [todo,setTodo] = useState([])
    const handleChange = (e)=>{
        setTask(e.target.value)
    }
    const handleClick = ()=>{
        setTodo([...todo,task])
    }
    console.log(todo,"todo")
    return (
        <>
        <h1>Todo</h1>
        <input type={"text"} value = {task} placeholder = "enter todo name" onChange={handleChange}/>
        <button onClick={()=> handleClick()}>Add</button>
        {todo.map((item)=>{
            return <h1>{item}</h1>
        })}
        </>
    )
}

// synthetic event

// todo.push("task1")
// [...todo,'task1']


// higherorder function
// spread operator
// es6
// 
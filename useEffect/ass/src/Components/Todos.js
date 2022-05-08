import React, {useEffect, useState} from "react";
import { TodoAdd } from "./AddTodo";
import { Todo } from "./Todo";
import styles from "./todo.module.css"
export const Todos=()=>{
    const [todo,setTodo]=useState([])
    
    const [page,setPage]=useState(1)


  


    const mount=(add)=>{
        //POST METHOD
        setTodo([...todo,add])
    };

    const onDelete = (id) =>{
        const updatedTodo=todo.filter((item)=>item.id !== id);
        setTodo(updatedTodo);
    }

    const onEdit = (data) =>{
        const updatedTodo=todo.map((item)=>{
            if(item.id===data.id) return data
            
            else return item
        })
        setTodo(updatedTodo);
    }   

    //get method...........
    const getData=async ()=>{
        try {
            let res = await fetch(`http://localhost:8080/posts?_page=${page}`)
            let data= await res.json()
            
            
            setTodo(data)
        } catch (error) {
            console.log(error)
        }
        
    }
    
   

    useEffect (()=>{
        getData()
        
    },[page])

    return (
        <div className={styles.btn}>
            <TodoAdd mount={mount}/>
            {todo.map((todo)=>(
            <Todo key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit}/>))}
            <p>Page :{page}</p>
            
            <button onClick={()=>{
                if(page>1){
                    setPage(page-1)
                }
            }}>Prev</button>
            <button onClick={()=>setPage(page+1)}>Next</button>
        </div>

    )
}
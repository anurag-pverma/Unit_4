import React, { useState } from "react";
import styles from "./todo.module.css"

export const TodoAdd=({mount})=>{
    
    const [add,setAdd]=useState("")

    const postTodo= async (value)=>{
        let res =await  fetch("http://localhost:8080/posts",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({
                value,
                completed:false,
            }),
        });
        let data= await res.json()
        mount(data);
        
    }

    
    const change=(e)=>{
        setAdd(e.target.value)
    }
    return (
        <div>
            <input type="text" value={add} onChange={change}/>
            <button className={styles.up} onClick={()=>{
                if(add){
                    postTodo(add)
                    setAdd("") 
                }
                
            }}>Save</button>
        </div>
    )
}
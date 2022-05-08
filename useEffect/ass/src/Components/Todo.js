import React, { useState } from "react";
import styles from "./todo.module.css"


export const Todo=({todo, onDelete , onEdit})=>{
    const [edit,setEdit]=useState(false)
    const [value,setValue]=useState(todo.value)

    const deleteData=async ()=>{
        await fetch(`http://localhost:8080/posts/${todo.id}`,{
            method:"DELETE",
            headers:{"content-type":"application/json"}

        })
        onDelete(todo.id)
    }

    const editData=async ()=>{
       let res= await fetch(`http://localhost:8080/posts/${todo.id}`,{
            method:"PATCH",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({
                value,
                completed:true,
            }),
        })
        let data=await res.json()
        onEdit(data)
    }
    
    return (
        <div  className={styles.todo}>
        {edit ? (
              <div  className={styles.data}>
              <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
              <button className={styles.up} onClick={()=>{
                  let add=value.trim()
                  if(add){
                    editData(add)
                    setEdit(false)
                    setValue("") 
                  }
                  
              }}>Update</button>
          </div>

        )
        :
        (<div>{todo.value}</div>)}
        
        <button onClick={()=>setEdit(!edit)}>Edit</button>
        <button onClick={deleteData}>Delete</button>
        </div>
    )
}
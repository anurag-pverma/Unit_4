import { useState } from "react"
import { TodoList } from "./TodoList"
import {nanoid} from "nanoid";
import "../index.css"

export const Todo = () => {
    const [TodoData, setTodoData] = useState([]);
    const getData = (id) => {
        const data = document.getElementById(id).value;
        document.querySelector(".todo-list").style.display = "grid";
        document.getElementById(id).value = "";
        setTodoData([...TodoData,
            {
                title: data,
                status: false,
                id: nanoid(5)
            }
        ]);
    }
    const toggle = (id) => {
        setTodoData([
            ...TodoData.map((e) => {
                return (e.id === id ? {...e, status: !e.status} : e)
            })
        ])
    }

    return (
        <>
            <div id="input-div">
                <input id="user-input" type="text" placeholder="Write Something"></input>
                <button onClick={() => {getData("user-input")}}>+</button>
            </div>
            <TodoList className="todo-list" data={TodoData} toggle={toggle}/>
        </>
    )
}

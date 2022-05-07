
  
const TodoItem = (props) => {
    return (
        <>
            <li className="todo-item">{props.data.title} 
                <button 
                    onClick={() => props.toggle(props.data.id)}
                    className={props.data.status ? "todo-done" : "todo-not-done"}>
                </button>
            </li>
        </>
    )
}

export {TodoItem}
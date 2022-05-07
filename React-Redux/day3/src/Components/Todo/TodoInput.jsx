
import React from "react";
import { v4 as uuid } from "uuid";
import { getTodosData } from "../../redux/todo/action";
import { useDispatch } from "react-redux";



export const TodoInput = () => {
  const [title, setTitle] = React.useState("");

  const dispatch = useDispatch();

  const handleAdd = () => {
    const payload = {
      id: uuid(),
      title,
      status: false
    };
    fetch(`http://localhost:3001/todos`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      // getTodosData(dispatch);
      dispatch(getTodosData());
      // dispatch(action)   from your component;
    });
    setTitle("");
  };

  return (
    <div>
      <input
        placeholder="Add New Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>ADD TODO</button>
    </div>
  );
};

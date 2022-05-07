import React from "react";
import { useSelector } from "react-redux";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div>
      {todos.map((item) => (
        <h3 key={item.id}>{item.name}</h3>
      ))}
    </div>
  );
};

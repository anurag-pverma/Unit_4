
import React from "react";
import { TodoInput } from "./TodoInput";
import { useSelector, useDispatch } from "react-redux";
import { TodoItem } from "./TodoItem";
import { getTodosData } from "../../redux/todo/action";

// DRY --> DON'T REPEAT YOURSELF;

export const Todo = () => {
  const { loading, error, todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTodosData()); //dispatch an action getTodosData()
  }, [dispatch]);

  return loading ? (
    <h1>Loading....</h1>
  ) : error ? (
    <h1>Error.. Something went wrong...</h1>
  ) : (
    <>
      <TodoInput />
      <br />
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </>
  );
};


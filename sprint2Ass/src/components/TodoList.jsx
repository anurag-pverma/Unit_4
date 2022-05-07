import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ list, deleteItem, handleEdit, disable }) => {
  return (
    <div>
      {list.map((elem, index, arr) => {
        return (
          <TodoItem
            index={index}
            key={elem.id}
            value={elem}
            deleteItem={deleteItem}
            handleEdit={handleEdit}
            disable={disable}
          />
        );
      })}
    </div>
  );
};

export default TodoList;

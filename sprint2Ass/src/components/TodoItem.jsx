import React from "react";
import styles from "./TodoItem.module.css";
import { BsFillTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
const TodoItem = ({ value, deleteItem, handleEdit, disable, index }) => {
  
  return (
    <div id={styles.todoItem}>
      <h1>{`${value.title}`}</h1>
      <div>
        <button
          disabled={disable}
          onClick={() => handleEdit(value.title, value.id)}
        >
          <FaEdit />
        </button>
        <button disabled={disable} onClick={() => deleteItem(value.id)}>
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;

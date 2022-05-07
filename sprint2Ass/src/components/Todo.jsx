import React, { useEffect } from "react";
import TodoList from "./TodoList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import styles from "./Todo.module.css";

const Todo = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [disable, setDisable] = useState(false);
  const [dayButton, setDayButton] = useState(true);
  const [page, setPage] = useState(1);
  const [prevButton,setprevButton] = useState(true);
  const [nextButton,setNextButton] = useState(false);

  const hanleInput = (event) => {
    setInput(event.target.value);
  };

  const getData = async () => {
    try {
      let response = await fetch(`http://localhost:3000/todos?_page=${page}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      let data = await response.json();
      setList(data);
    } catch (error) {
      console.error("error", error);
    }
  };
  useEffect(() => {
    getData();
    if (page === 1) {
      setprevButton(true);
    }
  
  }, [page]);

  const PostData = async (value) => {
    try {
      let response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(value),
      });
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("error", error);
    }
  };

  const deleteData = async (id) => {
    try {
      let response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
      });
      let data = response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addItem = () => {
    let payload = {
      title: input,
      id: uuidv4(),
    };
    PostData(payload);
    setList([...list, payload]);
    setInput("");
    setDisable(false);
  };

  const deleteItem = (id) => {
    let newList = list.filter((elem) => {
      return elem.id !== id;
    });
    deleteData(id);
    setList(newList);
  };

  const handleEdit = (value, id) => {
    setInput(value);
    deleteItem(id);
    setDisable(true);
  };

  const nextPage = () => {
    if (list.length === 10) {
      setPage((p) => p + 1);
      setprevButton(false);
    }
    if (list.length < 10) {
      setNextButton(true)
    }
  };

  const prevPage = () => {
    setPage((p) => p - 1);
    setNextButton(false)
  }

  return (
    <div className={dayButton ? styles.cyanColor : styles.blackColor}>
      <div className={styles.nightMode}>
        <button
          onClick={() => setDayButton(!dayButton)}
          className={dayButton ? null : styles.btnBack}
        >
          {dayButton ? <BsSunFill /> : <BsFillMoonFill />}
        </button>
        <p className={dayButton ? null : styles.white}>Day/Night Mode</p>
      </div>

      <div className={styles.todo}>
        <h1>TODOLIST</h1>
        <form onSubmit={(event) => event.preventDefault()}>
          <input type="text" value={input} onChange={hanleInput} autoFocus />
          <button onClick={input.trim().length !== 0 ? addItem : null}>
            Add
          </button>
          <TodoList
            list={list}
            deleteItem={deleteItem}
            handleEdit={handleEdit}
            disable={disable}
          />
        </form>
        <div>
          <button disabled={prevButton} onClick={prevPage}>Previous</button>
          <button disabled={nextButton} onClick={nextPage}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;

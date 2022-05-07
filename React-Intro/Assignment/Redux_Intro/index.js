import { store } from "./store.js";

const state = store.getState();


const getTodo = () => {
  event.preventDefault();
  const todo = document.getElementById("title").value;
  const action = {
    type: "add-todo",
    payload: todo,
  };
  store.dispatch(action);
  console.log(store.getState());
};

document.getElementById("add").addEventListener("click", getTodo);

import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";
const initialState = { todo: [] };
export const store = createStore(reducer, initialState);

const reducer = (store, action) => {
  if (action.type === "add-todo") {
    let todo = document.createElement("div");
    todo.innerText = action.payload;
    document.getElementById("main").append(todo);
    return {
      ...store,
      todos: [...store.todos, { title: action.payload, status: false }],
    };
  }
  return store;
};

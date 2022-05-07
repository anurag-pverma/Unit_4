import { ADD_TODO } from "./action";

const initState = { todos: [] };

export const todoReducer = (store = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...store,
        todos: [...store.todos, action.payload]
      };
    default:
      return store;
  }
};

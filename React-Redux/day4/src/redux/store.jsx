import { legacy_createStore as createStore, combineReducers } from "redux";
import { counterReducer } from "./counter/reducer";
import { todoReducer } from "./todo/reducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  counter: counterReducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

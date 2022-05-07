import { combineReducers, legacy_createStore as createStore } from "redux";
import { countReducer } from "./counter/reducer";
import { todoReducer } from "./todo/reducer";

const rootReducer=combineReducers({
    count: countReducer, // global state related to count should come form  countReducer
    todo:todoReducer // global state related to todo should come from todoReducer
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
)



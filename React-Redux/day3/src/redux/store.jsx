// import {legacy_createStore as createStore, combineReducers} from 'redux'
// import {todosReducer} from "../redux/todo/reducer"

import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
    compose
  } from "redux";
//   import { todosReducer } from "./todo/reducer";
  import thunk from "redux-thunk";
  
  const rootReducer = combineReducers({ todos:todosReducer})
  
  // then you will use a middleware with some logic that can accomodate that;
  
  const ownThunk = (store) => (next) => (action) => {
    // this middleware will tell us the type of action that has been dispatched
    console.log("type of action is ", typeof action);
  
    // what if the action that gets dispatched is not an object and it is a function;
  
    if (typeof action === "function") {
      // in that scenario ; invoke that function;
      return action(store.dispatch);
  
      /*
        (dispatch) => {
            dispatch(getTodosLoading());
            fetch(`http://localhost:3001/todos`)
              .then((res) => res.json())
              .then((res) => dispatch(getTodosSuccess(res)))
                .catch(() => dispatch(getTodosError()));
          }
  
      */
    }
  
    // if action is object; move to next middleware if exists else move to reducer;
    next(action);
  };
  
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;
  
  const enhancer = composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  );
  
  export const store = createStore(rootReducer, enhancer);
  
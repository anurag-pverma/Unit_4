// action type
export const ADD_TODO = "ADD_TODO";

//action creator

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload
});


// export const  addTodo2 = (apyload)=>({type: ADD_TODO, payload})  // this is emplicit returns ES6 MODEL
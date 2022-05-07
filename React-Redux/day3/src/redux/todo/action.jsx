export const GET_TODOS_LOADING = "GET_TODOS_LOADING";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_ERROR = "GET_TODOS_ERROR";

export const getTodosLoading = () => ({
  type: GET_TODOS_LOADING
});

export const getTodosSuccess = (payload) => ({
  type: GET_TODOS_SUCCESS,
  payload
});

export const getTodosError = () => ({
  type: GET_TODOS_ERROR
});

// GET_TODOS_SUCCESS --> res --> how will you use this response in redux store;

export const getTodosData = () => (dispatch) => {
  dispatch(getTodosLoading());
  fetch(`http://localhost:3001/todos`)
    .then((res) => res.json())
    .then((res) => dispatch(getTodosSuccess(res))) // update your redux store with the latest data from server as soon as the component mounts onto UI;
    .catch(() => dispatch(getTodosError()));
};

// is there a way in which i can dispatch one action and that action in turn can dispatch different actions; basically when it comes to async requests;

// getTodosData is an action;

// it is a kind of action which is not an object but rather a function which has dispatch as argument;

/*

(dispatch) => {
  dispatch(getTodosLoading());
  fetch(`http://localhost:3001/todos`)
    .then((res) => res.json())
    .then((res) => dispatch(getTodosSuccess(res))) // update your redux store with the latest data from server as soon as the component mounts onto UI;
    .catch(() => dispatch(getTodosError()));
};


*/

// if you want to have an action in such a way that it's a function which will return a function and that function which it returns will have access to dispatch method of redux store;

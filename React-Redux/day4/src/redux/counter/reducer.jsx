import { INCREMENT, DECREMENT, RESET } from "./action";

const initState = { count: 0 };

const counterReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return {
        count: store.count + payload
      };
    case DECREMENT:
      return {
        count: store.count - payload
      };
    case RESET:
      return {
        ...initState
      };
    default:
      return store;
  }
};

export { counterReducer };

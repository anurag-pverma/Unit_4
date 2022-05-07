import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, INCREMENT } from "../../redux/counter/action";

export const Counter = () => {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch();

  return (
    <div>
     
      <h1>Count : {count}</h1>
      <button onClick={() => dispatch(increment(2))}>INC</button>
      <button onClick={() => dispatch(decrement(2))}>DEC</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
    </div>
  );
};

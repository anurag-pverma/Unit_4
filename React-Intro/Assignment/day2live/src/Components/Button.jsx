import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => handleInc()}>inc</button>
      <button onClick={()=>handleDec()}>Dec</button>
    </>
  );
}

export default Button;
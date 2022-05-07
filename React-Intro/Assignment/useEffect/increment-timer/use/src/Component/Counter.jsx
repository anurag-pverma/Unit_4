import React, { useEffect, useState } from "react";

export const Counter = ({ start, end }) => {
  const [count, setCount] = useState(start);
  useEffect(() => {
    let id = setInterval(() => {
      setCount((prevValue) => {
        if (prevValue < end) {
          return prevValue + 1;
        } else {
          clearInterval(id);
          return 0;
        }
      });
      return () => {
        clearInterval(id);
      };
    }, 1000);
  }, []);
  return (
    <div>
      <h1>Counter:{count}</h1>
    </div>
  );
};

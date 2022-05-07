import { useEffect, useRef, useState } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(5);
  const [count, setcount] = useState(0);
  const [flag, setFlag] = useState(true);
  const ref = useRef(null);
  useEffect(() => {
    if (flag === false) {
      ref.current = setInterval(() => {
        setcount((value) => {
          if (value === 0) {
            return 59;
          }
          return value - 1;
        });
      }, 1000);
      return;
    }
  }, [flag]);

  useEffect(() => {
    if (count === 59) {
      setTimer(timer - 1);
    }
    if (timer < 0) {
      clearInterval(ref.current);
    }
    return;
  }, [count]);
  return (
    <div>
      <div>
        <div>
          <h1>
            {timer > 0 ? `${timer}m` : null} {count < 10 ? `0${count}` : count}s
          </h1>
        </div>
      </div>
      {flag ? <button onClick={() => setFlag(!flag)}>Start</button> : null}
      {flag ? null : (
        <button
          onClick={() => {
            clearInterval(ref.current);
            setFlag(!flag);
          }}
        >
          Stop
        </button>
      )}

      <button
        onClick={() => {
          clearInterval(ref.current);
          setFlag(flag ? flag : !flag);
          setTimer(5);
          setcount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

import { useEffect, useRef, useState } from "react";

export const Stopwatch = () => {
  const [sCount, setsCount] = useState(0);
  const [mCount, setmCount] = useState(0);
  const [flag, setFlag] = useState(true);
  const id1 = useRef(null);
  const id2 = useRef(null);
  useEffect(() => {
    if (flag === false) {
      id1.current = setInterval(() => {
        setmCount((value) => {
          if (value === 100) {
            return 0;
          }
          return value + 1;
        });
      }, 10);
      id2.current = setInterval(() => {
        setsCount((value) => {
          return value + 1;
        });
      }, 1000);
    }
    return;
  }, [flag]);

  return (
    <div>
      <div>
        <div>
          <h1>
            {sCount}s {mCount}
          </h1>
        </div>
      </div>
      {flag ? <button onClick={() => setFlag(!flag)}>Start</button> : null}
      {flag ? null : (
        <button
          onClick={() => {
            clearInterval(id1.current);
            clearInterval(id2.current);
            setFlag(!flag);
          }}
        >
          Stop
        </button>
      )}
      <button
        onClick={() => {
          clearInterval(id1.current);
          clearInterval(id2.current);
          setFlag(flag ? flag : !flag);
          setsCount(0);
          setmCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

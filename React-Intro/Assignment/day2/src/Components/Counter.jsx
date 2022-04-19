


import React from 'react'

export default function Counter() {

    const[count,setCount] = React.useState(0);
    const handleINC = () => {
        setCount((prevState)=>prevState+1);
    }
    const handleDEC = () => {
        setCount(count-1);
    }
    const handle2 = () => {
        setCount(count*2);
    }
  return (
    <div>

            <h1>COUNTER-{count}</h1>
          <button onClick={() => handleINC()}>Increment</button>
          <button onClick={() => handleDEC()}>Decrement</button>
          <button onClick={() => handle2()}>Double</button>

    </div>
  )
}


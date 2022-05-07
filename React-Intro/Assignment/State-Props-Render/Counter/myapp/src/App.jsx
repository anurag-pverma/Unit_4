import './App.css';
import React from 'react';

function App() {

  return (
    <div className="App">
        <h1>Counter</h1>
        <Counter init={0} col="green"/>
    </div>
  );
}
function Counter(props) {
  const[val, setVal] = React.useState(props);
  const[colo, setcolor] = React.useState(props);
  const handleCounter = (value)=>{
    setVal({...val, init:val.init+value});
    if(val.init%2===0){
      setcolor({...colo,col:"red"});
    }
    else{
      setcolor({...colo,col:"green"});
    }
  }
  const handleMultCounter = (value)=>{
    setVal({...val,init:val.init*value})
  }
  return(
    <>
      <button onClick={()=>handleCounter(1)}>+</button>
      <button onClick={()=>handleCounter(-1)}>-</button>
      <button onClick={()=>handleMultCounter(2)}>*2</button>
    </>
    )
}
export default App;

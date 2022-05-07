import React from 'react';
import ReactDOM  from 'react-dom';

function App() {
  const arr1 = ['Android','Blackberry','iphone','Windows Phone'];
  const arr2 = ['Samsung','HTC','Apple','Microsoft'];
  return (
    <>
      <h2>Mobile Operating System</h2>
      <ul>
        {arr1.map((e)=>(
           <List lis={e}/>
        ))}
      </ul>
      <h2>Mobile Manufacturers</h2>
      <ul>
        {arr2.map((elem)=>(
           <List lis={elem}/>
        ))}
      </ul>
    </>
  );
}
function List(props) {
  return <li>{props.lis}</li>
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';

function App(){
    const list = ["services","Projects","About"];
    return <>
        <nav className="nav">    
            <div className="left">
                <h1>LOGOBACKERY</h1>
            </div>
            <div className="middle">
                {list.map((e)=>(
                    <Links a={e}/>
                ))}
            </div>
            <div className="right">
                <button>Contact</button>
            </div>
        </nav>
    </>
}
function Links(props) {
    return <a>{props.a}</a>
}

export default App;
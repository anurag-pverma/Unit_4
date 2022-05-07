import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens: 13
  });
    // Create add and remove functions here that changes the
    // state.
    function handleCounter(type, value) {
      if(type === "books") {
        setInv({...inv, books:inv.books+value});
      }
      else if(type === "notebooks") {
        setInv({...inv, notebooks:inv.notebooks+value});
      }
      else if(type === "pens"){
        setInv({...inv, pens:inv.pens+value})
      }
      else{
        setInv({...inv, inkpens:inv.inkpens+value})
      }
    }
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books:{inv.books} </span>
        <button className="circlularButton" onClick={() =>{handleCounter("books",1)}}>-</button>
        <button className="circlularButton" onClick={() =>{handleCounter("books",-1)}}>+</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks:{inv.notebooks} </span>
        <button className="circlularButton" onClick={() =>{handleCounter("noteBooks",1)}}>+</button>
        <button className="circlularButton" onClick={() =>{handleCounter("noteBooks",-1)}}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen:{inv.pens}</span>
        <button className="circlularButton" onClick={() =>{handleCounter("pens",1)}}>+</button>
        <button className="circlularButton" onClick={() =>{handleCounter("pens",-1)}}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens:{inv.inkpens} </span>
        <button className="circlularButton" onClick={() =>{handleCounter("inkPens",1)}}>+</button>
        <button className="circlularButton" onClick={() =>{handleCounter("inkPens",-1)}}>-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books+inv.notebooks+inv.pens+inv.inkpens}
    </div>
  );
};

// export {Inventory};
import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

const App = () => {
    let [count, setCount] = useState(0)
  return (
    <div className="app">
      <h3 className="counter">Counter : {count}</h3>
      <div className="buttons">        
      <button onClick={()=>{setCount(++count)}}>Increment</button>
      <button onClick={()=>{setCount(--count)}}>Decrement</button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

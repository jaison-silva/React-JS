import "./App.css";
// import { useRef } from "react";
import { useRef } from "react";

function App() {

  const inputval = useRef(null)

  function refHook (){
      console.log(inputval.current.value)
  }

  return (
    <div>
      <h3>Enter your name</h3>
      <input ref={inputval} />
      <button type="submit" onClick={refHook}>Submit</button>
    </div>
  )
}

export default App;



// import React, { useState } from 'react';

// function ControlledInput() {
//   const [inputValue, setInputValue] = useState('');

//   const handleChange = (event) => {
//     setInputValue(event.target.value);  // Update state with input value
//   };

//   const handleSubmit = () => {
//     alert('Entered Value: ' + inputValue);  // Access value from state
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}  // The value is controlled by React state
//         onChange={handleChange}  // Handle changes to input
//       />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }

// export default ControlledInput;

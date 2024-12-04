import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1); 
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${count}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const jsonData = await response.json();
        setUserData(jsonData); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setUserData(null); 
      }
    };

    fetchUserData(); 
  }, [count]);

  return (
    <div className="App">
      <h3 className="counter">Counter : {count}</h3>
      <div className="data">
        <h4>Name: {userData ? userData.name : "Loading..."}</h4>
        <h4>Email: {userData ? userData.email : "Loading..."}</h4>
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            setCount((prevCount) => Math.min(prevCount + 1, 10)); 
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            setCount((prevCount) => Math.max(prevCount - 1, 1));
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;

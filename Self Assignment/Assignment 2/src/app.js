import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="app">
      {arrData.map((val, index) => {
        return (
          <div key={index} className="container">
            <h3>Name : {val.name}</h3>
            <p>Email : {val.email}</p>
          </div>
        );
      })}
    </div>
  );
};

const arrData = [
  {
    name: "jaison",
    email: "jaisonjoy303@gmail.com",
  },
  {
    name: "arun",
    email: "arun@gmail.com",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

import React from "react";
import reactDOM from "react-dom/client";
import "./index.css";

import Header  from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = reactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

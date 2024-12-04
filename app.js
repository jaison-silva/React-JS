const React = require("react");
const ReactDom = require("react-dom/client");


// const heading = React.createElement("h1", {}, "Namasthe React!");


const root = ReactDom.createRoot(document.getElementById("root"));

// console.log(heading);  
// root.render(heading); 


// component Composition

let Heading = () => (
    <h1>Hello world</h1>
)

let Para = () => (
    <div>
        <Heading />
    <p>Namasthe js</p>
    </div>
)

root.render(<Para/>)
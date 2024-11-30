
const root = ReactDom.createRoot(document.getElementById("root"))

const data = [
    { id: 1, name: "Leanne Graham", email: "leannegraham@abc.com" },
    { id: 2, name: "Ervin Howell", email: "ervinhowell@abc.com" }
  ];

  function resuableComponenet(name,Email){
    return (
        <div>
            <h1>Name:{name}</h1>
            <p>Email: {Email}</p>
        </div>
    )
  }

  function App (){
    return (
        <div>
        <h3>This is the Assignment 1</h3>
        {data.map((person)=>{
            return (
                resuableComponenet(person.name,person.Email)
            )
        })}
        </div>
    )
  }

root.render(App())
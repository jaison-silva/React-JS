import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import './App.css'
// import { text } from 'express'

function App() {
  let [toDos, setToDos] = useState([]);
  let [toDo, setToDo] = useState('');

  useEffect(()=>{

    // console.log("jaison")
  },[])

  return (
    <>
    <div className="container mt-5">
      <div className="text-center text-white">
        <h1 style={{color : "red"}}>ToDo List</h1>
      </div>
      <div className="text-center text-white mt-3">
        <h2>Let's Do It...</h2>
        {/* <button onClick={()=>document.getElementById("toToggle").hidden
        }>Toggle</button> */}
      </div>
      <div className="input-group my-4">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
          className="form-control"
        />
        <button
          onClick={() => {
            if (toDo.trim()) {
              setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
              setToDo('');
            }
          }}
          className="btn btn-primary"
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div id='toToggle'>
        {toDos.length > 0 && <h3 className="text-center text-white mb-4">List To Do</h3>}
        {toDos.map((value) => {
          return (
            <div className="gradient-border d-flex justify-content-between align-items-center mb-2 p-2"  key={value.id}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={value.status}
                  onChange={(e) => {
                    setToDos(
                      toDos.map((obj) => {
                        if (obj.id === value.id) {
                          obj.status = e.target.checked;
                        }
                        return obj;
                      })
                    );
                  }}
                />
                <label className="form-check-label text-white">{value.text}</label>
              </div>
              <button
                onClick={() => setToDos(toDos.filter((obj) => obj.id !== value.id))}
                className="btn btn-danger"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          );
        })}
        <div className="mt-5">
          {toDos.length > 0 && <h3 className="text-center text-white mb-4">Done</h3>}
          {toDos.map((obj) => {
            if (obj.status) {
              return (
                <div key={obj.id} className="text-center">
                  <h5 className="text-center text-white">{obj.text}</h5>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
   
    </>
  );
}

export default App;

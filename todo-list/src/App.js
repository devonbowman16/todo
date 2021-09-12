import React, {useState} from "react";
import './App.css';

function App() {
  const [newItem, setNewItem]=useState("");
  const [toDoList, setToDoList]= useState([]);

  const submitHandle = (e) =>{
    e.preventDefault();
    console.log(newItem);
    setToDoList([...toDoList, todoItem])
  };

  const todoItem = {
    text: newItem,
    complete: false
  }

  const deleteFun = (delIdx) => {
    const filteredToDoList = toDoList.filter((toDoList, i) => {
      return i !== delIdx;
    });

    setToDoList(filteredToDoList);
  }

    const toggleHandler = (idx)=> {
      const updatedList = toDoList.map((toDoList, i)=>{
        if (idx === i) {
          toDoList.complete = !toDoList.complete;
        }
        return toDoList;
      })
      setToDoList(updatedList);
    }

  return (
    <div className="App container">
      <h2>Add a task to your list:</h2>
      <form onSubmit={(e)=>{
        submitHandle(e);
      }}>
        <input onChange={(e)=>{
          setNewItem(e.target.value);
        }} type="text"/>
      <input type="submit" className="btn btn-success"/>
      </form>
      <h1>Your To Do List:</h1>

      {
        toDoList.map((toDoList, i)=> {
          return <div key={i}>
            <input onChange={(e)=> {
              toggleHandler(i);
            }}checked={toDoList.complete} type="checkbox"/>
            <span>{toDoList.text}   </span>
            <button onClick = {(e)=> {
              deleteFun(i);
            }} className="btn btn-danger">Delete</button>
          </div>
        })
      }
    </div>
  );
}

export default App;

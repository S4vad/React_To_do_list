import React,{useState}from "react";
import TodoItem from "./ToDoItem"



function App() {
  
    const [input,setInput]=useState("");
    const [item,setItem] = useState([]);


    function handleChange(event){
      const value=event.target.value;
      setInput(value)

    }

    function addItem(){
      setItem(prevItems=>{
        return [...prevItems,input]

      })
      setInput("");

    }

    function deleteItem(id){
      setItem(prevItems=>{
        return prevItems.filter((item,index)=>{ // () for more than one parameter in arrow function
         return index !==id;
        });    
      });

    }
    return (
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input onChange={handleChange} type="text" value={input}/>
          <button type="submit" onClick={addItem}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {item.map((toDoItem,index)=> ( //taking index along with 
              <TodoItem 
                key={index}
                id={index}
                text={toDoItem}
                onChecked={deleteItem}
              />

            ))}
          </ul>
        </div>
      </div>
  );
}

export default App;

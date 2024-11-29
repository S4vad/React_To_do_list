import React,{useState}from "react";
import TodoItem from "./ToDoItem"
import InputArea from "./InputArea";



function App() {
  
    const [item,setItem] = useState([]);


    function addItem(input){
      setItem(prevItems=>{
        return [...prevItems,input]

      })

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
        <InputArea 
          onAdd={addItem}
        />
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

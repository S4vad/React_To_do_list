import React,{useState}from "react";



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
            {item.map(toDoItem=> (
              <li>
                {toDoItem}
              </li>

            ))}
          </ul>
        </div>
      </div>
  );
}

export default App;

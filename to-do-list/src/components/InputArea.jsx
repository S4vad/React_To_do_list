import React,{useState} from "react";

function InputArea(props){

    const [input,setInput]=useState("");
    
    function handleChange(event){
        const value=event.target.value;
        setInput(value)
  
      }
    return(

        
        <div className="form">
        <input onChange={handleChange} type="text" value={input}/>
        <button type="submit" onClick={()=>{
            props.onAdd(input)
            setInput(" ")
        }}>
          <span>Add</span>
        </button>
      </div>

    )
}

export default InputArea;
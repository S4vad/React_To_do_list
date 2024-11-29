import React from "react";

function TodoItem(props){
    return(
        <div
         onClick={()=>{      //here creating funcion for working only clicking other wise it work on typing todolist
            props.onChecked(props.id); //here we can use onChecked instead whatever name we want
         }}    
        >
              <li>
                {props.text}
              </li>
        </div>
    )
}

export default TodoItem;
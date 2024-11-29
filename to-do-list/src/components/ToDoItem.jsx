import React from "react";

function TodoItem(props){
    return(
        <div
         onClick={()=>{      //here creating funcion for working only clicking other wise it work on typing todolist
            props.onChecked(props.id);
         }}    
        >
              <li>
                {props.text}
              </li>
        </div>
    )
}

export default TodoItem;
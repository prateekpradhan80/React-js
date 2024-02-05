import React, { useState } from "react";
let ChildComponent = (props)=>{
  const [childState , setChildState] = useState("childState");
   let ChildComponentUpdate = ()=>{
    setChildState("Prateek Pradhan");
   }
 return(
  <div>
    <h3>Child Component</h3>
    <h4>Parent Component received as prop : {props.parentState}</h4>
    <p>ChildState : {childState}</p>
    <button onClick={ChildComponentUpdate}>ChildComponentUpdate</button>
  </div>
 );
}
export default ChildComponent;
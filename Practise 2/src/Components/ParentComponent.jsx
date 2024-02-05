import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

let ParentComponent = () =>{
  const [parentState , setParentState]=useState("parentState"); 

  const updateParentState = ()=>{
    setParentState("parentStateUpdated")
  }
  return(
    <div>
      <h2>Parent Component</h2>
      <p>ParentState : {parentState}</p>
      <button onClick={updateParentState}>updateParentState</button>
      <ChildComponent parentState = {parentState}></ChildComponent>
    </div>
  );
};
export default ParentComponent;
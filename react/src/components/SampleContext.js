import React, { useContext, useEffect } from "react";
import {useTodoState, useTodoDispatch} from "./TodoContext";

const SampleContext = () => {
  const state = useTodoState();
  const dispatch = useTodoDispatch();

  useEffect(()=>{
    console.log(state, dispatch)
  },[]);
  
  return(
    <div>SampleContext</div>
  )
}

export default SampleContext;
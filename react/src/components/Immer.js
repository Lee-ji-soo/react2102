import React from "react";
import produce from "immer";

const Immer = () => {
  const state = {
    number : 1,
    dontChangeMe : 2
  };

  const nextState = produce(state, draft => {
    draft.number += 1; 
  });
  
  console.log(nextState);

  return(
    <>
    </>
  )
}

export default Immer;
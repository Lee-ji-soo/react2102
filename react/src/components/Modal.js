import React, { useEffect, useState } from "react";
import { AlertModal2 } from "../utils/modalutils";
import {setCookie, hasCookie} from "../utils/jsxutils";

const Modal = () => {
  const [modal, setModal] = useState({
    open:false,
    message:{
      title:"",
      con:""
    }
  })
  const [checked, setChecked] = useState(false);

  const handleChange = e => {
    setChecked(e.target.checked);
  }

  useEffect(()=>{
    if(checked){
      setCookie("lensCookie", 'donotShow', 5);
    } else return;
  },[checked])
  
  const handleCloseModal = () => {
    setModal({
      ...modal, open:false
    })
  }
  
  const handleClick = () => {
    const checHasCookie = hasCookie("lensCookie", "donotShow");
    if(checHasCookie){
      setModal({...modal, open:false})
    }else{
      setModal({
        open:true,
        message:{
          title:"팝업",
          con:"오눌하루 보지 않기 기능"
        }
      })
    }

  }

  const {open, message} = modal
  return(
    <>
      <AlertModal2
        open={open}
        message={message}
        checked={checked}
        handleCloseModal={handleCloseModal}
        handleChange={handleChange}
      />
      <div onClick={handleClick}> 팝업열기 </div>
    </>
  )
};

export default Modal;
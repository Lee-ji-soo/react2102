import { Checkbox } from "material-ui";
import React, { useState } from "react";
import { AlertModal } from "../utils/modalutils";

const Modal = () => {

  const handleChange = e => {
    e.target.checked;
  }

  const handleCloseModal = () => {
    console.log("close");
  }

  const [modal, setModal] = useState({
    open:false,
    message:{
      title:"팝업",
      con:"오눌하루 보지 않기 기능"
    }
  })
  const [checked, setChecked] = useState(false);

  const {open, message} = modal

  return(
    <AlertModal
    open={open}
    message={message}
    checked={checked}
    handleCloseModal={handleCloseModal}
    handleChange={handleChange}
    />
  )
};

export default Modal;
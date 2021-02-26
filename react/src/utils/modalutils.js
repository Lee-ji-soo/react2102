import React from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    Button,
    DialogContentText,
    DialogTitle,
    Modal,
    Checkbox
} from "@material-ui/core";
import styled, {css} from "styled-components";

export const AlertModal2 = ({
    open,
    handleCloseModal,
    handleChange,
    message,
    checked
})=>{
    return(
        <Modal
            open={open}
            onClose={handleCloseModal}
        >
            <PopupBox>
                <div>
                    <p>{message.title}</p>
                    <p>{message.con}</p>
                </div>
                <div>
                    <Checkbox 
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    오늘 하루 보지 않기
                </div>
            </PopupBox>
        </Modal>
    )
}

export const ImageModal = ({
    open,
    handleCloseModal,
    img    
}) => {
    return(
        <Modal
            open={open} 
            onClose={handleCloseModal}
         >
            <ImageBox>
                <img src={img}/>
            </ImageBox>
        </Modal>
    ) 
}
export const AlertModal = ({
    open,
    handleCloseModal,
    message,
    currentRef
}) => {
    const {title, con} = message;
    return(
        <Modal
            open={open} 
            onClose={handleCloseModal}
         >
            <MessageBox>
                <p className="title">{title}</p>
                <p className="con">{con}</p>
            </MessageBox>
        </Modal>
    )
};

const ConfirmModal=({
    open,
    handleConfirm,
    handleClose,
    confirmMessage
}) => {
    return(
        <Dialog 
        open={open} 
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
         >
            <DialogTitle id="alert-dialog-title">{"Crunchprice"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {confirmMessage}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleConfirm} color="primary">
                    확인
                </Button>
                <Button onClick={handleClose} type="submit" color="primary">취소</Button>
            </DialogActions>
        </Dialog>
    )
}
export default ConfirmModal;

const defaultBox = css`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:250px;
    height:auto;
    padding:13px;
    border-radius:5px;
    background-color:white;
`

const PopupBox = styled.div`
    ${defaultBox};
`

const ImageBox = styled.div`
    ${defaultBox};
    img{
        width:100%;
    }
`

const MessageBox = styled.div`
    ${defaultBox};
    p{
        line-height:1.8;
    }
    .title{
        font-size:14px;
        font-weight:700;
        color:#4e00ff;
    }
    .con{
        font-size:13px;
    }
`
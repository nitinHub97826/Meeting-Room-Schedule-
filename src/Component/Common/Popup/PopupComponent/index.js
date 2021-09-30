import React,{memo} from 'react';
import {Dialog,DialogTitle,DialogContent,DialogActions} from '@mui/material';



const CusDialog =memo((props) =>{
    const {children, onClose,title, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose &&   onClose(selectedValue);
    };
  
    return (
      <Dialog onClose={handleClose} open={open}>
        {title &&   <DialogTitle>{title}</DialogTitle> }
        {    React.Children.map(children,x=>x)}
      </Dialog>
    );
  })

  

 export { CusDialog as Popup, DialogActions as PopupActions, DialogContent as PopupContents } ;
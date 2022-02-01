import React,{memo}from "react";
import {Alert,Snackbar} from '@mui/material';
import ReactDOM from 'react-dom';


export const AlertMemo=memo((props)=> {
    return <Alert elevation={6} variant="filled" {...props} />;
  })
  
const CusAlert =memo((props)=>{
const {msg,severity="success"}=props

ReactDOM.render(
    <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={true} autoHideDuration={5000}>
    <AlertMemo severity={severity}>
        {msg}
    </AlertMemo>
    </Snackbar>
    ,
    document.getElementById('AlertContainer')
  );

})

export default CusAlert;
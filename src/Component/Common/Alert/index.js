import React,{useEffect,memo}from "react";
import {Snackbar} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';


export const AlertMemo=memo((props)=> {
    return <Alert elevation={6} variant="filled" {...props} />;
  })
  
const CusAlert =memo((props)=>{
const {msg,severity="success"}=props

return(
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={true} autoHideDuration={5000}>
            <AlertMemo severity>
                {msg}
            </AlertMemo>
        </Snackbar>
        
    )
})

export default CusAlert;
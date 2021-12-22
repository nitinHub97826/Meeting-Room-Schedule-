import React,{memo} from 'react';
import { Button} from '.';
import AddIcon from '@mui/icons-material/Add';

const variant='text' ;//|'text' 'outlined' | 'contained';
export const AddRecordBtn=memo((props)=>{
    return(     
           <Button title={"Add record"} variant={variant} startIcon={<AddIcon />} {...props}/>
    )
})
 



export const toolbarBtnFilter=({name,props})=>{
    const {onClick,...otherProps}=props
   const onPress=(p)=>{
      onClick && onClick({...p})
    }
    
  
  switch (name.toLowerCase()){
    case "add":
      return <AddRecordBtn {...otherProps} onClick={onPress}/>
      default :
      return null;
  }
  }
  
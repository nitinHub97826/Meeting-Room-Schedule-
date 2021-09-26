import React,{memo} from 'react';
import { TextField } from '@mui/material';
import './style.scss'

const TextBox=(props)=> {
  const {label,className ,...otherProps}=props
  return (
    <TextField placeholder={label} label={label} required={true} variant="outlined" autoComplete={`false`} {...otherProps}  className={`text-box ${className}`}/> 
  );
}
export default memo(TextBox);

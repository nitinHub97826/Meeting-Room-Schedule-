import { TextField } from '@material-ui/core';
import React,{memo} from 'react';
import './style.scss'

const TextBox=(props)=> {
  const {label,...otherProps}=props
  return (
    <TextField placeholder={label} label={label}   variant="outlined" {...otherProps}/> 
  );
}
export default memo(TextBox);

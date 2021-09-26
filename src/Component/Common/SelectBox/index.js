import React,{memo} from 'react';
import {TextField,Autocomplete} from '@mui/material';
import './style.scss'

const SelectBox=(props)=> {
  const {label,name,onChange,...otherProps}=props
  const onSelect=(e,d)=>{
    onChange && onChange({...e,target:{
      ...e.target,
      name:name,
    }, dataItem:d});
  }
  return (

  <Autocomplete
    getOptionLabel={(option) => option.text}
    // style={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
    {...otherProps}
    onChange={onSelect}
    name={name}
  />  
  );
}
export default memo(SelectBox);

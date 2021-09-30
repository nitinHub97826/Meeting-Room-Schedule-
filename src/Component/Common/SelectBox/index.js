import React,{memo} from 'react';
import {TextField,Autocomplete} from '@mui/material';
import './style.scss'

const SelectBox=(props)=> {
  const {label,name,onChange,options,value,...otherProps}=props
  const onSelect=(e,d)=>{
    onChange && onChange({...e,
      target:{
      ...e.target,
      name:name,
      value:d && d.id
    }, dataItem:d});
  }
  return (

  <Autocomplete
  
    isOptionEqualToValue={(option, value) => {
      return option.id === value.id
    }}
    getOptionLabel={(option) =>{
      return option.text
    }}
    renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
    {...otherProps}
    onChange={onSelect}
    options={options}
    name={name}
    value={(value==null)?null:options.find(x=>x.id===value)}
  />  
  );
}
export default memo(SelectBox);

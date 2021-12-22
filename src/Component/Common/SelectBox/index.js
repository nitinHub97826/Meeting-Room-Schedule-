import React,{memo} from 'react';
import {TextField,Autocomplete} from '@mui/material';
import './style.scss'

const SelectBox=(props)=> {
  const {label,name,onChange,options,value,required=true,...otherProps}=props
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
  
    renderInput={(params) => <TextField {...params} label={label} variant="outlined"   required={required}/>}
   
    {...otherProps}
    required={required}
    onChange={onSelect}
    options={options}
    name={name}
    value={(value==null)?null:options.find(x=>x.id===value)}
    isOptionEqualToValue={(option, value) => {
      return option.id === value.id
    }}
    getOptionLabel={(option) =>{
      return option.text
    }}
  />  
  );
}
export default memo(SelectBox);

import DatePicker from 'react-date-picker';
import React,{memo,useState,Fragment} from 'react';
import './style.css'
const CustDatePicker=(props)=>{
    const {label,...otherProps}=props
  return (
        <Fragment>
        <label className="label">{label}</label>
        <DatePicker className="input" {...otherProps}/>
        </Fragment> 
    )
}
export default CustDatePicker;
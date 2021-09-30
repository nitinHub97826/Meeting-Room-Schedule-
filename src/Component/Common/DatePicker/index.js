import * as React from 'react';
import {TextField} from '@mui/material';
import DateAdapter from '@mui/lab/AdapterMoment';
import {LocalizationProvider,DatePicker} from '@mui/lab';
import { dateFormat } from "../../../Constant";
import './style.scss';

export default function CustDatePicker(props) {

  const { name,onChange, ...otherProps } = props;
    const onTextChange=(e)=>{
        onChange && onChange( {target:{name:name,value:e}})
  }
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <DatePicker
      required={true}
        {...otherProps}
        name={name}
        disableMaskedInput={true}
        inputFormat={dateFormat}
        format={dateFormat}
        onChange={onTextChange}
        renderInput={(params) => <TextField {...params}  disabled={true}/>}
      />
    </LocalizationProvider>
  );
}
// import React from "react";
// import DateAdapter from '@mui/lab/AdapterMoment';
// import TextField from '@mui/material/TextField';
// import {LocalizationProvider,DatePicker} from '@mui/lab';
// import "./style.scss";
// import { dateFormat } from "../../../Constant";

// const CustDatePicker = (props) => {
//   const { label,onChange,name, ...otherProps } = props;
  
//   const onTextChange=(e)=>{
//     onChange && onChange( {target:{name:name,value:e}})
//   }

//   return (
//     <div className="input-container datepicker">
//         <LocalizationProvider  dateAdapter={DateAdapter}>
//       <DatePicker
//         name={name}
//         label={label}
//         required={true}
//         format={dateFormat}
//         {...otherProps}
//         renderInput={(params) => <TextField {...params} />}
//         onChange={onTextChange}
//       />
//     </LocalizationProvider>
//       {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
//         <label className="label">{label}</label>
//         <KeyboardDatePicker
//           className="input"
//           disableToolbar
//           format={dateFormat}
//           margin="normal"
//           label={""}
//           KeyboardButtonProps={{
//             "aria-label": "change date"
//           }}
//           name={name}
//           required={true}
//           {...otherProps}
//           onChange={onTextChange}
//         />
//          */}
//     </div>

    
//   );
// };

// export default CustDatePicker;

import * as React from 'react';
import TextField from '@mui/material/TextField';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function CustDatePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <DatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
import "date-fns";
import React, { memo } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "./style.scss";
import { dateFormat } from "../../../Constant";

const CustDatePicker = (props) => {
  const { label,onChange,name, ...otherProps } = props;
  
  const onTextChange=(e)=>{
    onChange && onChange( {target:{name:name,value:e}})
  }

  return (
    <div className="input-container datepicker">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <label className="label">{label}</label>
        <KeyboardDatePicker
          className="input"
          disableToolbar
          format={dateFormat}
          margin="normal"
          label={""}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
          name={name}
          required={true}
          {...otherProps}
          onChange={onTextChange}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default CustDatePicker;

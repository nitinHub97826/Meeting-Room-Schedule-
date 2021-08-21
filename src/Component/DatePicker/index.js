import "date-fns";
import React, { memo } from "react";
import "./style.css";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { dateFormat } from "../../Constant/Misc";

const CustDatePicker = (props) => {
  const { label, ...otherProps } = props;
  return (
    <div className="input-container">
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
          {...otherProps}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default CustDatePicker;

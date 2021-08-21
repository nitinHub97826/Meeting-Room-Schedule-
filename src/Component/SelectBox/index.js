import React,{memo} from 'react';
import './style.css'

const SelectBox=(props)=> {
  const {label,data,...otherProps}=props
  return (
<div className="input-container" >
  <label className="label">{label}</label>
  <select className="input input-select" {...otherProps}>
     { data.map((x,i)=> <option value={x} key={i}>{x}</option>)
}
  </select>
</div>    
  );
}
export default memo(SelectBox);

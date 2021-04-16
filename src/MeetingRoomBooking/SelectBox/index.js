import React,{memo,Fragment} from 'react';
import './style.css'

const SelectBox=(props)=> {
  const {label,data,...otherProps}=props
  return (
<Fragment>
  <label className="label">{label}</label>
  <select className="input input-select" {...otherProps}>
     { data.map((x,i)=> <option value={x} key={i}>{x}</option>)
}
  </select>
</Fragment>    
  );
}
export default memo(SelectBox);

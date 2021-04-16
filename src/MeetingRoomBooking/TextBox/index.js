import React,{memo,Fragment} from 'react';
import './style.css'

const TextBox=(props)=> {
  const {label,...otherProps}=props
  return (
<Fragment>
  <label className="label">{label}</label>
  <input className="input input-text"  pattern="[A-Za-z][A-Za-z0-9 ]{0,50}" {...otherProps}/>
</Fragment>    
  );
}
export default memo(TextBox);

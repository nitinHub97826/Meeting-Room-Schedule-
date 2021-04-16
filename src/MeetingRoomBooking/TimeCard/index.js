import React,{memo,useState,Fragment} from 'react';
import './styles.css'
const times=[
    "10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM",
    "01:30 PM","02:30 PM","02:00 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM",
    "05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM"
    ]
const TimeCard=(props)=>{
    const {value,onSelect,...otherProps}=props
return(
<Fragment>
    <div className="time-container">
    {
        times.map(x=><div className={`time-card ${value==x && "selected"}`} key={x} onClick={(e)=>onSelect(x)}><span>{x}</span></div>)
    }
    </div>
</Fragment>
)
}
export default TimeCard
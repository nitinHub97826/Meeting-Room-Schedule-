import React,{memo,Fragment} from 'react';
import './styles.css'

const TimeCard=memo((props)=>{
    const {value,onSelect,data}=props
return(
<Fragment>
    <div className="time-container">
    {
        data.map(x=><div className={`time-card ${value===x && "selected"}`} key={x} onClick={(e)=>onSelect(x)}><span>{x}</span></div>)
    }
    </div>
</Fragment>
)
})
export default TimeCard
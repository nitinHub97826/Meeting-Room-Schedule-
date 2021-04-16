import React,{memo,useState,Fragment} from 'react';
import SelectBox from '../SelectBox';
import TextBox from '../TextBox/index'
import './style.css'
import {CreateEvent} from '../Constant';
import CustDatePicker from '../DatePicker';
import TimeCard from '../TimeCard';


const ScheduleForm=()=> {

  const [Obj, setObj] = useState({
    dt:new Date(),
    time:'10:00 AM',
    name:null,
    description:null,
    room:"Monitor Room"
  });

  const onTextChange=(e)=>{
    setObj({
      ...Obj,
      [`${e.target.name}`]:e.target.value
    })
  }


  const handleSubmit=(e)=>{
    e.preventDefault();
     
     var dt_temp=Obj.dt.toLocaleString().split(',')[0]+', '+Obj.time
     dt_temp=new Date(dt_temp);
    
      var event = {
      'summary': 'Meeting Room Schedule',
      'location': `${Obj.room}`,
      'description': `${Obj.description}`,
      'start': {
        'dateTime': new Date(dt_temp) 
      },
      'end': {
        'dateTime': new Date(dt_temp.setHours(dt_temp.getHours()+1))
      }           
      }
    
      CreateEvent(event);
  
    }

  return (
<div className="Card"> 
  <form className="form" onSubmit={handleSubmit}>
    <SelectBox required={true} value={Obj.room} label="Room" name={"room"} data={["Training Room","Conference Room","HR Room","Monitor Room"]} onChange={onTextChange}	/>
    <TextBox   required={true} value={Obj.name} label="Name" name={"name"} type={"text"} onChange={onTextChange}></TextBox>
    <TextBox   required={true} value={Obj.description} label="Meeting Desciption" name={"description"}  type={"text"} onChange={onTextChange}></TextBox>
    <CustDatePicker required={true} minDate={new Date()} label="Date" value={Obj.dt} onChange={(e)=>{onTextChange({target:{name:"dt",value:e}})}}/>
    <TimeCard value={Obj.time} onSelect={(e)=>{onTextChange({target:{name:"time",value:e}})}}/>
    <input className="input" type="submit"/>
    
  </form> 
</div>
  );
}
export default memo(ScheduleForm);
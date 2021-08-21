import React,{memo,useState} from 'react';
import { Card, Grid, Paper } from '@material-ui/core';
import SelectBox from '../../Component/SelectBox';
import TextBox from '../../Component/TextBox'
import './style.css'
import {CreateEvent} from '../Constant';
import CustDatePicker from '../../Component//DatePicker';
import TimeCard from '../../Component//TimeCard';
const times=[
  "10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM",
  "01:30 PM","02:30 PM","02:00 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM",
  "05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM"
  ]

const ScheduleForm=()=> {

  const [Obj, setObj] = useState({
    dt:new Date(),
    time:'10:00 AM',
    name:'',
    description:'',
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
<Card>  
  <form className="form" onSubmit={handleSubmit}>
    <SelectBox required={true} value={Obj.room} label="Room" name={"room"} data={["Training Room","Conference Room","HR Room","Monitor Room"]} onChange={onTextChange}	/>
    <TextBox   required={true} value={Obj.name} label="Name" name={"name"} type={"text"} onChange={onTextChange}></TextBox>
    <TextBox   required={true} value={Obj.description} label="Meeting Desciption" name={"description"}  type={"text"} onChange={onTextChange}></TextBox>
    <CustDatePicker required={true} minDate={new Date()} label="Date" value={Obj.dt} onChange={(e)=>{onTextChange({target:{name:"dt",value:e}})}}/>
    <TimeCard data={times} value={Obj.time} onSelect={(e)=>{onTextChange({target:{name:"time",value:e}})}}/>
    <input className="input" type="submit"/>
  </form> 
  </Card>
  );
}
export default memo(ScheduleForm);
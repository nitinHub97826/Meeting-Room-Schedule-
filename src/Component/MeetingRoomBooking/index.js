import React,{memo} from 'react';
import ScheduleForm from './ScheduleForm';
import './style.scss'
const MeetingRoomBooking=(props)=> {
  
/**********************For run this visit ./src/MeetingRoomBooking/Constant***************************************/

  return (
      <section className="MeetingRoomBooking">
        <ScheduleForm {...props} />
      </section>   
  );
}
export default memo(MeetingRoomBooking);

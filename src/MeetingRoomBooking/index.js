import React,{memo} from 'react';
import ScheduleForm from './ScheduleForm';
import './style.scss'
const MeetingRoomBooking=()=> {
  
/**********************For run this visit ./src/MeetingRoomBooking/Constant***************************************/

  return (
      <section className="MeetingRoomBooking">
        <ScheduleForm />
      </section>   
  );
}
export default memo(MeetingRoomBooking);

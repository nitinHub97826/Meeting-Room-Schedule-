import React,{memo} from 'react';
import ScheduleForm from './ScheduleForm';
import './style.css'
const MeetingRoomBooking=()=> {
  return (
      <section className="MeetingRoomBooking">
        <header className={"application-header"}>
            Meeting Room Booking
        </header>
        <ScheduleForm />
    </section>


    
  );
}
export default memo(MeetingRoomBooking);

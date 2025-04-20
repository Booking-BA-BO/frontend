import React from 'react'
import EventForm from "../components/EventForm";
import EventCreationOptions from '../components/EventCreationOptions';
import "../style/ModifyEvent.css";

function ModifyEvent() {
  return (
    <div className='modify-event-container'>
      <div className='event-creation-options-MAIN'>
        <EventCreationOptions />
      </div>
      <div className='event-form-MAIN'>
      <EventForm />
      </div>      
    </div>
  )
}

export default ModifyEvent;
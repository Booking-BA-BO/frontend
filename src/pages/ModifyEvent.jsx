import React from 'react'
import EventForm from "../components/EventForm";
import EventCreationOptions from '../components/EventCreationOptions';

function ModifyEvent() {
  return (
    <div>
      <div>
        <EventCreationOptions />
      </div>
      <div>
      <EventForm />
      </div>      
    </div>
  )
}

export default ModifyEvent;
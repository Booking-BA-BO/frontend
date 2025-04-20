import React from 'react'
import EventForm from "../components/EventForm";
import EventCreationOptions from '../components/EventCreationOptions';
import AddHostEvent from '../components/AddHostEvent';

function ModifyEventHost() {
  return (
    <div>
      <div>
        <EventCreationOptions />
      </div>
      <div>
      <AddHostEvent />
      </div>      
    </div>
  )
}

export default ModifyEventHost;
import { useState } from 'react';
import Calendar from 'react-calendar';

function Calendar() {

  return (
    <div>
      <Calendar onChange={onChange} value={value}/>
    </div>
  );
}
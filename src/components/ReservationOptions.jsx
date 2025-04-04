import React from 'react'

function ReservationOptions(props) {
  return (
    <div className='reservation-option-card'>
      <h5>{props.elem.nev}</h5>
      <h6>{props.elem.hely}</h6>
      <h6>{props.elem.ar}ft
      <button className='reservation-right-button'>+</button>
      </h6>
    </div>
  )
}

export default ReservationOptions
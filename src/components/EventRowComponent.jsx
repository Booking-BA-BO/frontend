import React from 'react'

const EventRowComponent = (props) => {
    return (
        <tbody>
        <tr>
            <td>{props.elem.nev}</td>
            <td>{props.elem.ar}</td>
            <td>{props.elem.hely}</td>
            <td>{props.elem.foglalastol}</td>
            <td>{props.elem.kapacitas}</td>
            <td><a href={'/modifyevent/' + props.elem.esemeny_id}>✏️</a></td>
        </tr>
        </tbody>
    );
  };


export default EventRowComponent
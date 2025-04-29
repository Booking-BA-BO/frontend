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
            <td><a href={'/modifyevent/' + props.elem.esemeny_id}>
                <img src="/icons/ceruza.svg" alt="ceruza ikon" className="ikon" style={{width: '20px', height: '20px', display: 'inline-block'}}/>
            </a></td>
        </tr>
        </tbody>
    );
  };


export default EventRowComponent
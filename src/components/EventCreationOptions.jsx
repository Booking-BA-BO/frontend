import React from 'react'
import { useParams } from 'react-router-dom';
import "../style/EventCreationOptions.css";

function EventCreationOptions() {
    const { event_id } = useParams();
    return (
            <nav className='event-creation-options-nav'>
                <ul className='event-creation-options-list'>
                    <li className='event-creation-options-list-item'>
                        <a href={'/modifyevent/'+ event_id}>Törzsadatok szerkesztése</a>
                    </li>
                    <li className='event-creation-options-list-item'>
                        <a href={'/event-hosts/'+ event_id}>Esemény időpontjai</a>
                    </li>
                    <li className='event-creation-options-list-item'>
                        <a href={'/reservations/'+ event_id}>Foglalások kezelése</a>
                    </li>
                </ul>
            </nav>
    )
}

export default EventCreationOptions;
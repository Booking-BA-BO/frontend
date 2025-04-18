import React from 'react'
import { useParams } from 'react-router-dom';

function EventCreationOptions() {
    const { event_id } = useParams();
    return (
            <nav>
                <ul>
                    <li>
                        <a href={'/modifyevent/'+ event_id}>Törzsadatok szerkesztése</a>
                    </li>
                    <li>
                        <a href={'/event-hosts/'+ event_id}>Esemény időpontjai</a>
                    </li>
                    <li>
                        <a href={'/reservations/'+ event_id}>Foglalások kezelése</a>
                    </li>
                </ul>
            </nav>
    )
}

export default EventCreationOptions;
import React from 'react'

function EventCreationOptions() {
    return (
            <nav>
                <ul>
                    <li>
                        <a href="/event-form">Törzsadatok szerkesztése</a>
                    </li>
                    <li>
                        <a href="/event-hosts">Esemény időpontjai</a>
                    </li>
                    <li>
                        <a href="/reservations">Foglalások kezelése</a>
                    </li>
                </ul>
            </nav>
    )
}

export default EventCreationOptions;
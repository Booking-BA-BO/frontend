import React from "react";
import EventCreationOptions from "../components/EventCreationOptions";
import "../style/ModifyEventHost.css";
import Reservations from "../components/Reservations";

function ModifyReservaationHost() {
  return (
    <div className="modify-event-container">
      <div className="event-creation-options-MAIN">
        <EventCreationOptions />
      </div>
      <div className="add-host-event-MAIN">
        <Reservations />
      </div>
    </div>
  );
}

export default ModifyReservaationHost;

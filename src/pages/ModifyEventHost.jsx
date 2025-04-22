import React from "react";
import EventCreationOptions from "../components/EventCreationOptions";
import AddHostEvent from "../components/AddHostEvent";
import "../style/ModifyEventHost.css";

function ModifyEventHost() {
  return (
    <div className="modify-event-container">
      <div className="event-creation-options-MAIN">
        <EventCreationOptions />
      </div>
      <div className="add-host-event-MAIN">
        <AddHostEvent />
      </div>
    </div>
  );
}

export default ModifyEventHost;

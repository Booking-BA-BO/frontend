import React from "react";
import useApiContext from "../Context/ApiContext";
import EventRowComponent from "./EventRowComponent";
import "../style/EventTable.css";

function ProfileEventComponent() {
  const { esemenyek } = useApiContext();
  return (
    <>
      <table className="minden-esemeny-tabla">
        <thead className="minden-esemeny-tabla-fejlec">
          <tr className="minden-esemeny-tabla-fejlec-sor">
            <th>Név</th>
            <th>Ár</th>
            <th>Hely</th>
            <th>Idő</th>
            <th>Kapacitás</th>
            <th>Szerkesztés</th>
          </tr>
        </thead>
        {esemenyek.map((elem, index) => {
          return <EventRowComponent elem={elem} key={index} index={index} />;
        })}
      </table>
    </>
  );
}

export default ProfileEventComponent;

import React from "react";
import useApiContext from "../Context/ApiContext";
import "../style/EventTable.css";
import { useParams } from "react-router-dom";

function Reservations() {
    const { event_id } = useParams();
    useApiContext().getAllEventDates(event_id)
    const { esemenyDatumok } = useApiContext();

  return (
      <table className="minden-esemeny-tabla">
        <thead className="minden-esemeny-tabla-fejlec">
          <tr className="minden-esemeny-tabla-fejlec-sor">
            <th>Dátum</th>
            <th>Nyitva</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {esemenyDatumok.map((elem, index) => (
            <tr key={index}>
              <td>{elem.datum}</td>
              <td>{elem.nyitva ? "Igen" : "Nem"}</td>
                <td>
                    <button className="nyito-gomb">{elem.nyitva ? "Zárás" : "Nyitás"}</button>
                </td>
            </tr>
            
          ))}
        </tbody>
      </table>
  );
}

export default Reservations;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { myAxios } from "../api/axios";
import ReservationOptions from "../components/ReservationOptions";
import "../style/reservation.css";
import CardComponent from "../components/CardComponent";

function ReservationPage() {
  const { endpoint } = useParams();
  const [ hostUser, setUser] = useState([]);
  const [events, setEvents] = useState([]);

  const getAdat = async (vegpont, asyFgv) => {
    try {
      const response = await myAxios.get(vegpont);
      asyFgv([...response.data]);
    } catch (err) {
      console.log(err);
      console.log(vegpont);
    }
  };

  useEffect(() => {
    getAdat(`/api/reservation/${endpoint}`, setEvents);
    getAdat(`/api/user/${endpoint}`, setUser);
  }, [endpoint]);

  console.log(hostUser)

  return (
    <>
      <div className="reservation-container">
        <h1>Foglalj most {hostUser.name} eseményeire!</h1>
        <h2>Válassz a meghirdetett események közül:</h2>
        <div>
          {events.map((elem, index) => {
            return <CardComponent elem={elem} key={index} index={index} />;
          })}
        </div>
        <h2>Jelentkezz!</h2>
        <form action="#">
          <label htmlFor="name">Név</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Írd be a neved"
            required
          ></input>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email címed"
            required
          ></input>

          <label htmlFor="phone">Telefon</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Telefonszám"
            required
            pattern="[0-9]{10}"
            title="10 számjegyű telefonszám"
          ></input>

          <label htmlFor="quantity">Mennyiség</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="Add meg a mennyiséget"
            required
          ></input>

          <button type="submit">Jelentkezem</button>
        </form>
      </div>
    </>
  );
}

export default ReservationPage;

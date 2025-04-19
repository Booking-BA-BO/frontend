import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { myAxios } from "../api/axios";
import ReservationOptions from "../components/ReservationOptions";
import "../style/reservation.css";
import MyCalendar from "../components/Calendar";

function ReservationPage() {
  const { endpoint } = useParams();
  const [user, setUser] = useState([]);
  const [events, setEvents] = useState([]);
  const [times, setTimes] = useState([]);
  

  const getAdat = async (vegpont, asyFgv) => {
    try {
      const response = await myAxios.get(vegpont);
      asyFgv([...response.data]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAdat(`/api/reservation/${endpoint}`, setEvents);
    getAdat(`/api/user-data/${endpoint}`, setUser);
    getAdat(`/api/all-host-dates/${endpoint}`, setTimes);
  }, [endpoint]);
  return (
    <>
      <div className="reservation-container">
        <h1>Foglalj most {user[0]?.name} eseményeire!</h1>
        <h2>Válassz a meghirdetett események közül:</h2>
        <div className="reservation-options-container">
          {events.map((elem, index) => {
            return <ReservationOptions elem={elem} key={index} index={index} />;
          })}
        </div>

        <div>
          <MyCalendar times={times}/>;
        </div>

        <h2>Jelentkezz!</h2>

        <div className="date-time-picker-container"></div>

        <div className="reservation-form-div">
          <form action="#" className="reservation-form">
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

            <button type="submit" className="reservation-form-button">
              Jelentkezem
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ReservationPage;

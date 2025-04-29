import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { myAxios } from "../api/axios";
import ReservationOptions from "../components/ReservationOptions";
import "../style/reservation.css";
import MyCalendar from "../components/Calendar";
import { sendEmail } from "../components/MailSender";

function ReservationPage() {
  const { endpoint } = useParams();
  const [userData, setUserData] = useState([]);
  const [events, setEvents] = useState([]);
  const [times, setTimes] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
  });

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
    getAdat(`/api/user-data/${endpoint}`, setUserData);
    getAdat(`/api/all-host-dates/${endpoint}`, setTimes);
  }, [endpoint]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendEmail({ email: formData.email });
    alert('Email sikeresen elküldve!');
  };

  return (
    <>
      <div className="reservation-container">
        <h1>Foglalj most {userData[0]?.name} eseményeire!</h1>
        <h2>Válassz a meghirdetett események közül:</h2>

        <div className="reservation-options-container">
          {events.map((elem, index) => (
            <ReservationOptions elem={elem} key={index} index={index} />
          ))}
        </div>

        <div>
          <MyCalendar times={times} />
        </div>

        <h2>Jelentkezz!</h2>

        <div className="date-time-picker-container"></div>

        <div className="reservation-form-div">
          <form action="#" className="reservation-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Név</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Írd be a neved"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email címed"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="phone">Telefon</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Telefonszám"
              required
              pattern="[0-9]{11}"
              title="11 számjegyű telefonszám"
              value={formData.phone}
              onChange={handleChange}
            />

            <label htmlFor="quantity">Mennyiség</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              placeholder="Add meg a mennyiséget"
              required
              value={formData.quantity}
              onChange={handleChange}
            />

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

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { myAxios } from "../api/axios";
import axios from "axios";
import "../style/EventForm.css";

function EventForm() {
  const { event_id } = useParams();
  const [eventData, setEventData] = useState([]);
  const [formData, setFormData] = useState({
    nev: "",
    leiras: "",
    hely: "",
    kapacitas: "",
    ar: "",
    foglalastol: "",
    foglalasig: "",
  });

  const getAdat = async (vegpont, asyFgv) => {
    try {
      const response = await myAxios.get(vegpont);
      asyFgv([...response.data]);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAdat(`/api/specific-events/${event_id}`, setEventData);
  }, [event_id]);

  useEffect(() => {
    if (eventData.length > 0) {
      setFormData({
        nev: eventData[0].nev || "",
        leiras: eventData[0].leiras || "",
        hely: eventData[0].hely || "",
        kapacitas: eventData[0].kapacitas || "",
        ar: eventData[0].ar || "",
        foglalastol: eventData[0].foglalastol || "",
        foglalasig: eventData[0].foglalasig || "",
      });
    }
  }, [eventData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`/api/modify-event/${event_id}`, {
        nev: formData.nev,
        leiras: formData.leiras,
        hely: formData.hely,
        kapacitas: formData.kapacitas,
        ar: formData.ar,
        foglalastol: formData.foglalastol,
        foglalasig: formData.foglalasig,
      });
    } catch (err) {
      console.error("Nem sikerült menteni az eseményt", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <div className="form-group nev">
        <label htmlFor="nev">Név</label>
        <input
          type="text"
          id="nev"
          name="nev"
          value={formData.nev}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group leiras">
        <label htmlFor="leiras">Leírás</label>
        <textarea
          id="leiras"
          name="leiras"
          rows="5"
          value={formData.leiras}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group hely">
        <label htmlFor="hely">
          Hely
          <span
            className="info-icon"
            data-tooltip="Hogyha ez egy online esemény, ide rakhatod a meeting linket"
          >
            ℹ️
          </span>
        </label>
        <input
          type="text"
          id="hely"
          name="hely"
          value={formData.hely}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group kapacitas">
        <label htmlFor="kapacitas">Kapacitás</label>
        <input
          type="number"
          id="kapacitas"
          name="kapacitas"
          min="0"
          value={formData.kapacitas}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group ar">
        <label htmlFor="ar">Ár</label>
        <input
          type="number"
          id="ar"
          name="ar"
          min="0"
          value={formData.ar}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group foglalastol">
        <label htmlFor="foglalastol">
          Foglalástól
          <span
            className="info-icon"
            data-tooltip="Tehát, ha 90 napot adsz meg, akkor az esemény megrendezési dátuma előtti 90 naptól lehet majd jegyet foglalni."
          >
            ℹ️
          </span>
        </label>
        <input
          type="number"
          id="foglalastol"
          name="foglalastol"
          min="0"
          value={formData.foglalastol}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group foglalasig">
        <label htmlFor="foglalasig">
          Foglalásig
          <span
            className="info-icon"
            data-tooltip="Tehát, ha 1 napot adsz meg, akkor az esemény megrendezési dátuma előtti 1 napig lehet majd jegyet foglalni."
          >
            ℹ️
          </span>
        </label>
        <input
          type="number"
          id="foglalasig"
          name="foglalasig"
          min="0"
          value={formData.foglalasig}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group submit">
        <button type="submit">Módosítások mentése</button>
      </div>
    </form>
  );
}

export default EventForm;

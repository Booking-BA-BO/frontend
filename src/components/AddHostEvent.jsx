import React, { useState } from "react";
import {
  addMinutes,
  format,
  isBefore,
  isSameDay,
  eachDayOfInterval,
} from "date-fns";
import { useParams } from "react-router-dom";
import "../style/AddHostEvent.css";

const napokMap = [
  "Hétfő",
  "Kedd",
  "Szerda",
  "Csütörtök",
  "Péntek",
  "Szombat",
  "Vasárnap",
];

const AddHostEvent = () => {
  const event_id = useParams();
  const [kezdoDatum, setKezdoDatum] = useState("");
  const [vegDatum, setVegDatum] = useState("");
  const [napok, setNapok] = useState([]);
  const [tolIdo, setTolIdo] = useState("");
  const [igIdo, setIgIdo] = useState("");
  const [intervallum, setIntervallum] = useState("");
  const [mutasdSzunet, setMutasdSzunet] = useState(false);
  const [szunet, setSzunet] = useState("");
  const [esemenyek, setEsemenyek] = useState([]);

  const handleNapValtas = (nap) => {
    if (napok.includes(nap)) {
      setNapok(napok.filter((n) => n !== nap));
    } else {
      setNapok([...napok, nap]);
    }
  };

  const handleKezdoDatumValtas = (e) => {
    const value = e.target.value;
    setKezdoDatum(value);
    setVegDatum(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validáció
    if (!kezdoDatum || !vegDatum || !tolIdo || !igIdo || !intervallum) {
      console.warn("Hiányzó mezők. Kérlek tölts ki minden kötelező mezőt.");
      return;
    }

    const intervallumPerc = parseInt(intervallum, 10);
    const szunetPerc = szunet ? parseInt(szunet, 10) : 0;

    if (intervallumPerc <= 0) {
      console.warn("Az intervallum értéke érvénytelen.");
      return;
    }

    const kezdIdo = new Date(`${kezdoDatum}T${tolIdo}`);
    const vegIdo = new Date(`${kezdoDatum}T${igIdo}`);

    if (kezdIdo >= vegIdo) {
      console.warn(
        "A kezdési időnek korábbinak kell lennie, mint a zárási idő."
      );
      return;
    }

    const eredmeny = [];
    const kulonbseg = (vegIdo - kezdIdo) / 60000;

    if (kezdoDatum === vegDatum && kulonbseg >= intervallumPerc) {
      let aktualisKezdes = new Date(`${kezdoDatum}T${tolIdo}`);
      const aktualisVeg = new Date(`${kezdoDatum}T${igIdo}`);

      while (isBefore(aktualisKezdes, aktualisVeg)) {
        const esemenyKezdes = aktualisKezdes;
        const esemenyVege = addMinutes(esemenyKezdes, intervallumPerc);

        if (
          isBefore(esemenyVege, aktualisVeg) ||
          +esemenyVege === +aktualisVeg
        ) {
          eredmeny.push({
            datum: format(esemenyKezdes, "yyyy-MM-dd HH:mm:ss"),
            kezdes: format(esemenyKezdes, "HH:mm"),
            befejezes: format(esemenyVege, "HH:mm"),
            nyitva: 0,
          });
          aktualisKezdes = addMinutes(esemenyVege, szunetPerc);
        } else {
          break;
        }
      }
    } else {
      const napokLista = eachDayOfInterval({
        start: new Date(kezdoDatum),
        end: new Date(vegDatum),
      });

      napokLista.forEach((napDatum) => {
        const napIndex = napDatum.getDay();
        const napNeve = napokMap[napIndex === 0 ? 6 : napIndex - 1];

        if (napok.includes(napNeve)) {
          const baseDatum = format(napDatum, "yyyy-MM-dd");
          let aktualisKezdes = new Date(`${baseDatum}T${tolIdo}`);
          const aktualisVeg = new Date(`${baseDatum}T${igIdo}`);

          while (
            isBefore(
              addMinutes(aktualisKezdes, intervallumPerc),
              aktualisVeg
            ) ||
            isSameDay(aktualisKezdes, aktualisVeg)
          ) {
            const esemenyKezdes = aktualisKezdes;
            const esemenyVege = addMinutes(esemenyKezdes, intervallumPerc);

            if (
              isBefore(esemenyVege, aktualisVeg) ||
              +esemenyVege === +aktualisVeg
            ) {
              eredmeny.push({
                datum: format(esemenyKezdes, "yyyy-MM-dd HH:mm:ss"),
                kezdes: format(esemenyKezdes, "HH:mm"),
                befejezes: format(esemenyVege, "HH:mm"),
                nyitva: 0,
              });

              aktualisKezdes = addMinutes(esemenyVege, szunetPerc);
            } else {
              break;
            }
          }
        }
      });
    }

    console.log("Küldött adatok minden egyes eseményhez:");

    eredmeny.forEach((esemeny, index) => {
      console.log(`Küldés ${index + 1}. esemény:`, {
        esemeny_id: event_id.event_id,
        datum: esemeny.datum,
        kezdes: esemeny.kezdes,
        befejezes: esemeny.befejezes,
        nyitva: esemeny.nyitva,
      });

      fetch("/api/add-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          esemeny_id: event_id.event_id,
          datum: esemeny.datum,
          kezdes: esemeny.kezdes,
          befejezes: esemeny.befejezes,
          nyitva: esemeny.nyitva,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(`${index + 1}. esemény sikeresen mentve:`, data);
        })
        .catch((error) => {
          console.error(
            `${index + 1}. esemény küldése közben hiba történt:`,
            error
          );
        });
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-mentes">
      <label className="label-kezdo-datum">
        Kezdő dátum (tól):
        <input
          type="date"
          value={kezdoDatum}
          onChange={handleKezdoDatumValtas}
          className="input-kezdo-datum"
        />
      </label>
      <br />

      <label className="label-veg-datum">
        Vég dátum (ig):
        <input
          type="date"
          value={vegDatum}
          onChange={(e) => setVegDatum(e.target.value)}
          className="input-veg-datum"
        />
      </label>
      <br />

      <fieldset
        disabled={kezdoDatum === vegDatum || !kezdoDatum || !vegDatum}
        className="fieldset-napok"
      >
        <legend className="legend-napok">Választható napok:</legend>
        {napokMap.map((nap) => (
          <label
            key={nap}
            className={`checkbox-nap checkbox-nap-${nap.toLowerCase()}`}
          >
            <input
              type="checkbox"
              checked={napok.includes(nap)}
              onChange={() => handleNapValtas(nap)}
              className="input-nap"
            />
            {nap}
          </label>
        ))}
      </fieldset>
      <br />

      <label className="label-tol-ido">
        Óra (ettől):
        <input
          type="time"
          value={tolIdo}
          onChange={(e) => setTolIdo(e.target.value)}
          className="input-tol-ido"
        />
      </label>
      <br />

      <label className="label-ig-ido">
        Óra (eddig):
        <input
          type="time"
          value={igIdo}
          onChange={(e) => setIgIdo(e.target.value)}
          className="input-ig-ido"
        />
      </label>
      <br />

      <label className="label-intervallum">
        Intervallum (perc):
        <input
          type="number"
          value={intervallum}
          onChange={(e) => setIntervallum(e.target.value)}
          placeholder="pl. 90"
          className="input-intervallum"
        />
      </label>
      <br />

      <button
        type="button"
        onClick={() => setMutasdSzunet(!mutasdSzunet)}
        className="button-toggle-szunet"
      >
        {mutasdSzunet
          ? "− Szünet elrejtése"
          : "+ Események közti szünet hozzáadása"}
      </button>

      {mutasdSzunet && (
        <>
          <br />
          <label className="label-szunet">
            Szünet (perc):
            <input
              type="number"
              value={szunet}
              onChange={(e) => setSzunet(e.target.value)}
              placeholder="pl. 30"
              className="input-szunet"
            />
          </label>
        </>
      )}
      <br />
      <br />

      <button type="submit" className="button-mentes">
        Mentés
      </button>
    </form>
  );
};

export default AddHostEvent;

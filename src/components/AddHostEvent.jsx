import React, { useState } from 'react';
import { addMinutes, format, isBefore, isSameDay, eachDayOfInterval } from 'date-fns';

const napokMap = ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat', 'Vasárnap'];

const AddHostEvent = () => {
  const [kezdoDatum, setKezdoDatum] = useState('');
  const [vegDatum, setVegDatum] = useState('');
  const [napok, setNapok] = useState([]);
  const [tolIdo, setTolIdo] = useState('');
  const [igIdo, setIgIdo] = useState('');
  const [intervallum, setIntervallum] = useState('');
  const [mutasdSzunet, setMutasdSzunet] = useState(false);
  const [szunet, setSzunet] = useState('');
  const [esemenyek, setEsemenyek] = useState([]);

  const today = format(new Date(), 'yyyy-MM-dd'); // Mai dátum formázása

  const handleNapValtas = (nap) => {
    if (napok.includes(nap)) {
      setNapok(napok.filter(n => n !== nap));
    } else {
      setNapok([...napok, nap]);
    }
  };

  const handleKezdoDatumValtas = (e) => {
    const value = e.target.value;
    setKezdoDatum(value);
    setVegDatum(value); // automatikus szinkron
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validáció
    if (!kezdoDatum || !vegDatum || !tolIdo || !igIdo || !intervallum) {
      console.warn('Hiányzó mezők. Kérlek tölts ki minden kötelező mezőt.');
      return;
    }

    const intervallumPerc = parseInt(intervallum, 10);
    const szunetPerc = szunet ? parseInt(szunet, 10) : 0;

    if (intervallumPerc <= 0) {
      console.warn('Az intervallum értéke érvénytelen.');
      return;
    }

    const kezdIdo = new Date(`${kezdoDatum}T${tolIdo}`);
    const vegIdo = new Date(`${kezdoDatum}T${igIdo}`);

    if (kezdIdo >= vegIdo) {
      console.warn('A kezdési időnek korábbinak kell lennie, mint a zárási idő.');
      return;
    }

    // Ha több napos és nincs kiválasztva nap
    if (kezdoDatum !== vegDatum && napok.length === 0) {
      console.warn('Több napos tartomány esetén legalább egy napot ki kell választani.');
      return;
    }

    const eredmeny = [];

    const kulonbseg = (vegIdo - kezdIdo) / 60000;

    if (kezdoDatum === vegDatum && kulonbseg >= intervallumPerc) {
      // Ha ugyanazon a napon több eseményt szeretnénk
      let aktualisKezdes = new Date(`${kezdoDatum}T${tolIdo}`);
      const aktualisVeg = new Date(`${kezdoDatum}T${igIdo}`);
      
      while (isBefore(aktualisKezdes, aktualisVeg)) {
        const esemenyKezdes = aktualisKezdes;
        const esemenyVege = addMinutes(esemenyKezdes, intervallumPerc);

        if (isBefore(esemenyVege, aktualisVeg) || +esemenyVege === +aktualisVeg) {
          eredmeny.push({
            datum: kezdoDatum,
            kezdes: format(esemenyKezdes, 'HH:mm'),
            befejezes: format(esemenyVege, 'HH:mm'),
          });

          // Állítsuk be a következő esemény kezdetét
          aktualisKezdes = addMinutes(esemenyVege, szunetPerc); // Szünettel, ha van
        } else {
          break;
        }
      }
    } else {
      const napokLista = eachDayOfInterval({
        start: new Date(kezdoDatum),
        end: new Date(vegDatum)
      });

      napokLista.forEach((napDatum) => {
        const napIndex = napDatum.getDay(); // 0-6
        const napNeve = napokMap[napIndex === 0 ? 6 : napIndex - 1];

        if (napok.includes(napNeve)) {
          const baseDatum = format(napDatum, 'yyyy-MM-dd');
          let aktualisKezdes = new Date(`${baseDatum}T${tolIdo}`);
          const aktualisVeg = new Date(`${baseDatum}T${igIdo}`);

          while (isBefore(aktualisKezdes, aktualisVeg) || isSameDay(aktualisKezdes, aktualisVeg)) {
            const esemenyKezdes = aktualisKezdes;
            const esemenyVege = addMinutes(esemenyKezdes, intervallumPerc);

            if (isBefore(esemenyVege, aktualisVeg) || +esemenyVege === +aktualisVeg) {
              eredmeny.push({
                datum: baseDatum,
                kezdes: format(esemenyKezdes, 'HH:mm'),
                befejezes: format(esemenyVege, 'HH:mm'),
              });

              aktualisKezdes = addMinutes(esemenyVege, szunetPerc);
            } else {
              break;
            }
          }
        }
      });
    }

    // 🔥 Végső eredmény kiírás konzolra
    console.log('✅ Validált események:', eredmeny);
    setEsemenyek(eredmeny);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Kezdő dátum (tól):
        <input type="date" value={kezdoDatum} onChange={handleKezdoDatumValtas} min={today} />
      </label>
      <br />

      <label>
        Vég dátum (ig):
        <input type="date" value={vegDatum} onChange={(e) => setVegDatum(e.target.value)} min={today} />
      </label>
      <br />

      <fieldset disabled={kezdoDatum === vegDatum || !kezdoDatum || !vegDatum}>
        <legend>Választható napok:</legend>
        {napokMap.map((nap) => (
          <label key={nap}>
            <input
              type="checkbox"
              checked={napok.includes(nap)}
              onChange={() => handleNapValtas(nap)}
            />
            {nap}
          </label>
        ))}
      </fieldset>
      <br />

      <label>
        Óra (ettől):
        <input type="time" value={tolIdo} onChange={(e) => setTolIdo(e.target.value)} />
      </label>
      <br />

      <label>
        Óra (eddig):
        <input type="time" value={igIdo} onChange={(e) => setIgIdo(e.target.value)} />
      </label>
      <br />

      <label>
        Intervallum (perc):
        <input
          type="number"
          value={intervallum}
          onChange={(e) => setIntervallum(e.target.value)}
          placeholder="pl. 90"
        />
      </label>
      <br />

      <button type="button" onClick={() => setMutasdSzunet(!mutasdSzunet)}>
        {mutasdSzunet ? '− Szünet elrejtése' : '+ Események közti szünet hozzáadása'}
      </button>

      {mutasdSzunet && (
        <>
          <br />
          <label>
            Szünet (perc):
            <input
              type="number"
              value={szunet}
              onChange={(e) => setSzunet(e.target.value)}
              placeholder="pl. 30"
            />
          </label>
        </>
      )}
      <br /><br />

      <button type="submit">Mentés</button>
    </form>
  );
};

export default AddHostEvent;

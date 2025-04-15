import React, { useState } from "react";
import { useContext } from "react";
import useApiContext from "../Context/ApiContext";
import { AppContext } from "../Context/AppContext";

const NewForm = () => {
  const { postAdat } = useApiContext();
  const { user } = useContext(AppContext);

  const [formData, setFormData] = useState({
    nev: "",
    leiras: "",
    hely: "",
    kapacitas: "",
    ar: "",
    foglalastol: "",
    foglalasig: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.nev.trim()) newErrors.nev = "A név megadása kötelező!";
    if (!formData.leiras.trim())
      newErrors.leiras = "A leírás megadása kötelező!";
    if (!formData.hely.trim()) newErrors.hely = "A hely megadása kötelező!";
    if (!formData.kapacitas || formData.kapacitas <= 0)
      newErrors.kapacitas = "A kapacitásnak nagyobbnak kell lennie 0-nál!";
    if (!formData.ar || formData.ar < 0)
      newErrors.ar = "Az ár nem lehet negatív!";
    if (!formData.foglalastol || formData.foglalastol <= 0)
      newErrors.foglalastol = "A foglalás kezdete nagyobb kell legyen 0-nál!";
    if (!formData.foglalasig || formData.foglalasig >= formData.foglalastol)
      newErrors.foglalasig =
        "A foglalás végének kisebbnek kell lennie a kezdő dátumnál!";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const dataToSend = {
        ...formData,
        user_id: user?.id,
        foglalastol: formData.foglalastol || 90,
        foglalasig: formData.foglalasig || 1,
      };

      try {
        await postAdat("/api/new-event", dataToSend);
        console.log("Esemény sikeresen mentve!");
        setFormData({
          nev: "",
          leiras: "",
          hely: "",
          kapacitas: "",
          ar: "",
          foglalastol: "",
          foglalasig: "",
        });
      } catch (err) {
        console.error("Nem sikerült menteni az eseményt", err);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <h2> Tervezz új eseményt:</h2>
      <form onSubmit={handleSubmit}>
        <div className="whole-form-container">
          <div className="left-container">
            <div className="mb-3">
              <label htmlFor="nev" className="form-label">
                Név:
              </label>
              <input
                type="text"
                id="nev"
                name="nev"
                className="form-control"
                value={formData.nev}
                onChange={handleChange}
                placeholder="Add meg a típus nevét!"
              />
              {errors.nev && <p className="error">{errors.nev}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="leiras" className="form-label">
                Leírás:
              </label>
              <textarea
                id="leiras"
                name="leiras"
                className="form-control text-area"
                value={formData.leiras}
                onChange={handleChange}
                placeholder="Adj meg egy leírást!"
              />
              {errors.leiras && <p className="error">{errors.leiras}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="hely" className="form-label">
                Hely:
              </label>
              <div className="information">&#9432;</div>
              <div className="hide">
                Hogyha ez egy online esemény, ide rakhatod a meeting linket
              </div>
              <input
                type="text"
                id="hely"
                name="hely"
                className="form-control"
                value={formData.hely}
                onChange={handleChange}
                placeholder="Add meg a helyet!"
              />
              {errors.hely && <p className="error">{errors.hely}</p>}
            </div>
          </div>
          <div className="right-container">
            <div className="mb-3">
              <label htmlFor="kapacitas" className="form-label">
                Kapacitás:
              </label>
              <input
                type="number"
                id="kapacitas"
                name="kapacitas"
                className="form-control"
                value={formData.kapacitas}
                onChange={handleChange}
                placeholder="Adj meg egy kapacitást!"
              />
              {errors.kapacitas && <p className="error">{errors.kapacitas}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="ar" className="form-label">
                Ár:
              </label>
              <input
                type="number"
                id="ar"
                name="ar"
                className="form-control"
                value={formData.ar}
                onChange={handleChange}
                placeholder="Adj meg egy árat!"
              />
              {errors.ar && <p className="error">{errors.ar}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="foglalastol" className="form-label">
                Foglalás kezdete (ennyi nappal előtte):
              </label>
              <div className="information">&#9432;</div>
              <div className="hide">
                Tehát, ha 90 napot adsz meg, akkor az esemény megrendezési
                dátuma előtti 90 naptól lehet majd jegyet foglalni.{" "}
              </div>
              <input
                type="number"
                id="foglalastol"
                name="foglalastol"
                className="form-control"
                value={formData.foglalastol}
                onChange={handleChange}
                placeholder="pl: 90"
              />
              {errors.foglalastol && (
                <p className="error">{errors.foglalastol}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="foglalasig" className="form-label">
                Foglalás vége (ennyi nappal előtte):
              </label>
              <div className="information">&#9432;</div>
              <div className="hide">
                Tehát, ha 1 napot adsz meg, akkor az esemény megrendezési dátuma
                előtti 1 napig lehet majd jegyet foglalni.{" "}
              </div>
              <input
                type="number"
                id="foglalasig"
                name="foglalasig"
                className="form-control"
                value={formData.foglalasig}
                onChange={handleChange}
                placeholder="pl: 1"
              />
              {errors.foglalasig && (
                <p className="error">{errors.foglalasig}</p>
              )}
            </div>
          </div>
        </div>
        <button type="submit" className="btn w-100 submit-button">
          Mehet!
        </button>
      </form>
    </>
  );
};

export default NewForm;

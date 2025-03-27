import React, { useState } from "react";

const NewForm = () => {
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    field6: "",
    field7: "",
    field8: "",
    field9: "",
    field10: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
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
              <label htmlFor="field1" className="form-label">
                Mező 1:
              </label>
              <input
                type="text"
                id="field1"
                name="field1"
                className="form-control"
                value={formData.field1}
                onChange={handleChange}
                placeholder="Addj meg valamit"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="field2" className="form-label">
                Mező 2:
              </label>
              <input
                type="text"
                id="field2"
                name="field2"
                className="form-control"
                value={formData.field2}
                onChange={handleChange}
                placeholder="Addj meg valamit"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="field3" className="form-label">
                Mező 3:
              </label>
              <input
                type="text"
                id="field3"
                name="field3"
                className="form-control"
                value={formData.field3}
                onChange={handleChange}
                placeholder="Addj meg valamit"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="field4" className="form-label">
                Mező 4:
              </label>
              <input
                type="text"
                id="field4"
                name="field4"
                className="form-control"
                value={formData.field4}
                onChange={handleChange}
                placeholder="Addj meg valamit"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="field5" className="form-label">
                Mező 5:
              </label>
              <input
                type="text"
                id="field5"
                name="field5"
                className="form-control"
                value={formData.field5}
                onChange={handleChange}
                placeholder="Addj meg valamit"
              />
            </div>
          </div>
          <div className="right-container">
            <div className="mb-3">
              <label htmlFor="field6" className="form-label">
                Mező 6:
              </label>
              <input
                type="text"
                id="field6"
                name="field6"
                className="form-control"
                value={formData.field6}
                onChange={handleChange}
                placeholder="Addj meg valamit"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="field7" className="form-label">
                Mező 7:
              </label>
              <input
                type="text"
                id="field7"
                name="field7"
                className="form-control"
                value={formData.field7}
                onChange={handleChange}
                placeholder="Addj meg valamit"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="field8" className="form-label">
                Mező 8:
              </label>
              <input
                type="text"
                id="field8"
                name="field8"
                className="form-control"
                value={formData.field8}
                onChange={handleChange}
                placeholder="Addj meg valamit"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="field9" className="form-label">
                Mező 9:
              </label>
              <input
                type="text"
                id="field9"
                name="field9"
                className="form-control"
                value={formData.field9}
                onChange={handleChange}
                placeholder="Addj meg valamit"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="field10" className="form-label">
                Mező 10:
              </label>
              <input
                type="text"
                id="field10"
                name="field10"
                className="form-control"
                value={formData.field10}
                onChange={handleChange}
                placeholder="Addj meg valamit"
              />
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

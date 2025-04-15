import React, { useState } from "react";
import "../style/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faLocationDot, faEnvelope, faPhone, } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Server error');
      }
  
      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main>
        <div className="oldal">
        <div className="contact-us-location-container">
            <div className="elerhetosegek">
              <h2>Keress fel minket!</h2>
              <div className="hely">
                <h1 className="icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </h1>
                <p>1138. Budapest Gyöngyösi sétány 10. Feng Lai</p>
              </div>
              <div className="emailcim">
                <h1 className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </h1>
                <p>borsikaaa1@gmail.com</p>
              </div>
              <div className="telefonszam">
                <h1 className="icon">
                  <FontAwesomeIcon icon={faPhone} />
                </h1>
                <p>+36304029447</p>
              </div>
            </div>
          </div>
          <div className="contact-us-form-container">
            <h1 className="lepj-kapcsolatba">Lépj velünk kapcsolatba!</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-mezo">
                <input
                  type="text"
                  id="nev"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Név..."
                  required
                />
              </div>
              <div className="input-mezo">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email cím..."
                  required
                />
              </div>
              <div className="input-mezo">
                <textarea
                  id="leiras"
                  name="message"
                  className="form-control text-area"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Miben segíthetünk? Írj egy üzenetet..."
                  required
                />
                <div className="kuldes">
                  <button 
                    className="gomb" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Küldés folyamatban...' : 'Küldés'}
                  </button>
                </div>
                {submitStatus === 'success' && (
                  <p className="success-message">Üzenet elküldve! Hamarosan válaszolunk.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="error-message">Hiba történt az üzenet küldése közben. Kérjük, próbáld újra később.</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
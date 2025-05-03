import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

export default function Register() {
  const { setToken } = useContext(AppContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState({});

  async function handleRegister(e) {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    const data = await res.json();
  
    if (res.ok) {
      localStorage.setItem("token", data.token);
      setToken(data.token);
      navigate("/");
    } else {
      setErrors(data.errors);
    }
  }

  return (
    <>
      <div className="login-header">
        <h1>Vágjunk bele</h1>
        <p>
          Van már profilod?{" "}
          <a className="regisztraciosGomb" href="/login">
            Jelentkezz be!
          </a>
        </p>
      </div>
      <form className="formElem" onSubmit={handleRegister}>
        <div className="label">
          <p>Név</p>
        </div>
        <input
          className="login-input"
          type="text"
          placeholder="Lakatos Naruto"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <p className="text-danger">{errors.name[0]}</p>}
        <div className="label">
          <p>Email</p>
        </div>
        <input
          className="login-input"
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p className="text-danger">{errors.email[0]}</p>}
        <div className="label">
          <p>Jelszó</p>
        </div>
        <input
          className="login-input"
          type="password"
          placeholder="********"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {errors.password && <p className="text-danger">{errors.password[0]}</p>}
        <div className="label">
          <p>Jelszó megerősítés</p>
        </div>
        <input
          className="login-input"
          type="password"
          placeholder="********"
          value={formData.password_confirmation}
          onChange={(e) =>
            setFormData({
              ...formData,
              password_confirmation: e.target.value,
            })
          }
        />
        <button className="login-button">Regisztrálj!</button>
      </form>
    </>
  );
}

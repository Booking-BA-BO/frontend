import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

export default function Login() {
  const { setToken } = useContext(AppContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  async function handleLogin(e) {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "post",
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.errors) {
      setErrors(data.errors);
    } else {
      localStorage.setItem("token", data.token);
      setToken(data.token);
      navigate("/");
    }
  }

  return (
    <>
      <div className="login-header">
        <h1>Jelentkezz be!</h1>
        <p>
          Nincs még profilod? <a className="regisztraciosGomb" href="/register">Regisztrálj!</a>
        </p>
      </div>
      <form className="formElem" onSubmit={handleLogin}>
        <div className="label">
          <p>Email</p>
        </div>
        <input
          className="login-input"
          type="text"
          placeholder="email@mail.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p>{errors.email[0]}</p>}
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
        {errors.password && <p>{errors.password[0]}</p>}

        <button className="login-button">Jelentkezz Be!</button>
      </form>
    </>
  );
}

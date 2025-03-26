import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import "../style/Login.css";

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
          Nincs még profilod? <a href="/register">Regisztrálj!</a>
        </p>
      </div>
      <form onSubmit={handleLogin}>
        <input
          className="login-input"
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p>{errors.email[0]}</p>}

        <input
          className="login-input"
          type="password"
          placeholder="Password"
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

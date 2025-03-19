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
  <div className="container d-flex justify-content-center align-items-center min-vh-100">
    <div className="card shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
      <div className="card-body">
        <h1 className="card-title text-center mb-4">Jelentkezz be!</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && <p className="text-danger">{errors.email[0]}</p>}
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            {errors.password && <p className="text-danger">{errors.password[0]}</p>}
          </div>

          <button className="btn btn-primary w-100">Login</button>
        </form>
        <p className="text-center mt-3">
          Nincs még profilod? <a href="/register">Regisztrálj!</a>
        </p>
      </div>
    </div>
  </div>
</>

  );
}

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
/* import Galery from "./components/Galery"; */
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";

export default function App() {
  const { user } = useContext(AppContext);

  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={user ? <Home /> : <Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  /*   return (
    <>
      <Header/>
      <div className='loginsite'>
        <Galery />
        <Login/>
      </div>
    </>
  ) */
}

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cards from "./pages/Cards";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import Welcome from "./pages/Welcome";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

export default function App() {
  const { user } = useContext(AppContext);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={user ? <Cards /> : <Welcome />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={user ? <LoginPage /> : <LoginPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

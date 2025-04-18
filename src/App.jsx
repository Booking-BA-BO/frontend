import "./App.css";
import { Routes, Route } from "react-router-dom";

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
import Profil from "./pages/Profil";
import "./style/Profil.css";
import ModifyPage from "./pages/ModifyPage";
import AllEvents from "./pages/AllEventsPage";
import ReservationPage from "./pages/ReservationPage";
import HeaderNoAuth from "./components/HeaderNoAuth";
import ContactPage from "./pages/ContactPage";
import Faq from "./pages/Faq";
import ModifyEvent from "./pages/ModifyEvent";

export default function App() {
  const { user } = useContext(AppContext);
  return (
    <>
      {user ? <Header /> : <HeaderNoAuth />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={user ? <Cards /> : <Welcome />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={user ? <LoginPage /> : <LoginPage />} />
          <Route path="/profile" element={<Profil />} />
          <Route path="/profile/modify" element={<ModifyPage />} />
          <Route path="/profile/events" element={<AllEvents />} />
          <Route path="/:endpoint" element={<ReservationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/modifyevent/:event_id" element={<ModifyEvent />} />
          <Route path="/event-form" element={<ModifyEvent />} />
          <Route path="/event-hosts" element={<ModifyEvent />} />
          <Route path="/reservations" element={<ModifyEvent />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

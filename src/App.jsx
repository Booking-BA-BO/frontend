import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Cards from "./pages/Cards";
import Layout from "./layouts/Layout";
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
import ReservationLayout from "./layouts/ReservationLayout";
import Reservations from "./components/Reservations";
import ModifyReservationHost from "./pages/ModifyReservationHost";
import HeaderNoAuth from "./components/HeaderNoAuth";
import ContactPage from "./pages/ContactPage";
import Faq from "./pages/Faq";
import ModifyEvent from "./pages/ModifyEvent";
import ModifyEventHost from "./pages/ModifyEventHost";
import CalendarProfile from "./pages/CalendarProfile";
import Documentation from "./pages/Documentation";
import NotFound from "./pages/NotFound";
import ValidateEndpoint from "./components/ValidateEndpoint";


export default function App() {
  const { user } = useContext(AppContext);
  const location = useLocation();

  const isReservationRoute =
    /^\/[^/]+$/.test(location.pathname) &&
    ![
      "/login",
      "/register",
      "/profile",
      "/contact",
      "/faq",
      "/documentation"
    ].includes(location.pathname);

  return (
    <>
      {!isReservationRoute && (user ? <Header /> : <HeaderNoAuth />)}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={user ? <Cards /> : <Welcome />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<Profil />} />
          <Route path="/profile/modify" element={<ModifyPage />} />
          <Route path="/profile/calendar/:egyeni_vegpont" element={<CalendarProfile />} />
          <Route path="/profile/events" element={<AllEvents />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/modifyevent/:event_id" element={<ModifyEvent />} />
          <Route path="/event-hosts/:event_id" element={<ModifyEventHost />} />
          <Route path="/reservations/:event_id" element={<Reservations />} />
          <Route path="/reservation-hosts/:event_id" element={<ModifyReservationHost />} />
          <Route path="/documentation" element={<Documentation />} />
        </Route>

        <Route
          path="/:endpoint"
          element={
            <ReservationLayout>
              <ValidateEndpoint />
            </ReservationLayout>
          }
        />

        {/* Catch-all 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isReservationRoute && <Footer />}
    </>
  );
}

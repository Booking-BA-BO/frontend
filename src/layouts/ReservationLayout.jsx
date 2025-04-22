import Footer from "../components/Footer";
import HeaderReservation from "../components/HeaderReservation";

export default function ReservationLayout({ children }) {
  return (
    <div>
      <HeaderReservation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

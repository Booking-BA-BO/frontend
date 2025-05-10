import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReservationPage from "../pages/ReservationPage";
import NotFound from "../pages/NotFound";

export default function ValidateEndpoint() {
  const { endpoint } = useParams();
  const [exists, setExists] = useState(null);

  useEffect(() => {
    fetch(`/api/endpoint-exists/${endpoint}`)
      .then((res) => res.json())
      .then((data) => setExists(data))  
      .catch(() => setExists(false));
  }, [endpoint]);

  return exists === null ? null : exists ? <ReservationPage /> : <NotFound />;
}

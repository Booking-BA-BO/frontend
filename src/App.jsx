import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cards from "./pages/Cards";
import Layout from "./pages/Layout";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import Welcome from "./pages/Welcome";
import WelcomeRegister from "./pages/WelcomeRegister";
import Header from "./components/Header";

export default function App() {
  const { user } = useContext(AppContext);

  return (
    
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={user ? <Cards /> : <Welcome />} />
          <Route path="/register" element={<WelcomeRegister />} />
          <Route path="/login" element={user ? <Cards /> : <Welcome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
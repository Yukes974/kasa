import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/A-propos";
import Logement from "./pages/Fiche-Logement";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

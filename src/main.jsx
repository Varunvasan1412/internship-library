import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import SignIn from "./Pages/SignIn";
import SignOut from "./Pages/SignOut";
import Forms from "./Pages/Forms";
import ResultPage from "./Pages/ResultPage";
import Navbar from "./Components/Layout/NavBar";
import FAQ from "./Components/Accordion/FAQ";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signout" element={<SignOut />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/FAQ" element={<FAQ />} />
    </Routes>
  </BrowserRouter>
);

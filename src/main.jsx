import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import SignIn from "./Pages/SignIn";
import SignOut from "./Pages/SignOut";
import Forms from "./Pages/Forms";
import ProfilePage from "./Pages/ProfilePage";
import Navbar from "./Components/Layout/Navbar.jsx";
import FAQ from "./Components/Accordion/FAQ";
import Pricing from "./Components/Pricing/Pricing";
import Home from "./Pages/Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signout" element={<SignOut />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  </BrowserRouter>
);

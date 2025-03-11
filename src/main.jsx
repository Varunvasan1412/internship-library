import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import SignIn from "./Pages/SignIn";
import Forms from "./Pages/Forms";
import ResultPage from "./Pages/ResultPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  </BrowserRouter>
);

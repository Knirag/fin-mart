import "./App.css";
import React from "react";
import { createRoot } from "react-dom";
// import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar2024 from "./calendarPage";
import MonthlyTemplate from "./monthlytemplate";
import Finsmart2024 from "./Finsmartpage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Finsmart2024 />} />
        <Route index element={<Finsmart2024 />} />
        <Route path="/budget" element={<Calendar2024 />} />
        <Route path="/budget/:month" element={<MonthlyTemplate />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);

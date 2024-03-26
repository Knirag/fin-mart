import "./App.css";
import React from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar2024 from "./CalendarHomePage/calendarPage";
import MonthlyTemplate from "./BudgetPage/monthlytemplate";
import Finsmart2024 from "./FinsmartOpeningPage/Finsmartpage";
import Authentication from "./LoginSignup/LoginSignup";
import PART1 from "./UserQuestionPages/userQ1";
import PART2 from "./UserQuestionPages/userQ2";
import SIDEBAR from "./BudgetPage/sidebar";
// import AuthDetails from "./AuthDetails";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Finsmart2024 />} />
        <Route index element={<Finsmart2024 />} />
        <Route path="/login" element={<Authentication />} />
        <Route path="/budget" element={<Calendar2024 />} />
        <Route path="/budget/:month" element={<MonthlyTemplate />} />
        <Route path="/userQuestion1" element={<PART1 />} />
        <Route path="/userQuestion2" element={<PART2 />} />
        <Route path="/budget/menu" element={<SIDEBAR/>} />

      </Routes>

    </BrowserRouter>
  ); 
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);

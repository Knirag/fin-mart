// CalendarPage.js
import React, { useState } from "react";
import Calendar2024 from "./Calendar2024";
import MonthlyTemplate from "./monthlytemplate";

const CalendarPage = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
  };

  return (
    <div>
      <Calendar2024 onMonthClick={handleMonthClick} />
      <MonthlyTemplate selectedMonth={selectedMonth} />
    </div>
  );
};

export default CalendarPage;

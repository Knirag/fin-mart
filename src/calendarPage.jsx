import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Calendar2024() {
  const title = "2024";
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="calendar">
      <h2>{title}</h2>
      <div>
        <section>
        {months.map((month) => (
          <Link key={month} to={`/budget/${month.toLowerCase()}`}>
            <button>{month}</button>
          </Link>
        ))}
        </section>
      </div>
      {/* <section>
        <form className="formOne">
          <button>January</button>
          <button>February</button>
          <button>March</button>
          <button>April</button>
        </form>
        <form>
          <button>May</button>
          <button>June</button>
          <button>July</button>
          <button>August</button>
        </form>
        <form>
          <button>September</button>
          <button>October</button>
          <button>November</button>
        </form>
        <form className="formThree">
          <button>December</button>
        </form>
      </section> */}
      <footer>
        <img src="src\8.svg" />
      </footer>
    </div>
  );
}

export default Calendar2024;

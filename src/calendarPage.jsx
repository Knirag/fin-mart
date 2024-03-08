import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
const Calendar2024 = ({}) => {
  const title = "2024";

  return (
    <div className="calendar">
      <h2>{title}</h2>
      <section>
        <form className="formOne">
          <Link to="/budget/January">
            <button>January</button>
          </Link>
          <Link to="/budget/February">
            <button>February</button>
          </Link>
          <Link to="/budget/March">
            <button>March</button>
          </Link>
          <Link to="/budget/April">
            <button>April</button>
          </Link>
        </form>
        <form>
          <Link to="/budget/May">
            <button>May</button>
          </Link>
          <Link to="/budget/June">
            <button>June</button>
          </Link>
          <Link to="/budget/July">
            <button>July</button>
          </Link>
          <Link to="/budget/August">
            <button>August</button>
          </Link>
        </form>
        <form>
          <Link to="/budget/September">
            <button>September</button>
          </Link>
          <Link to="/budget/October">
            <button>October</button>
          </Link>

          <Link to="/budget/November">
            <button>November</button>
          </Link>
        </form>
        <form className="formThree">
          <Link to="/budget/December">
            <button>December</button>
          </Link>
        </form>
      </section>
      <footer>
        <img src="src\8.svg" />
      </footer>
    </div>
  );
};

export default Calendar2024;

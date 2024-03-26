import React from "react";
import { Link } from "react-router-dom";
import "./userQ.css";

const PART2 = () => {
  return (
    <div className="questions">
      <div className="header">
        <img className="logo" src="/8.svg" />
      </div>
      <div className="container-2">
        <form className="pages">
          <h4>
            Are Any of these what you would consider your short term financial
            goals ?(Less than 5 years)
          </h4>
          <h5> Pick 5</h5>
          <button className="expenses">Vacation</button>
          <button className="expenses">Emergency Fund</button>
          <button className="expenses">Education</button>
          <button className="expenses">Technology Purchase</button>
          <button className="expenses">Business Start-Up</button>
          <button className="expenses">Home Construction/Renovation</button>
          <button className="expenses">Vehicle Purchase</button>
          <button className="expenses">Hobby/Passion Project</button>
        </form>
          <button className="submit"> SUBMIT</button>
      </div>
      <div className="skip">
        <Link to="/budget">
          <button className="next">Skip</button>
        </Link>
      </div>
    </div>
  );
};
export default PART2;

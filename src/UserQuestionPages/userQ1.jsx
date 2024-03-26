import React from "react";
import { Link } from "react-router-dom";
import "./userQ.css"
const PART1 = () => {

    return (
      <div className="questions">
        <div className="header">
          <img className="logo" src="/8.svg" />
        </div>
        <div className="container-2">
          <form className="pages">
            <h4>
              Which categories are more Important to you when Tracking Expenses?
            </h4>
            <h5> Pick 5</h5>
            <button className="expenses">Housing</button>
            <button className="expenses">Utilities</button>
            <button className="expenses">Transportation</button>
            <button className="expenses">Savings & Investments</button>
            <button className="expenses">Groceries</button>
            <button className="expenses">Education</button>
            <button className="expenses">Entertainment</button>
            <button className="expenses">Shopping</button>
            <button className="submit"> SUBMIT</button>
          </form>
        </div>
        <div className="skip">
          <Link to="/userQuestion2">
            <button className="next">Skip</button>
          </Link>
        </div>
      </div>
    );
}
export default PART1;

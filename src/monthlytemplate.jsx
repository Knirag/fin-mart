import React from "react";

import "./App.css";

function monthlytemplate() {
  const title = "January";
  return (
    <div className="monthly-template">
      <div className="content">
        <h1>{title}</h1>
      </div>
      <div className="budget">
        <h3>Income</h3>
        <form>
          <label>Job </label>
          <input type="text" required />
          <input type="text" required />
        </form>
        <form>
          <h3>Housing</h3>
          <label>Rent/Mortgage </label>
          <input type="text" required />
          <input type="text" required />
        </form>
        <form>
          <label>Utilities </label>
          <input type="text" required />
          <input type="text" required />
        </form>
        <form>
          <label>Furnishings/Equipment </label>
          <input type="text" required />
          <input type="text" required />
        </form>
        <form>
          <h3>Savings</h3>
          <label>Emergency Fund </label>
          <input type="text" required />
          <input type="text" required />
        </form>
        <form>
          <h3>Transport</h3>
          <label>Gas </label>
          <input type="text" required />
          <input type="text" required />
        </form>
        <form>
          <label>Commutation </label>
          <input type="text" required />
          <input type="text" required />
        </form>
        <form>
          <h3>Groceries</h3>
          <label>Food </label>
          <input type="text" required />
          <input type="text" required />
        </form>
        <form>
          <label>Household supplies </label>
          <input type="text" required />
          <input type="text" required />
        </form>
        <form>
          <h3>Personal Care</h3>
          <label>Toilettries </label>
          <input type="text" required />
          <input type="text" required />
        </form>
        <form>
          <label>Beauty & Grooming </label>
          <input type="text" required />
          <input type="text" required />
        </form>
        <form>
          <h3>Entertainment</h3>
          <label>Hobbies/Recreation </label>
          <input type="text" required />
          <input type="text" required />
        </form>
        <form>
          <label>Streaming </label>
          <input type="text" required />
          <input type="text" required />
        </form>
        <form>
          <label>Socialization </label>
          <input type="text" required />
          <input type="text" required />
        </form>
        <form>
          <h3>Miscelleneous</h3>
          <label>Emergency Fund </label>
          <input type="text" required />
          <input type="text" required />
        </form>
      </div>
    </div>
  );
}
export default monthlytemplate;

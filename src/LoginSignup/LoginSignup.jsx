import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import "./login.css";
const Authentication = () => {
const [loginType, setLoginType] = useState("LOGIN");
const handleLoginTypeChange = (newType) => {
    setLoginType(newType);
   };
  return (
    <div className="user">
      <div className="container">
        <div className="header">
          <img src="/8.svg" />
          <div className="status-container">
            <div
              className={`status ${loginType === "LOGIN" ? "active" : ""}`}
              onClick={() => handleLoginTypeChange("LOGIN")}
            >
              LOGIN
            </div>
            <div className="stroke"></div>
            <div
              className={`status ${loginType === "SIGNUP" ? "active" : ""}`}
              onClick={() => handleLoginTypeChange("SIGNUP")}
            >
              SIGNUP
            </div>
          </div>
        </div>
        <div className="inputs">
          {loginType === "LOGIN" && (
            <form>
              <div className="email-field">
                <label>Email: </label>
                <div>
                  <input type="email" required />
                </div>
              </div>

              <div className="password-field">
                <label>Password: </label>
                <div>
                  <input type="text" required />
                </div>
              </div>

              <button className="submit">SUBMIT</button>
            </form>
          )}
          {loginType === "SIGNUP" && (
            <form className="signup">
              <div className="email-field2">
                <label>Email: </label>
                <div>
                  <input type="email" required />
                </div>
              </div>
              <div className="password-field2">
                <label>Password: </label>
                <div>
                  <input type="password" required />
                </div>
              </div>
              <div className="repeat-password-field">
                <label>Repeat Password: </label>
                <div>
                  <input type="password" required />
                </div>
              </div>
                <button className="submit">SUBMIT</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
export default Authentication;

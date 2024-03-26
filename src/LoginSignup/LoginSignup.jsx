import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import "./login.css";

const Authentication = () => {
  const [loginType, setLoginType] = useState("LOGIN");
  const handleLoginTypeChange = (newType) => {
    setLoginType(newType);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
    const newUser = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          console.log(userCredential);
        });
    };
  
    const signIn = (e) => {
          e.preventDefault();
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              console.log(userCredential);
            });
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
              <form onSubmit={signIn}>
                <div className="email-field">
                  <label>Email: </label>
                  <div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="password-field">
                  <label>Password: </label>
                  <div>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <button type="submit" className="submit">
                  SUBMIT
                </button>
              </form>
            )}
            {loginType === "SIGNUP" && (
              <form className="signup" onSubmit={newUser}>
                <div className="email-field2">
                  <label>Email: </label>
                  <div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="password-field2">
                  <label>Password: </label>
                  <div>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="repeat-password-field">
                  <label>Repeat Password: </label>
                  <div>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <button className="submit" type="submit">
                  SUBMIT
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  };
export default Authentication;

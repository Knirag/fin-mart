import React, { useState } from "react";
import { Navlink } from "react-router-dom";
import "./sidebar.css";
import { GoX } from "react-icons/go";

function SIDEBAR() {
  return (
      <div className="menu">
          <nav>
        <div className="header-sb">
          <GoX className="gox-icon" />
          <img className="logo-2" src="/8.svg" />
        </div>
        <ul>
          <li>
            <Navlink to="/budget" className="menu-items">
              Home
            </Navlink>
            <br />
            <div className="dash"></div>
            <Navlink to="/budget/Dashboard" className="menu-items">
              My Dashboard
            </Navlink>
            <br />
            <div className="dash"></div>
            <Navlink to="/budget/January" className="menu-items">
              January
            </Navlink>
            <br />
            <div className="dash"></div>
            <Navlink to="/budget/February" className="menu-items">
              February
            </Navlink>
            <br />
            <div className="dash"></div>
            <Navlink to="/budget/March" className="menu-items">
              March
            </Navlink>
            <br />
            <div className="dash"></div>

            <Navlink to="/budget/April" className="menu-items">
              April
            </Navlink>
            <br />
            <div className="dash"></div>

            <Navlink to="/budget/May" className="menu-items">
              May
            </Navlink>
            <br />
            <div className="dash"></div>

            <Navlink to="/budget/June" className="menu-items">
              June
            </Navlink>
            <br />
            <div className="dash"></div>

            <Navlink to="/budget/July" className="menu-items">
              July
            </Navlink>
            <br />
            <div className="dash"></div>

            <Navlink to="/budget/August" className="menu-items">
              August
            </Navlink>
            <br />
            <div className="dash"></div>

            <Navlink to="/budget/September" className="menu-items">
              September
            </Navlink>
            <br />
            <div className="dash"></div>

            <Navlink to="/budget/October" className="menu-items">
              October
            </Navlink>
            <br />
            <div className="dash"></div>

            <Navlink to="/budget/November" className="menu-items">
              November
            </Navlink>
            <br />
            <div className="dash"></div>

            <Navlink to="/budget/December" className="menu-items">
              December
            </Navlink>
          </li>
        </ul>
    </nav>
      </div>
  );
}

export default SIDEBAR;

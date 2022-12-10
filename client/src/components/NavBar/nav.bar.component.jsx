import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navigation-bar">
        <div className=" navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="addStudent"
              >
                Add Student
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

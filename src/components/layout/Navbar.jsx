import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="topNav">
      <div className="container">
        <ul className="mainList navList">
          <li className="navItem">
            <Link className="navLink" to="/#">
              So Funktioniert's
            </Link>
          </li>
          <li className="navItem">
            <Link className="navLink" to="/#">
              Sonderangebote
            </Link>
          </li>
          <li className="navItem">
            <Link className="navLink" to="/#">
              <span>
                <img
                  className="navIcon profileIcon"
                  src={require("../../image/shape@3x.png")}
                  alt="img"
                />
              </span>
              Mein Bereich
              <span>
                <img
                  className="navIcon carrotIcon"
                  src={require("../../image/path_2@3x.png")}
                  alt="img"
                />
              </span>
            </Link>
            <div className="hoverItem">
              <Link to="#"> My published jokes </Link>

              <Link to="#"> My Saved jokes </Link>

              <Link to="#"> Account Information</Link>

              <Link to="#"> Published new jokes </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

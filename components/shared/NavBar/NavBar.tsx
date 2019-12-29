import React from "react";
import Link from "next/link";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryAnchor from "../PrimaryAnchor/PrimaryAcnhor";
import LightAnchor from "../LighAnchor/LighAnchor";
export default function NavBar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://localhost:3000">
            <img src="./fastcashlogo.svg" />
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link href="/">
              <a className="navbar-item">
                <FontAwesomeIcon icon={faSearch} /> &nbsp; Search for a job
              </a>
            </Link>
            {/* <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div> */}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <PrimaryAnchor to="/register">Sign up</PrimaryAnchor>
                <LightAnchor to="/login">Login</LightAnchor>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

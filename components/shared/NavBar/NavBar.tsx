import * as React from "react";
import Link from "next/link";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryAnchor from "../PrimaryAnchor/PrimaryAcnhor";
import LightAnchor from "../LighAnchor/LighAnchor";
import { logout } from "../../../utils/helpers/auth";
import cookie from "js-cookie";
import "./NavBar.scss";

type NavBarProps = {
  authenticated: boolean;
};

const firstName = cookie.get("firstName");
const lastName = cookie.get("lastName");
const profilePicture = cookie.get("profilePicture");

export default function NavBar({ authenticated }: NavBarProps) {
  const [isActive, setIsActive] = React.useState(false);

  // log out
  const handleLogOut = () => {
    logout();
  };

  // render section when user is signed in
  const renderAuthSection = () => {
    if (!authenticated) {
      return null;
    }
    return (
      <>
        <Link href="/postJob">
          <a className="navbar-item" data-testid="postJobAuthSection">
            <FontAwesomeIcon icon={faShoppingBag} /> &nbsp; Post a job
          </a>
        </Link>
        <div
          className="navbar-item has-dropdown is-hoverable"
          data-testid="profileAuthSection"
        >
          <a className="navbar-link is-arrowless">
            {profilePicture && (
              <img
                className="navbar-profile-picture"
                src={profilePicture}
                alt={firstName}
              />
            )}
            &nbsp; {firstName} {lastName}
          </a>
          <div className="navbar-dropdown">
            <Link href="/profile">
              <a className="navbar-item">Profile</a>
            </Link>
            <hr className="navbar-divider" />
            <a className="navbar-item" onClick={handleLogOut}>
              Logout
            </a>
          </div>
        </div>
      </>
    );
  };

  // render sign in and sign up
  const renderNonAuthSection = () => {
    if (authenticated) {
      return null;
    }
    return (
      <div data-testid="nonAuthSection" className="navbar-item">
        <div className="buttons">
          <PrimaryAnchor to="/register">Sign up</PrimaryAnchor>
          <LightAnchor to="/login">Login</LightAnchor>
        </div>
      </div>
    );
  };

  // handle toggle navbar
  const handleToggleNavBar = () => {
    setIsActive(currVal => !currVal);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href={process.env.hostName}>
            <img src="./fastcashlogo.svg" />
          </a>

          <a
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""} `}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={handleToggleNavBar}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbar"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <Link href="/search">
              <a className="navbar-item">
                <FontAwesomeIcon icon={faSearch} /> &nbsp; Search for a job
              </a>
            </Link>
          </div>

          <div className="navbar-end">
            {renderNonAuthSection()}
            {renderAuthSection()}
          </div>
        </div>
      </div>
    </nav>
  );
}

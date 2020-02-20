import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer fc-footer">
      <div className=" footer__container">
        <div className="footer__container-logo">
          <img src="/whitelogo.svg" alt="" />
        </div>
        <div>
          <ul className="footer-items">
            <li>Search for a job</li>
            <li>Post a job</li>
          </ul>
        </div>
        <div>
          <ul className="footer-items">
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <ul className="footer-items">
            <li>Terms of service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="footer-bg"></div>
    </footer>
  );
}

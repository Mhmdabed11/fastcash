import * as React from "react";
import "./register.scss";
import Link from "next/link";
import FacebookAuth from "../../components/shared/FacebookAuth/FacebookAuth";

const redirectURL = `${process.env.hostName}/auth`;

function Register(props) {
  return (
    <section className="register-section">
      <div className="container">
        <div className="register">
          <div className="has-text-centered">
            <a href={process.env.hostName}>
              <img src="./fastcashlogo.svg" alt="fastcash_logo" />
            </a>
          </div>
          <div className="register__container has-background-white">
            <div className="register__container-title">Sign up</div>
            <div className="register__container-controls">
              <FacebookAuth redirectURL={redirectURL} authType="register" />
            </div>
            <div className="register__container-sign-in has-text-centered">
              Already have an account ?
              <Link href="/login">
                <a className="is-link">&nbsp;Login</a>
              </Link>
            </div>
            <hr />
            <div className="register__container-terms">
              By creating an account, you agree to FastCash's
              <Link href="#">
                <a className="is-link"> Terms of Service</a>
              </Link>
              ,&nbsp;
              <Link href="#">
                <a className="is-link">Cookie Policy&nbsp;</a>
              </Link>
              and
              <Link href="#">
                <a className="is-link">&nbsp;Privacy Policy</a>
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;

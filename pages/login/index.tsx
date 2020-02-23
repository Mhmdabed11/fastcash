import * as React from "react";
import "./login.scss";
import Link from "next/link";
import FacebookAuth from "../../components/shared/FacebookAuth/FacebookAuth";

const redirectURL = `${process.env.hostName}/auth`;

function Login() {
  return (
    <section className="login-section">
      <div className="container">
        <div className="login">
          <div className="has-text-centered">
            <a href={process.env.hostName}>
              <img src="./fastcashlogo.svg" alt="fastcash_logo" />
            </a>
          </div>
          <div className="login__container has-background-white">
            <div className="login__container-title">Login</div>

            <FacebookAuth redirectURL={redirectURL} authType="login" />

            <div className="login__container-create-account has-text-centered">
              Don't have an account ?
              <Link href="/register">
                <a className="is-link">&nbsp;Sign up</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Login.displayName = "Login";
export default Login;

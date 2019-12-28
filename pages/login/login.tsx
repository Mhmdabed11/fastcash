import React from "react";
import "./login.scss";
import LoginForm from "../../components/LoginForm/LoginForm";
export default function Login() {
  return (
    <section className="login-section">
      <div className="container">
        <div className="login">
          <div className="has-text-centered">
            <img src="./fastcashlogo.svg" alt="fastcash_logo" />
          </div>
          <div className="login__container has-background-white">
            <div className="login__container-title">Login</div>
            <div className="login__container-controls">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

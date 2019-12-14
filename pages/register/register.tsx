import React from "react";
import Input from "../../components/shared/Input/Input";
import "./register.scss";
import { faUser } from "@fortawesome/free-solid-svg-icons";
export default function Register() {
  return (
    <section className="section">
      <div className="container">
        <div className="register">
          <div className="register__container has-background-white">
            <div className="register__container__title">Sign Up</div>
            <Input iconLeft={faUser} placeholder={"First Name"} />
          </div>
        </div>
      </div>
    </section>
  );
}

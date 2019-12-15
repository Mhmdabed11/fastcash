import React from "react";
import Input from "../../components/shared/Input/Input";
import "./register.scss";
import {
  faUser,
  faEnvelope,
  faGlobe,
  faLock
} from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../../components/shared/PrimaryButton/PrimaryButton";
export default function Register() {
  return (
    <section className="register-section">
      <div className="container">
        <div className="register">
          <div className="register__container has-background-white">
            <div className="register__container__title">Sign Up</div>
            <div className="register__container__controls">
              <form>
                <div className="columns is-multiline">
                  <div className="column is-half-fullhd">
                    <Input
                      id="firstName"
                      iconLeft={faUser}
                      placeholder={"First Name"}
                    />
                  </div>

                  <div className="column is-half-fullhd">
                    <Input
                      id="lastName"
                      iconLeft={faUser}
                      placeholder={"Last Name"}
                    />
                  </div>
                  <div className="column is-full">
                    <Input
                      id="email"
                      iconLeft={faEnvelope}
                      placeholder={"Email"}
                      type="email"
                    />
                  </div>
                  <div className="column is-full">
                    <Input
                      id="country"
                      iconLeft={faGlobe}
                      placeholder={"Country"}
                    />
                  </div>
                  <div className="column is-full">
                    <Input
                      id="password"
                      iconLeft={faLock}
                      placeholder={"Password"}
                      type="password"
                    />
                  </div>
                  <div className="column is-full">
                    <Input
                      id="confirmPassword"
                      iconLeft={faLock}
                      placeholder={"Confirm password"}
                      type="password"
                    />
                  </div>
                </div>
                <PrimaryButton fullWidth>Register</PrimaryButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
import gql from "graphql-tag";
import { useLazyQuery, useMutation } from "@apollo/react-hooks";

export const SIGNUP_MUTATION = gql`
  mutation UserMutation {
    signup(
      password: "admin"
      firstName: "Mohammad"
      confirmPassword: "admin"
      lastName: "Abed"
      email: "mohammad_aaabed@hotmail.com"
      country: "Lebanon"
    ) {
      token
      user {
        id
        firstName
        lastName
        country
        email
      }
    }
  }
`;
const GET_USER_QUERY = gql`
  {
    user(id: "5df9491024aa9a00076692ac") {
      id
      firstName
      lastName
      email
      country
      createdAt
      updatedAt
      posts {
        id
        title
      }
    }
  }
`;

export default function Register() {
  const [signUp, { data }] = useMutation(SIGNUP_MUTATION);
  const [getData, userData] = useLazyQuery(GET_USER_QUERY);
  if (!userData) {
    getData();
  }
  if (userData) {
    console.log(userData);
  }

  // if (data) {
  //   // const { token } = data.signup;
  //   // localStorage.setItem("token", token);
  //   // console.log(data);
  // }
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
                <PrimaryButton
                  fullWidth
                  onClick={e => {
                    e.preventDefault();
                    signUp();
                  }}
                >
                  Register
                </PrimaryButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

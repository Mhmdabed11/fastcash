import React from "react";
import "./register.scss";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import SignupForm from "../../components/SignUpForm/SignupForm";

export const SIGNUP_MUTATION = gql`
  mutation UserMutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $country: String!
    $password: String!
    $confirmPassword: String!
  ) {
    signup(
      password: $password
      firstName: $firstName
      confirmPassword: $confirmPassword
      lastName: $lastName
      email: $email
      country: $country
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

export default function Register() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [signUp, { data }] = useMutation(SIGNUP_MUTATION, {
    onCompleted: data => {
      console.log(data);
      setIsSubmitting(false);
    },
    onError: err => setIsSubmitting(false)
  });

  const handleSubmit = ({
    firstName,
    lastName,
    email,
    country,
    password,
    confirmPassword
  }) => {
    setIsSubmitting(true);
    signUp({
      variables: {
        firstName,
        lastName,
        email,
        country,
        password,
        confirmPassword
      }
    });
  };
  return (
    <section className="register-section">
      <div className="container">
        <div className="register">
          <div className="register__container has-background-white">
            <div className="register__container__title">Sign Up</div>
            <div className="register__container__controls">
              <SignupForm onSubmit={handleSubmit} submitting={isSubmitting} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import * as React from "react";
import "./register.scss";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import SignupForm from "../../components/SignUpForm/SignupForm";
import Message from "../../components/shared/Message/Message";
import Router from "next/router";
import Link from "next/link";
import nextCookie from "next-cookies";

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

function Register(props) {
  console.log(props);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState([]);
  const [signUp] = useMutation(SIGNUP_MUTATION, {
    onCompleted: data => {
      const email = data.signup.user.email;
      Router.push(`/verify/${email}`);
    },
    onError: err => {
      setIsSubmitting(false);
      let errors = [];
      err.graphQLErrors.forEach(err => errors.push(err.message.split(":")[1]));
      setError(errors);
    }
  });

  // cleanup on unmount
  React.useEffect(() => {
    return () => setIsSubmitting(false);
  }, []);

  // render error messages
  const renderErrorMessages = () => {
    return error.map((err, index) => (
      <Message key={index} type="danger" message={err} />
    ));
  };

  const handleSubmit = ({
    firstName,
    lastName,
    email,
    country,
    password,
    confirmPassword
  }) => {
    if (password !== confirmPassword) {
      setError(["Passwords do not match"]);
      return;
    }
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
          <div className="has-text-centered">
            <a href="http://192.168.99.100:3000">
              <img src="./fastcashlogo.svg" alt="fastcash_logo" />
            </a>
          </div>
          <div className="register__container has-background-white">
            {renderErrorMessages()}
            <div className="register__container-title">Sign up</div>
            <div className="register__container-controls">
              <SignupForm onSubmit={handleSubmit} submitting={isSubmitting} />
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

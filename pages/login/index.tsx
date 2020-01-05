import React from "react";
import "./login.scss";
import LoginForm from "../../components/LoginForm/LoginForm";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import Message from "../../components/shared/Message/Message";
import Router from "next/router";
import Link from "next/link";
import cookie from "js-cookie";

const LOGIN_MUTATION = gql`
  mutation loginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`;

function Login() {
  const [error, setError] = React.useState("");
  const [isLoggingIn, setIsLoggingIn] = React.useState(false);
  const [login] = useMutation(LOGIN_MUTATION, {
    onCompleted: data => {
      const { token } = data.login;
      cookie.set("token", token);
      Router.replace("/");
    },
    onError: err => {
      if (
        err &&
        err.graphQLErrors &&
        Array.isArray(err.graphQLErrors) &&
        err.graphQLErrors[0]
      ) {
        setIsLoggingIn(false);
        setError(err.graphQLErrors[0].message.split(":")[1]);
      }
    }
  });

  // clean up when componeny unmounts
  React.useEffect(() => {
    return () => setIsLoggingIn(false);
  }, []);

  // handlesubmit
  const handleSubmit = values => {
    if (!isLoggingIn) {
      setIsLoggingIn(true);
      login({
        variables: { email: values.email, password: values.password }
      });
    }
  };

  const renderErrorMessages = () => {
    return error ? <Message type="danger" message={error} /> : null;
  };
  return (
    <section className="login-section">
      <div className="container">
        <div className="login">
          <div className="has-text-centered">
            <a href="http://localhost:3000">
              <img src="./fastcashlogo.svg" alt="fastcash_logo" />
            </a>
          </div>
          <div className="login__container has-background-white">
            {renderErrorMessages()}
            <div className="login__container-title">Login</div>
            <div className="login__container-controls">
              <LoginForm submitting={isLoggingIn} onSubmit={handleSubmit} />
            </div>
            <div className="login__container-forget-pass has-text-centered">
              <Link href="/">
                <a className="is-link">Forgot Password ?</a>
              </Link>
            </div>
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

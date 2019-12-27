import React from "react";
import "./verification.scss";
import PrimaryAnchor from "../../../components/shared/PrimaryAnchor/PrimaryAcnhor";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import PrimaryButton from "../../../components/shared/PrimaryButton/PrimaryButton";
import Message from "../../../components/shared/Message/Message";
import { setServers } from "dns";

const ACTIVATE_ACCOUNT = gql`
  mutation UserMutation($email: String!, $hash: String!) {
    activateAccount(email: $email, hash: $hash) {
      id
      email
      active
    }
  }
`;

const SEND_ACTIVATION_EMAIL_MUTATION = gql`
  mutation UserMutation($email: String!) {
    sendActivationEmail(email: $email)
  }
`;

export default function Success({ email, hash }) {
  const [verified, setVerified] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [activateAccount, { loading }] = useMutation(ACTIVATE_ACCOUNT, {
    onCompleted: data => {
      if (data) {
        setVerified(true);
      }
    },
    onError: err => {
      const errors = err.graphQLErrors;
      if (err && errors && errors.length > 0) {
        setVerified(false);
      }
    }
  });
  const [sendActivationEmail] = useMutation(SEND_ACTIVATION_EMAIL_MUTATION, {
    onCompleted: data => {
      setSuccess(true);
      setIsLoading(false);
    },
    onError: err => {
      if (
        err &&
        err.graphQLErrors &&
        Array.isArray(err.graphQLErrors) &&
        err.graphQLErrors.length > 0
      ) {
        setError(err.graphQLErrors[0].message.split(":")[1]);
        setIsLoading(false);
      }
    }
  });

  // cDM
  React.useEffect(() => {
    activateAccount({ variables: { email: email, hash: hash } });
    return () => setIsLoading(false);
  }, []);

  // render status logo
  const renderLogo = () => {
    return verified && !loading ? (
      <img src="/successlogo.svg" alt="success_logo" />
    ) : (
      <img src="/failurelogo.svg" alt="failure_logo" />
    );
  };

  // render status text
  const renderText = () => {
    return verified && !loading
      ? " Congratulations! Your fastcash account has been activated."
      : "It looks like this link has expired. Please try sending a new one by pressing the button below";
  };

  // send activation email
  const handleSendActivationEmail = () => {
    setIsLoading(true);
    setSuccess(false);
    setError("");
    sendActivationEmail({
      variables: { email }
    });
  };

  // render action button
  const renderActionbutton = () => {
    return verified && !loading ? (
      <PrimaryAnchor to="/login">Continue to Login</PrimaryAnchor>
    ) : (
      <PrimaryButton
        onClick={handleSendActivationEmail}
        loading={isLoading}
        disabled={isLoading}
      >
        Resend Email
      </PrimaryButton>
    );
  };

  const renderBody = () => {
    if (loading) {
      return (
        <div className="has-text-centered subtitle">
          Communicating with out servers...
        </div>
      );
    }
    return (
      <>
        <div className="success__container-sign has-text-centered">
          {renderLogo()}
        </div>
        <div className="success__container-message has-text-centered">
          {renderText()}
        </div>
        <div className="success__container-login-btn has-text-centered">
          {renderActionbutton()}
        </div>
      </>
    );
  };

  return (
    <section className="success-section">
      <div className="container">
        <div className="success">
          <div className="success__container has-background-white">
            {error ? <Message type="danger" message={error} /> : null}
            {success ? (
              <Message
                type="success"
                message="An activation email has been sent. Please check your inbox"
              />
            ) : null}
            {renderBody()}
          </div>
        </div>
      </div>
    </section>
  );
}

Success.getInitialProps = ({ req, query }) => {
  const email = query && query.email;
  const hash = query && query.hash;
  return { email, hash };
};

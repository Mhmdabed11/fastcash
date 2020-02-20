import React from "react";
import "./verify.scss";
import PrimaryButton from "../../../components/shared/PrimaryButton/PrimaryButton";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import Message from "../../../components/shared/Message/Message";
import Link from "next/link";

type VerifyProps = {
  email: string;
};

export const SEND_ACTIVATION_EMAIL_MUTATION = gql`
  mutation UserMutation($email: String!) {
    sendActivationEmail(email: $email)
  }
`;
export default function Verify({ email }: VerifyProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(false);
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
      }
      setIsLoading(false);
    }
  });

  // resend activation email
  const handleResendActivationEmail = () => {
    setIsLoading(true);
    setSuccess(false);
    setError(null);
    sendActivationEmail({
      variables: { email }
    });
  };

  // render success message
  const renderSuccessMessage = () => {
    return success ? (
      <Message
        type="success"
        message="An activation email has been sent. Please check your inbox"
      />
    ) : null;
  };

  // render error message
  const renderErrorMessage = () => (error ? <Message type="danger" message={error} /> : null);

  return (
    <section className="verify-section">
      <div className="container">
        <div className="verify">
          <div className="has-text-centered">
            <Link href="/">
              <a>
                <img src="/fastcashlogo.svg" alt="fastcash_logo" />
              </a>
            </Link>
          </div>
          <div className="verify__container has-background-white">
            {renderSuccessMessage()}
            {renderErrorMessage()}
            <div className="verify__container-heading has-text-centered">Just one more step...</div>
            <div className="verify__container-email has-text-centered">{email}</div>
            <div className="verify__container-instruction has-text-centered">
              We have Sent you an email to activate your account. If you do not recieve an
              activation email within <strong>1 minute</strong>, please click the button below.
            </div>
            <div className="verify__container-activate-btn has-text-centered">
              <PrimaryButton
                disabled={isLoading}
                loading={isLoading}
                onClick={handleResendActivationEmail}
              >
                Resend Email
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Verify.getInitialProps = async ({ req, query }) => {
  const email = query && query.email;
  return { email, hello: 123 };
};

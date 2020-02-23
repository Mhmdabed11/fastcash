import React from "react";
import "./FacebookAuth.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  redirectURL: string;
  authType: "login" | "register";
};

export default function LoginWithFacebook({ redirectURL, authType }: Props) {
  return (
    <a
      role="button"
      className="facebook-login-btn"
      href={`https://www.facebook.com/v6.0/dialog/oauth?client_id=${process.env.FACEBOOK_APP_ID}&redirect_uri=${redirectURL}?oAuth=fb&state={st=4297,ds=78969767}&scope=email`}
    >
      <FontAwesomeIcon icon={["fab", "facebook-f"]} />
      <span>{authType === "login" ? "Continue" : "Sign up"} with Facebook</span>
    </a>
  );
}

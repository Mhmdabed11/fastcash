import React, { useEffect } from "react";
import { NextPageContext } from "next";
import gql from "graphql-tag";
import { request } from "../../utils/helpers/request";
import { useMutation } from "@apollo/react-hooks";
import Router from "next/router";
import cookie from "js-cookie";

const redirectURL = `${process.env.hostName}/auth`;

export const LOGIN_MUTATION = gql`
  mutation loginMutation($accessToken: String!, $authType: String!) {
    login(accessToken: $accessToken, authType: $authType) {
      token
      user {
        id
        firstName
        lastName
        email
        profilePicture
      }
    }
  }
`;

const FacebookAuthAPI = request("https://graph.facebook.com/v6.0/oauth/");

export default function Auth({ query, notify }) {
  const [login] = useMutation(LOGIN_MUTATION, {
    onCompleted: data => {
      const { token, user } = data.login;
      cookie.set("token", token);
      cookie.set("firstName", user.firstName);
      cookie.set("lastName", user.lastName);
      cookie.set("profilePicture", user.profilePicture);
      Router.replace("/");
    },
    onError: err => {
      if (
        err &&
        err.graphQLErrors &&
        Array.isArray(err.graphQLErrors) &&
        err.graphQLErrors[0]
      ) {
        notify(
          err.graphQLErrors[0].message || "Something went wrong.",
          "error"
        );
      }
    }
  });

  useEffect(() => {
    if (query.oAuth === "fb") {
      FacebookAuthAPI.get("/access_token", {
        client_id: process.env.FACEBOOK_APP_ID,
        redirect_uri: `${redirectURL}?oAuth=${query.oAuth}`,
        client_secret: process.env.FACEBOOK_APP_SECRET,
        code: query.code
      })
        .then(data => {
          login({
            variables: {
              accessToken: data.access_token,
              authType: query.oAuth
            }
          });
        })
        .catch(err => console.log(err));
    }
  }, [query]);

  return <div>Loading...</div>;
}

Auth.getInitialProps = async (ctx: NextPageContext) => {
  return { query: ctx.query };
};

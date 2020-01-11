import React from "react";
import App from "next/app";
import "../styles/global.scss";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "@apollo/react-hooks";
import { ToastProvider } from "react-toast-notifications";
// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false;
class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <ToastProvider
          autoDismiss
          autoDismissTimeout={4000}
          placement="top-center"
        >
          <Component {...pageProps} />
        </ToastProvider>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);

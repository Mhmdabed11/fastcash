import React from "react";
import App from "next/app";
import "../styles/global.scss";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "@apollo/react-hooks";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);

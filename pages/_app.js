import React from "react";
import App from "next/app";
import "../styles/global.scss";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import { withApollo } from "../lib/withApollo";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default withApollo(MyApp);

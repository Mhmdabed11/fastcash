import React from "react";
import App from "next/app";
import "../styles/global.scss";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "@apollo/react-hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Router from "next/router";
// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false;
library.add(fab);
// notify function
function notify(message, type, position = toast.POSITION.TOP_CENTER) {
  toast(message, { type, position });
}

class MyApp extends App {
  render() {
    let { Component, pageProps, apollo } = this.props;

    // add notify function to pageProps
    pageProps = { ...pageProps, notify };

    return (
      <ApolloProvider client={apollo}>
        <ToastContainer hideProgressBar />
        <Component {...pageProps} autoClose={5000} />
      </ApolloProvider>
    );
  }
}

Router.events.on("routeChangeComplete", () => {
  if (process.env.NODE_ENV !== "production") {
    const els = document.querySelectorAll(
      'link[href*="/_next/static/css/styles.chunk.css"]'
    );
    const timestamp = new Date().valueOf();
    els[0].href = "/_next/static/css/styles.chunk.css?v=" + timestamp;
  }
});
export default withApollo(MyApp);

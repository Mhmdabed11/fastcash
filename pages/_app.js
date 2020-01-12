import React from "react";
import App from "next/app";
import "../styles/global.scss";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "@apollo/react-hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false;

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

export default withApollo(MyApp);

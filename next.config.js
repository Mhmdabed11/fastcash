// next.config.js
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
module.exports = withCSS(
  withSass({
    /* config options here */
    env: {
      hostName: "http://15.188.8.145:3000",
      graphqlEndpoint: "http://35.180.58.9:4000"
    }
  })
);

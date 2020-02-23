// next.config.js
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
module.exports = withCSS(
  withSass({
    /* config options here */
    env: {
      // hostName: "http://15.188.8.145:3000",
      // graphqlEndpoint: "http://35.180.58.9:4000",
      hostName: "http://localhost:3000",
      graphqlEndpoint: "http://localhost:4000",
      FACEBOOK_APP_ID: "2607280406217680",
      FACEBOOK_APP_SECRET: "7ea96d643c7b2e5c5041a1b717097826"
    }
  })
);

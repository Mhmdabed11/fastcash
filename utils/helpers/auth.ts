import Router from "next/router";
import nextCookie from "next-cookies";
import cookie from "js-cookie";

export const auth = ctx => {
  const { token } = nextCookie(ctx);
  // If there's no token, it means the user is not logged in.
  if (!token) {
    if (typeof window === "undefined") {
      ctx.res.writeHead(302, { Location: "/login" });
      ctx.res.end();
    } else {
      Router.push("/login");
    }
  }

  return token;
};

export const logout = () => {
  cookie.remove("token");
  // To trigger the event listener we save some random data into the `logout` key
  const date = Date.now();
  window.localStorage.setItem("logout", date.toString()); // new
  Router.push("/login");
};

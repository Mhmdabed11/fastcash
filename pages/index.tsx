import React from "react";
import Head from "next/head";
import NavBar from "../components/shared/NavBar/NavBar";
import nextCookie from "next-cookies";
import Footer from "../components/shared/Footer/Footer";
import HomePageSearchHeader from "../components/HomePageSearchHeader/HomePageSearchHeader";

type HomeProps = {
  authenticated: boolean;
};

const Home = ({ authenticated }: HomeProps) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar authenticated={authenticated} />
    <HomePageSearchHeader />
    <Footer />
  </div>
);

Home.getInitialProps = async ctx => {
  const { token } = nextCookie(ctx);
  const authenticated = token;
  return { authenticated };
};

export default Home;

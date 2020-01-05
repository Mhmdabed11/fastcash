import React from "react";
import Head from "next/head";
import NavBar from "../components/shared/NavBar/NavBar";
import nextCookie from "next-cookies";
import Footer from "../components/shared/Footer/Footer";
import HomePageSearchHeader from "../components/HomePageSearchHeader/HomePageSearchHeader";
import LatestPosts from "../components/LatestPosts/LatestPosts";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

type HomeProps = {
  authenticated: boolean;
};

const GET_LATEST_POSTS = gql`
  query getLatestPosts {
    posts {
      id
      title
      location
      description
      author {
        firstName
        lastName
      }
      skillsRequired
    }
  }
`;

const Home = ({ authenticated }: HomeProps) => {
  const { loading, error, data } = useQuery(GET_LATEST_POSTS);

  console.log(data);
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar authenticated={authenticated} />
      <HomePageSearchHeader />
      {loading ? (
        <h1 className="title">LOADING</h1>
      ) : (
        <LatestPosts posts={(data && data.posts) || []} />
      )}
      <Footer />
    </div>
  );
};

Home.getInitialProps = async ctx => {
  const { token } = nextCookie(ctx);
  const authenticated = token;
  return { authenticated };
};

export default Home;

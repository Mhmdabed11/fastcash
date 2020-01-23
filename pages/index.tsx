import React from "react";
import Head from "next/head";
import NavBar from "../components/shared/NavBar/NavBar";
import nextCookie from "next-cookies";
import Footer from "../components/shared/Footer/Footer";
import HomePageSearchHeader from "../components/HomePageSearchHeader/HomePageSearchHeader";
import LatestPosts from "../components/LatestPosts/LatestPosts";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";
type HomeProps = {
  authenticated: boolean;
};

const GET_LATEST_POSTS = gql`
  query getLatestPosts {
    posts(first: 5) {
      id
      companyName
      title
      location
      description
      author {
        firstName
        lastName
      }
      skills
    }
  }
`;

const Home = ({ authenticated }: HomeProps) => {
  const { loading, error, data } = useQuery(GET_LATEST_POSTS);
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar authenticated={authenticated} />
      <HomePageSearchHeader />
      {!loading && data && data.posts.length !== 0 ? (
        <LatestPosts posts={(data && data.posts) || []} loading={loading} />
      ) : null}
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

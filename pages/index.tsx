import React from "react";
import Head from "next/head";
import NavBar from "../components/shared/NavBar/NavBar";
import nextCookie from "next-cookies";
import Footer from "../components/shared/Footer/Footer";
import HomePageSearchHeader from "../components/HomePageSearchHeader/HomePageSearchHeader";
import LatestPosts from "../components/LatestPosts/LatestPosts";
import gql from "graphql-tag";
import { Query } from "react-apollo";
type HomeProps = {
  authenticated: boolean;
  context: any;
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

const Home = ({ authenticated, context }: HomeProps) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar authenticated={authenticated} />
      <HomePageSearchHeader />
      <Query query={GET_LATEST_POSTS}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          return <LatestPosts posts={(data && data.posts) || []} />;
        }}
      </Query>
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

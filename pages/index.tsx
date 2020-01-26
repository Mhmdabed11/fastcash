import React from "react";
import Head from "next/head";
import NavBar from "../components/shared/NavBar/NavBar";
import nextCookie from "next-cookies";
import Footer from "../components/shared/Footer/Footer";
import HomePageSearchHeader from "../components/HomePageSearchHeader/HomePageSearchHeader";
import PostsList from "../components/PostsList/PostsList";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";
import Router from "next/router";
type HomeProps = {
  authenticated: boolean;
};

const GET_LATEST_POSTS = gql`
  query getLatestPosts {
    posts(last: 5) {
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
  const handleSearchSubmit = values =>
    Router.push(`/search?q=${values.searchTerm}&location=${values.location}`);

  const { loading, error, data } = useQuery(GET_LATEST_POSTS, {
    fetchPolicy: "network-only"
  });
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar authenticated={authenticated} />
      <HomePageSearchHeader onSubmit={handleSearchSubmit} />
      <section className="section">
        <div className="container">
          <PostsList
            posts={(data && data.posts) || []}
            loading={loading}
            title={"Latest Jobs"}
          />
        </div>
      </section>
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

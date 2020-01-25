import React from "react";
import "./search.scss";
import Head from "next/head";
import NavBar from "../../components/shared/NavBar/NavBar";
import Footer from "../../components/shared/Footer/Footer";
import nextCookie from "next-cookies";
var jwtDecode = require("jwt-decode");
import gql from "graphql-tag";
import Loading from "../../components/shared/Loading/Loading";
import { NextPage, NextPageContext } from "next";
import { useQuery } from "react-apollo";
import SearchPageHeader from "../../components/SearchPageHeader/SearchPageHeader";
import PostsList from "../../components/PostsList/PostsList";
import Router from "next/router";

const SEARCH_POSTS = gql`
  query searchPosts($keyword: String, $location: String) {
    posts(filter: $keyword, location: $location) {
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

type SearchProps = {
  authenticated: boolean;
  userId: string;
};

const Search = ({ authenticated, userId, query }) => {
  const { loading, error, data } = useQuery(SEARCH_POSTS, {
    variables: { keyword: query.q, location: query.location }
  });

  const handleSearchSubmit = ({ searchTerm, location }) => {
    Router.push(`/search?q=${searchTerm}&location=${location}`);
  };

  return (
    <div>
      <div>
        <Head>
          <title>Profile</title>
        </Head>
        <NavBar authenticated={authenticated} />
        <SearchPageHeader
          onSubmit={handleSearchSubmit}
          initialLocation={query.location || ""}
          initialValue={query.q || ""}
        />
        <section className="section search__section">
          <div className="container">
            <div className="search__container">
              <PostsList
                posts={(data && data.posts) || []}
                loading={loading}
                title={"Latest Jobs"}
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

Search.getInitialProps = async (ctx: NextPageContext) => {
  const { token } = nextCookie(ctx);
  const authenticated = token;
  const payload = jwtDecode(token);
  return { authenticated, userId: payload.userId, query: ctx.query };
};

export default Search;

import React from "react";
import Head from "next/head";
import NavBar from "../../components/shared/NavBar/NavBar";
import nextCookie from "next-cookies";
import Footer from "../../components/shared/Footer/Footer";
var jwtDecode = require("jwt-decode");
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { withAuthSync } from "../../utils/HOC/withAuthSync";
import "./postJob.scss";
import PostaJobForm from "../../components/PostaJobForm/PostaJobForm";
import Router from "next/router";

type PostJobProps = {
  authenticated: boolean;
  userId: string;
  notify: (message, type) => void;
};

const CREATE_POST = gql`
  mutation createPost(
    $title: String!
    $companyName: String!
    $description: String!
    $location: String!
    $salary: Int!
    $currency: String!
    $category: String!
    $skills: [String!]!
    $type: String!
  ) {
    createPost(
      title: $title
      description: $description
      location: $location
      salary: $salary
      currency: $currency
      category: $category
      companyName: $companyName
      skills: $skills
      type: $type
    ) {
      id
      title
      companyName
      description
      location
      salary
      currency
      category
      skills
      type
    }
  }
`;

const initialValues = {
  companyName: {
    value: ""
  },
  title: {
    value: ""
  },
  location: {
    value: ""
  },
  description: {
    value: ""
  },
  category: {
    value: ""
  },
  salary: {
    value: ""
  },
  currency: {
    value: ""
  },
  skills: {
    value: ""
  },
  type: {
    value: ""
  }
};

function PostJob({ authenticated, userId, notify }: PostJobProps) {
  const [isPostingJob, setIsPostingJob] = React.useState(false);
  const [createPost] = useMutation(CREATE_POST, {
    onCompleted: data => {
      setIsPostingJob(false);
      notify("Your post was successfully created", "success");
      Router.push("/");
    },
    onError: err => {
      if (err.graphQLErrors) {
        console.log(err.graphQLErrors);
      }
      setIsPostingJob(false);
      notify("Failed to create post. Please try again", "error");
    }
  });

  const handlePostAJob = values => {
    setIsPostingJob(true);
    let valuesCopy = { ...values };
    Object.keys(valuesCopy).map(
      key => (valuesCopy[key] = valuesCopy[key] ? valuesCopy[key].value : null)
    );
    createPost({
      variables: {
        companyName: valuesCopy.companyName,
        title: valuesCopy.title,
        location: valuesCopy.location,
        description: valuesCopy.description,
        category: valuesCopy.category,
        salary: parseInt(valuesCopy.salary),
        currency: valuesCopy.currency,
        type: valuesCopy.type,
        skills: valuesCopy.skills
      }
    });
  };

  return (
    <div>
      <Head>
        <title>Profile</title>
      </Head>
      <NavBar authenticated={authenticated} />
      <section className="section postjob__section">
        <div className="container">
          <div className="postjob__container">
            <h1 className="title">Post a Job</h1>
            <PostaJobForm
              initialValues={initialValues}
              onSubmit={handlePostAJob}
              postingJob={isPostingJob}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

PostJob.getInitialProps = async ctx => {
  const { token } = nextCookie(ctx);
  const authenticated = token;
  const payload = jwtDecode(token);
  return { authenticated, userId: payload.userId };
};

export default withAuthSync(PostJob);

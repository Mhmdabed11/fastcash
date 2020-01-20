import React from "react";
import Head from "next/head";
import NavBar from "../../components/shared/NavBar/NavBar";
import nextCookie from "next-cookies";
import Footer from "../../components/shared/Footer/Footer";
var jwtDecode = require("jwt-decode");
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Loading from "../../components/shared/Loading/Loading";
import { withAuthSync } from "../../utils/HOC/withAuthSync";
import "./postJob.scss";
import PostaJobForm from "../../components/PostaJobForm/PostaJobForm";

type PostJobProps = {
  authenticated: boolean;
  userId: string;
  notify: (message, type) => void;
};

const initialValues = {
  companyName: {
    value: ""
  },
  jobTitle: {
    value: ""
  },
  location: {
    value: ""
  },
  jobDescription: {
    value: ""
  },
  category: {
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

export default function PostJob({
  authenticated,
  userId,
  notify
}: PostJobProps) {
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
              onSubmit={values => {
                let valuesCopy = { ...values };

                Object.keys(valuesCopy).map(
                  key =>
                    (valuesCopy[key] = valuesCopy[key]
                      ? valuesCopy[key].value
                      : null)
                );
              }}
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

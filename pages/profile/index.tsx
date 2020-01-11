import React from "react";
import "./profile.scss";
import Head from "next/head";
import NavBar from "../../components/shared/NavBar/NavBar";
import nextCookie from "next-cookies";
import Footer from "../../components/shared/Footer/Footer";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
var jwtDecode = require("jwt-decode");
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Loading from "../../components/shared/Loading/Loading";
import { useToasts } from "react-toast-notifications";

type ProfileProps = {
  authenticated: boolean;
  userId: string;
};

const GET_USER = gql`
  query getUser($userId: ID!) {
    user(id: $userId) {
      id
      firstName
      lastName
      country
      phoneNumber
      headline
      skills
      about
      degree
      yearsOfExperience
    }
  }
`;

const UPDATE_USER = gql`
  mutation updateUser(
    $firstName: String
    $lastName: String
    $country: String
    $phoneNumber: String
    $yearsOfExperience: String
    $degree: String
    $headline: String
    $about: String
  ) {
    updateUser(
      firstName: $firstName
      lastName: $lastName
      country: $country
      phoneNumber: $phoneNumber
      yearsOfExperience: $yearsOfExperience
      degree: $degree
      headline: $headline
      about: $about
    ) {
      id
      firstName
      lastName
      country
      phoneNumber
      yearsOfExperience
      degree
      headline
      about
    }
  }
`;

export default function Profile({ authenticated, userId }: ProfileProps) {
  const [values, setValues] = React.useState({});
  const { addToast } = useToasts();
  const [isUpdatingUser, setIsUpdatingUser] = React.useState(false);
  const [updateUser] = useMutation(UPDATE_USER, {
    onCompleted: data => {
      setIsUpdatingUser(false);
      addToast("Saved Successfully", { appearance: "success" });
    },
    onError: err => {
      setIsUpdatingUser(false);
      addToast("Failed to Save. Please Try Again", { appearance: "error" });
    }
  });
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { userId },
    onCompleted: data => {
      let newValues = {};
      Object.keys(data.user).map(
        key => (newValues[key] = { value: data.user[key] })
      );
      setValues(newValues);
    }
  });

  //update user
  const handleUpdateUser = values => {
    if (!isUpdatingUser) {
      setIsUpdatingUser(true);
      delete values.id;
      Object.keys(values).map(key => (values[key] = values[key].value));
      updateUser({
        variables: {
          firstName: values.firstName,
          lastName: values.lastName,
          country: values.country,
          phoneNumber: values.phoneNumber,
          yearsOfExperience: values.yearsOfExperience,
          degree: values.degree,
          headline: values.headline,
          about: values.about
        }
      });
    }
  };

  // return loading when loading
  if (loading || !data) {
    return <Loading />;
  }
  return (
    <div>
      <Head>
        <title>Profile</title>
      </Head>
      <NavBar authenticated={authenticated} />
      <section className="section profile__section">
        <div className="container">
          <div className="profile__container">
            <h1 className="title">Account Settings</h1>

            <ProfileForm
              initialValues={values}
              onSubmit={handleUpdateUser}
              updatingUser={isUpdatingUser}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

Profile.getInitialProps = async ctx => {
  const { token } = nextCookie(ctx);
  const authenticated = token;
  const payload = jwtDecode(token);
  return { authenticated, userId: payload.userId };
};

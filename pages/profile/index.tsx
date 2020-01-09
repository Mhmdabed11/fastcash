import React from "react";
import "./profile.scss";
import Head from "next/head";
import NavBar from "../../components/shared/NavBar/NavBar";
import nextCookie from "next-cookies";
import Footer from "../../components/shared/Footer/Footer";
import ProfileForm from "../../components/ProfileForm/ProfileForm";

type ProfileProps = {
  authenticated: boolean;
};

export default function Profile({ authenticated }: ProfileProps) {
  return (
    <div>
      <Head>
        <title>Profile</title>
      </Head>
      <NavBar authenticated={authenticated} />
      <section className="section">
        <div className="container">
          <h1 className="title">Account Settings</h1>
          <ProfileForm />
        </div>
      </section>
      <Footer />
    </div>
  );
}

Profile.getInitialProps = async ctx => {
  const { token } = nextCookie(ctx);
  const authenticated = token;
  return { authenticated };
};

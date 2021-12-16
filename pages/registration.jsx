import React from "react";
import Layout from "../components/Layout/Layout";
import SignUp from "../components/AuthForm/SignUp";

const registration = () => {
  return (
    <div>
      <Layout>
        <SignUp />
      </Layout>
    </div>
  );
};

export default registration;

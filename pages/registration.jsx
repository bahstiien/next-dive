import React from "react";
import Layout from "../components/Layout";
import RegristrationForm from "../components/RegristrationForm";

const registration = () => {
  return (
    <div>
      <Layout>
        <h1>Inscription</h1>
        <p className="font-inter text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
          urna sem. Proin volutpat blandit elementum. Praesent vel magna
          pellentesque
        </p>
        <RegristrationForm />
      </Layout>
    </div>
  );
};

export default registration;

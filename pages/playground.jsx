import React from "react";
import Layout from "../components/Layout/Layout";

import { Divide as Hamburger } from "hamburger-react";
import DarkMode from "../components/Layout/DarkMode";

const playground = () => {
  return (
    <div>
      <Layout>
        <Hamburger size={48} />

        <DarkMode />
      </Layout>
    </div>
  );
};

export default playground;

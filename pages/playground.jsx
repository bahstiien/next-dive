import React from "react";
import Layout from "../components/Layout/Layout";

import { Divide as Hamburger } from "hamburger-react";

const playground = () => {
  return (
    <div>
      <Layout>
        <Hamburger size={48} />
      </Layout>
    </div>
  );
};

export default playground;

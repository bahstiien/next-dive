import React from "react";
import Layout from "../components/Layout";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});

const maps = () => {
  return (
    <div>
      <Layout>
        <h1>Nos clubs partenaires</h1>
        <Map />
      </Layout>
    </div>
  );
};

export default maps;

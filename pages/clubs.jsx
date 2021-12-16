import React from "react";
import Layout from "../components/Layout/Layout";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});

const maps = () => {
  const markers = [
    {
      id: 1,
      position: [48.652013, -2.82877],
      popup: {
        content: "Alpha Plongée ",
      },
    },
    {
      id: 1,
      position: [47.549662, -2.907777],
      popup: {
        content: "Bravo Diving",
      },
    },
    {
      id: 1,
      position: [45.578837, -0.990749],
      popup: {
        content: "Charlie Aventure",
      },
    },
  ];
  return (
    <div>
      <Layout name="Les clubs partenaires">
        <div className="flex justify-center mb-10">
          <Map
            h={"80vh"}
            w={"75vw"}
            markers={markers}
            //  mark={Mark}
            //  markStyle={{ color: "purple", weight: 5, opacity: 0.9 }}
          />
        </div>
      </Layout>
    </div>
  );
};

export default maps;

import Card from "./Card";
import React from "react";
import CTAbtn from "./CTAbtn";

const HomeDisplay = () => {
  return (
    <div>
      <div className="homeHeader mb-36">
        <h1 className="mt-14 homeh1 text-lg font-round mb-10 text-gray-90">
          ScubApp
        </h1>
        <p className="homeP font-round text-gray-300 p-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum
          quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero
          nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur
          ab.
        </p>

        <button className="HomeBtn">Découvrir Scubapp</button>
      </div>
      <Card />
      <CTAbtn classname="mb-4" />{" "}
    </div>
  );
};

export default HomeDisplay;

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
        <div className="flex justify-center">
          <button className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
            Découvrir Scubapp
          </button>
        </div>
      </div>
      <div className="flex items-center justify-around mb-48">
        <Card />
        <div className="w-1/3">
          <h1> Lorem Ipsum</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt sed eros eu vehicula. Pellentesque bibendum odio ac ex
            consequat, vitae feugiat velit viverra. Suspendisse potenti. Proin
            id interdum purus. Ut dui sapien, molestie vel leo et, mollis mollis
            nunc. Curabitur sed placerat tellus, quis luctus enim. Nullam et mi
            odio. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Aliquam sollicitudin nisl id congue efficitur. Quisque at augue est.
            Etiam et metus mi.
          </p>
        </div>
      </div>
      <CTAbtn title="Créer votre compte" />
    </div>
  );
};

export default HomeDisplay;

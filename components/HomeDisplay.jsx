import React from "react";
import CTAbtn from "./CTAbtn";
import style from "../styles/Home.module.css";

const HomeDisplay = () => {
  return (
    <div className={style.homeHeader}>
      <h1 className={style.homeh1}>ScubApp</h1>

      <p className={style.homeP}>
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
  );
};

export default HomeDisplay;

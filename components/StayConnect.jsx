import React from "react";
import CTAbtn from "../components/CTAbtn";

const StayConnect = () => {
  return (
    <div>
      <div className="px-6 py-6 bg-blue-800 dark:bg-gray-800 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
        <div className="xl:w-0 xl:flex-1">
          <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
            Restez connecté avec ScubApp
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            architecto. Molestiae natus at rem, itaque fugit, error esse
            voluptate est nihil voluptatum omnis cupiditate, aliquid mollitia?
            Ex molestiae iusto impedit!
          </p>
        </div>
        <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
          <CTAbtn title="Suivez nos actualités" />

          <p className="mt-3 text-sm leading-5 text-indigo-200">
            We care about the protection of your data. Your data is safe and
            never used for commercial purposes.
          </p>
          <p className="text-sm leading-5 text-indigo-200">
            In order to receive the notifications, you must give permission
            sufficient to your web browser.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StayConnect;

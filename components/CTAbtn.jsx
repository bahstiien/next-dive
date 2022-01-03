import React from "react";

const CTAbtn = (props) => {
  return (
    <div className="flex justify-center m-10">
      <button
        type={props.type}
        className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
      >
        {props.title}
      </button>
    </div>
  );
};

export default CTAbtn;

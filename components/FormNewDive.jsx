import React from "react";

const FormNewDive = (props) => {
  return (
    <div className="ml-2">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {props.label}
      </label>
      <input
        className="appearance-none block w-full bg-blue-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-100"
        type={props.type}
        id={props.id}
        name={props.name}
      />
    </div>
  );
};

export default FormNewDive;

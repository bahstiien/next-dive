import React from "react";

const Slide = (props) => {
  return (
    <div className="m-2 text-gray-400">
      <h1 className="text-gray-100"> {props.title}</h1>
      <p className="text-xs text-gray-100 m-4 "> {props.body}</p>
    </div>
  );
};

export default Slide;

import React from "react";

const Button = (props: any) => {
  //   const className = `bg-blue-700 px-5 py-2 rounded text-white ${props.className}`;
  return (
    <button
      className="bg-blue-700 px-5 py-2 rounded text-white font-semibold"
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;

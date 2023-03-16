import React from "react";

const Button = (props: any) => {
  //   const className = `bg-blue-700 px-5 py-2 rounded text-white ${props.className}`;
  return (
    <div className="bg-blue-700 px-5 py-2 rounded text-white font-semibold">
      {props.children}
    </div>
  );
};

export default Button;

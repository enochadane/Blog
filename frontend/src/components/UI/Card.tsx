import React from "react";

const Card = (props: any) => {
  return (
    <div className="m-2 p-10 rounded bg-gray-200 shadow-slate-800">
      {props.children}
    </div>
  );
};

export default Card;

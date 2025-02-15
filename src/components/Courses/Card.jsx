import React from "react";

const Card = ({ children }) => {
  return <div className="rounded-lg flex flex-col p-4 gap-4">{children}</div>;
};

export default Card;

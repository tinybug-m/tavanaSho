import React from "react";

const Card = ({ rounded, bgColor, shadow, children }) => {
  return (
    <div
      className={`flex overflow-hidden flex-col gap-4 ${
        shadow ? "shadow-sm" : ""
      } ${rounded ? "rounded-2xl" : ""}`}
      style={{
        backgroundColor: bgColor || "transparent",
      }}
    >
      {children}
    </div>
  );
};

export default Card;

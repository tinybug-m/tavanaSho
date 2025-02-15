import React from "react";

const IconTextCard = ({ icon = "Users.svg", text }) => {
  return (
    <div className="flex flex-col items-center relative">
      <img
        src={`./images/Icons/${icon}`}
        alt={`${text} Icon`}
        className="w-7 h-7"
      />
      <img
        src="./images/Icons/circle.svg"
        alt="Circle Shape Icon"
        className="absolute -top-0.5 right-6 -z-10"
      />
      <h5 className="text-sm">{text}</h5>
    </div>
  );
};

export default IconTextCard;

import React from "react";
import { ReactNode } from "react";

type CardProps = {
  rounded?: boolean;
  bgColor?: string;
  shadow?: boolean;
  children: ReactNode;
};

const Card = ({ rounded, bgColor, shadow, children }: CardProps) => {
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

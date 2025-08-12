import React from "react";

import Card from "./Card";
import IconTextCard from "../Widgets/IconTextCard";

type TopCoursesCardProps = {
  img: string;
  title: string;
  date: string;
  enrolled: number;
  u;
};

const TopCoursesCard = ({ data }) => {
  return (
    <Card>
      <div className="flex justify-center items-center">
        <img
          src="./images/Icons/Play.png"
          alt="Play Icon"
          className="absolute cursor-pointer hover:scale-105"
        />
        <img src={data.img} className="rounded-lg mb-2 w-full h-64" />
      </div>

      <div className="flex justify-between px-6">
        <h3 className="text-base font-bold truncate cursor-pointer">
          {data.title}
        </h3>
        <p className="text-gray-600 text-sm">{data.date}</p>
      </div>

      <div className="gradient-border-card">
        <div className="flex flex-row justify-center p-3">
          <IconTextCard icon="Users.svg" text={`${data.enrolled} دانشجو`} />
          <div className="divider divider-horizontal !p-0"></div>
          <IconTextCard icon="Profile.svg" text={`${data.enrolled} دانشجو`} />
          <div className="divider divider-horizontal !p-0"></div>
          <IconTextCard icon="Time.svg" text={`${data.enrolled} دانشجو`} />
        </div>
      </div>
    </Card>
  );
};

export default TopCoursesCard;

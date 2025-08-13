import React from "react";

import Card from "./Card";
import IconTextCard from "../Widgets/IconTextCard";
import { BestCoursesDataProps } from "../../utils/mockDatas";

const TopCoursesCard = ({ props }: { props: BestCoursesDataProps }) => {
  const { img, title, date, enrolled } = props;

  return (
    <Card>
      <div className="flex justify-center items-center">
        <img
          src="./images/Icons/Play.png"
          alt="Play Icon"
          className="absolute cursor-pointer hover:scale-105"
        />
        <img src={img} className="rounded-lg mb-2 w-full h-64" />
      </div>

      <div className="flex justify-between px-6">
        <h3 className="text-base font-bold truncate cursor-pointer">{title}</h3>
        <p className="text-gray-600 text-sm">{date}</p>
      </div>

      <div className="gradient-border-card">
        <div className="flex flex-row justify-center p-3">
          <IconTextCard icon="Users.svg" text={`${enrolled} دانشجو`} />
          <div className="divider divider-horizontal !p-0"></div>
          <IconTextCard icon="Profile.svg" text={`${enrolled} دانشجو`} />
          <div className="divider divider-horizontal !p-0"></div>
          <IconTextCard icon="Time.svg" text={`${enrolled} دانشجو`} />
        </div>
      </div>
    </Card>
  );
};

export default TopCoursesCard;

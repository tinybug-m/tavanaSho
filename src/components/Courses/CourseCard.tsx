import React from "react";

import { StarIcon, EnrolledIcon, UserIcon, HexoIcon } from "../../assets/icons";
import Card from "./Card";

const CourseCard = ({ data }) => {
  return (
    <Card bgColor="#F9F9F9" rounded shadow>
      <img src={data.img} className="rounded-lg  w-full h-44" />
      {data.discount && (
        <div className="w-11 h-11 absolute left-10 top-40 flex justify-center items-center text-xs font-bold">
          <span className="absolute">{data.discount}%</span>
          <HexoIcon />
        </div>
      )}

      <div className="px-6 py-5">
        <h3 className="text-lg font-semibold">{data.title}</h3>
        <p className="line-clamp-2 ">{data.description}</p>

        <div className="flex justify-between">
          <span className="flex items-center gap-1 text-sm text-gray-600">
            <EnrolledIcon className="w-5 h-5" />
            {data.teacher}
          </span>
          <div className="flex items-center gap-1 text-primary">
            <p>{data.rate}</p>
            <StarIcon className="ml-3" />
          </div>
        </div>

        <div className="divider !m-0"></div>

        <div className="flex justify-between items-end">
          <span className="flex items-center gap-1">
            <UserIcon className="w-5 h-5" />
            {data.enrolled}
          </span>
          <div>
            <p className="text-xs line-through text-gray-600">
              {data.discountedPrice.toLocaleString()} تومان
            </p>
            <p className=" text-red-500">{data.price} تومان</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;

import Card from "./Card";
import { EnrolledIcon, Left2Icon } from "../../assets/icons";
import React from "react";
import { BlogCardDataProps } from "../../utils/mockDatas";

const BlogCard = ({ props }: { props: BlogCardDataProps }) => {
  const { img, title, desc, teacher, date } = props;

  return (
    <Card>
      <img src={img} className="rounded-lg mb-2 w-full h-44" />

      <h3 className="text-base font-bold truncate cursor-pointer">{title}</h3>
      <p className="text-gray-600 text-sm line-clamp-3">{desc}</p>

      <div className="flex justify-between">
        <span className="flex items-center gap-1 text-sm text-gray-600">
          <EnrolledIcon />
          {teacher}
        </span>
        <p>{date}</p>
      </div>
      <div className="divider !m-0" />
      <div className="flex justify-center gap-1.5">
        مطالعه مقاله
        <Left2Icon />
      </div>
    </Card>
  );
};

export default BlogCard;

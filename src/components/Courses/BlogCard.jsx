/**
 *
 * Icons
 */

import Card from "./Card";
import Enrolled from "../../assets/icons/Enrolled.svg";
import Left from "../../assets/icons/Left2.svg";

const BlogCard = ({ data }) => {
  return (
    <Card>
      <img src={data.img} className="rounded-lg mb-2 w-full h-44" />

      <h3 className="text-base font-bold truncate cursor-pointer">
        {data.title}
      </h3>
      <p className="text-gray-600 text-sm line-clamp-3">{data.desc}</p>

      <div className="flex justify-between">
        <span className="flex items-center gap-1 text-sm text-gray-600">
          <img src={Enrolled} className="w-5 h-5" alt="Enrolled Icon" />
          {data.teacher}
        </span>
        <p>{data.date}</p>
      </div>
      <div className="divider !m-0" />
      <div className="flex justify-center gap-1.5">
        مطالعه مقاله
        <img src={Left} alt="Left2 Icon" />
      </div>
    </Card>
  );
};

export default BlogCard;

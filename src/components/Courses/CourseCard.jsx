/**
 *
 * Icons
 */
import Star from "../../assets/icons/Star.svg";
import Enrolled from "../../assets/icons/Enrolled.svg";
import User from "../../assets/icons/User.svg";
import Hexo from "../../assets/icons/Hexo.svg";
import Card from "./Card";
import IconTextCard from "../Widgets/IconTextCard";

const CourseCard = ({ data }) => {
  return (
    <Card bgColor="#F9F9F9" rounded shadow>
      <img src={data.img} className="rounded-lg  w-full h-44" />
      {data.discount && (
        <div className="w-11 h-11 absolute left-10 top-40 flex justify-center items-center text-xs font-bold">
          <span className="absolute">{data.discount}%</span>
          <img src={Hexo} alt="Hexo Icon" />
        </div>
      )}

      <div className="px-6 py-5">
        <h3 className="text-lg font-semibold">{data.title}</h3>
        <p className="line-clamp-2 ">{data.description}</p>

        <div className="flex justify-between">
          <span className="flex items-center gap-1 text-sm text-gray-600">
            <img src={Enrolled} className="w-5 h-5" alt="Enrolled Icon" />
            {data.teacher}
          </span>
          <div className="flex items-center gap-1 text-primary">
            <p>{data.rate}</p>
            <img
              src={Star}
              className="flex items-center gap-1 w-4 h-4 ml-3"
              alt="Start Icon"
            />
          </div>
        </div>

        <div className="divider !m-0"></div>

        <div className="flex justify-between items-end">
          <span className="flex items-center gap-1">
            <img src={User} className="w-5 h-5" alt="User Icon" />
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

import React from "react";
import { EducationIcon } from "../../assets/icons";

const HeroGIgili = ({ top = 2, right = 1 }) => {
  return (
    <div
      className="stat absolute bg-[#F3733530] moz z-10 rounded-4xl max-w-56 px-4 py-2 text-right flex items-center"
      style={{ top: `${top}rem`, right: `-${right}rem` }}
    >
      <i></i>
      <div className="stat-figure text-secondary">
        <div className="avatar online">
          <div className="!flex items-center w-16 rounded-full bg-[#FEFEFE40] p-3">
            <EducationIcon />
          </div>
        </div>
      </div>
      <div>
        <div className="stat-value text-lg">+1245</div>
        <div className="stat-desc text-gray-950 text-sm">
          ثبت نام در دوره ها
        </div>
      </div>
    </div>
  );
};

// Setting defaultProps correctly
HeroGIgili.defaultProps = {
  top: 2.5,
  right: 10,
};

export default HeroGIgili;

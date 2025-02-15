import React from "react";
import Foreign from "../assets/icons/Foreign.svg";
import PlayOctagon from "../assets/icons/PlayOctagon.svg";


import HeroImage from "../assets/hero.png";
import HeroGIgili from "./Widgets/HeroGIgili";

const MainHero = () => {
  return (
    <div className="hero mt-8">
      <div className="hero-content flex-col lg:flex-row lg:flex justify-between">
        {/* Text Section: Takes 4/12 on large screens */}
        <div className="lg:w-4/12 w-full mt-4 lg:mt-0">
          <h1 className="text-5xl font-bold ">
            راهی به سوی بهترین نسخه از <div className="text-primary">خودت!</div>
          </h1>
          <p className="py-6">
            با دوره ها و ابزار های توانا شو به رشد شخصی خودت سرعت بده و به
            بهترین نسخه خودت تبدیل شو.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-lg border-0 bg-primary text-white rounded-full font-bold gap-2.5 ">
              <img src={Foreign} alt="Foreign Icon" />
              ازینجا شروع کن
            </button>
            <button className="btn btn-lg border-0 rounded-full font-bold gap-2.5 !bg-transparent">
              <img src={PlayOctagon} alt="Foreign Icon" />
              ازینجا شروع کن
            </button>
          </div>
        </div>

        {/* Image Section: Takes 8/12 on large screens */}
        <div className="lg:w-6/12 w-full relative ">
          <img src={HeroImage} alt="Hero Image" className="w-full" />
          <HeroGIgili />
          <HeroGIgili top={8} right={3} />
        </div>
      </div>
    </div>
  );
};

export default MainHero;

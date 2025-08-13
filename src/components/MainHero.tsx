import React from "react";

import HeroGIgili from "./Widgets/HeroGIgili";
import { ForeignIcon, PlayOctagonIcon } from "../assets/icons";

const MainHero = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row lg:flex justify-between">
        <div className="lg:w-4/12 w-full mt-4 lg:mt-0">
          <h1 className="text-5xl font-bold relative heigh leading-normal">
            <div className="absolute w-60 h-60 bg-[#FBD4C090] -top-24 -right-24 rounded-full blur-3xl -z-10"></div>
            راهی به سوی بهترین نسخه از
            <span className="text-primary">خودت!</span>
          </h1>
          <p className="py-6 text-xl">
            با دوره ها و ابزار های توانا شو به رشد شخصی خودت سرعت بده و به
            بهترین نسخه خودت تبدیل شو.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-lg h-auto px-5 py-3.5 border-0 bg-primary text-white rounded-3xl font-bold gap-2.5 ">
              <ForeignIcon />
              ازینجا شروع کن
            </button>
            <button className="btn btn-lg border-0 rounded-3xl font-bold gap-2.5 !bg-transparent">
              <PlayOctagonIcon />
              ازینجا شروع کن
            </button>
          </div>
        </div>

        <div className="lg:w-6/12 w-full relative ">
          <img src="images/hero.png" alt="Hero Image" className="w-full " />
          <HeroGIgili />
          <HeroGIgili top={8} right={3} />
        </div>
      </div>
    </div>
  );
};

export default MainHero;

import React from "react";

// import Artboard0 from "../assets/Logos/Artboard0.svg";
// import Artboard1 from "../assets/Logos/Artboard1.svg";
// import Artboard2 from "../assets/Logos/Artboard2.svg";
import { Artboard0, Artboard1, Artboard2 } from "../assets/Logos";

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-0 justify-between">
      <div className="w-full md:w-6/12 flex flex-col">
        <h1 className="text-primary text-4xl font-bold mb-4">دربــــاره ما</h1>
        <p className="text-gray-600 text-xl">
          در توانا شو، به توانایی‌های بی‌پایان انسان‌ها باور داریم. هدف ما ارائه
          منابع آموزشی، محتوای الهام‌بخش و ابزارهای کاربردی برای کمک به شما در
          توسعه فردی و حرفه‌ای است. تیم ما متشکل از متخصصین با تجربه است که در
          کنار شما هستند تا به بهترین نسخه از خودتان تبدیل شوید. با ما، مسیر رشد
          و شکوفایی را آغاز کنید!
        </p>
      </div>
      <div className="w-full md:w-6/12 flex relative gap-6 items-end justify-center md:justify-end">
        <div className="flex items-center p-4 w-24 h-24 rounded-full bg-secondary hover:bg-primary cursor-pointer">
          <Artboard0 />
        </div>
        <div className="flex items-center p-4 w-24 h-24 rounded-full bg-secondary hover:bg-primary cursor-pointer">
          <Artboard1 />
        </div>
        <div className="flex items-center p-4 w-24 h-24 rounded-full bg-secondary hover:bg-primary cursor-pointer">
          <Artboard2 />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

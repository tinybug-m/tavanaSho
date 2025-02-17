import React from "react";

/**
 * 
 * Images
 */
import Artboard0 from '../assets/Logos/Artboard0.svg'
import Artboard1 from '../assets/Logos/Artboard1.svg'
import Artboard2 from '../assets/Logos/Artboard2.svg'


const AboutUs = () => {
  return (
    <div className=" flex justify-between">
      <div className="w-6/12 flex flex-col">
        <h1 className="text-primary text-4xl font-bold mb-4">دربــــاره ما</h1>
        <p className="text-gray-600 text-xl">
          در توانا شو، به توانایی‌های بی‌پایان انسان‌ها باور داریم. هدف ما ارائه
          منابع آموزشی، محتوای الهام‌بخش و ابزارهای کاربردی برای کمک به شما در
          توسعه فردی و حرفه‌ای است. تیم ما متشکل از متخصصین با تجربه است که در
          کنار شما هستند تا به بهترین نسخه از خودتان تبدیل شوید. با ما، مسیر رشد
          و شکوفایی را آغاز کنید!
        </p>
      </div>
      <div className="w-6/12 flex  relative gap-6 items-end justify-end">
        <img className="p-4 w-24 h-24 rounded-full bg-secondary hover:bg-primary cursor-pointer" src={Artboard0} alt="Artboard 1"/>
        <img className="p-4 w-24 h-24 rounded-full bg-secondary hover:bg-primary cursor-pointer" src={Artboard1} alt="Artboard 2"/>
        <img className="p-4 w-24 h-24 rounded-full bg-secondary hover:bg-primary cursor-pointer" src={Artboard2} alt="Artboard 3"/>
      </div>
    </div>
  );
};

export default AboutUs;

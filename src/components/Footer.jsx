import React from "react";

/**
 * Icons
 */
import Telegram from "../assets/icons/Social/Telegram.svg";
import Instagram from "../assets/icons/Social/Instagram.svg";
import Twitter from "../assets/icons/Social/Twitter.svg";

/**
 * Data
 */
const pages = [
  "ارتباط با ما",
  "تماس با ما",
  "مقالات",
  "خدمات تواناشو",
  "دوره ها",
];

const Footer = () => {
  return (
    <div className="bg-[#FFEFEB] pt-14 pb-9">
      <div className="max-w-screen-xl flex flex-col m-auto gap-8">
        <div className="flex gap-16 justify-center">
          {pages.map((page) => (
            <a href="#" className="text-xl">
              {page}
            </a>
          ))}
        </div>
        <div className="divider"></div>
        <div className="flex justify-between items-center">
          <p>
            کلیه حقوق مادی و معنوی سایت محفوظ است و هر گونه کپی برداری شامل
            پیگرد قانونی است
          </p>
          <div className="flex gap-5">
            <div className="bg-secondary cursor-pointer hover:bg-primary p-5 rounded-full" >
              <img className="w-6 h-6" src={Telegram} alt="Telegram icon" />
            </div>
            <div className="bg-secondary cursor-pointer hover:bg-primary p-5 rounded-full" >
              <img className="w-6 h-6" src={Instagram} alt="Instagram icon" />
            </div>
            <div className="bg-secondary cursor-pointer hover:bg-primary p-5 rounded-full" >
              <img className="w-6 h-6" src={Twitter} alt="Twitter icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

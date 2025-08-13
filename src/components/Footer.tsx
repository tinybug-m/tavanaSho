import React from "react";

import {
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
} from "../assets/icons/Social";
import { APP_PAGES } from "../utils/mockDatas";

const Footer = () => {
  return (
    <div className="bg-[#FFEFEB] ">
      <div className="max-w-screen-xl flex flex-col m-auto gap-8  pt-14 pb-9 relative">
        <img
          alt="Tavanasho logo"
          src="images/logoFooter.png"
          className="absolute -top-10 -right-2"
        />

        <div className="flex gap-16 justify-center">
          {APP_PAGES.map((page, index) => (
            <a href="#" key={index} className="text-xl">
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
            <div className="bg-secondary cursor-pointer hover:bg-primary p-5 rounded-full">
              <TelegramIcon />
            </div>
            <div className="bg-secondary cursor-pointer hover:bg-primary p-5 rounded-full">
              <InstagramIcon />
            </div>
            <div className="bg-secondary cursor-pointer hover:bg-primary p-5 rounded-full">
              <TwitterIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

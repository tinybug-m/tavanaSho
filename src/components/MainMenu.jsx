import React from "react";
import logo from "../assets/logo.png";
import ProfileIcon from "../assets/icons/Profile.svg";

const MainMenu = () => {
  return (
    <div className="fixed w-full left-0 top-0 z-50 bg-white">
      <div className="max-w-screen-xl mx-auto navbar px-16 py-6">
        <div className="">
          <a className="">
            <img alt="Tavanasho logo" src={logo} />
          </a>
        </div>

        <div className="flex-1 pr-14">
          <ul className="menu menu-horizontal text-base">
            <li>
              <details>
                <summary>دوره ها</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>خودشناسی</a>
                  </li>
                  <li>
                    <a>هوش هیچانی در روابط</a>
                  </li>
                  <li>
                    <a>هوش اجتماعی در مجیط کار</a>
                  </li>
                  <li>
                    <a>روابط عاشقانه</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>مقالات آموزشی</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>خودشناسی</a>
                  </li>
                  <li>
                    <a>هوش هیجانی</a>
                  </li>
                  <li>
                    <a>هوش اجتماعی</a>
                  </li>
                  <li>
                    <a>روابط عاشقانه</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>آزمون ها</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>scl 90</a>
                  </li>
                  <li>
                    <a>آزمون mmpi</a>
                  </li>
                  <li>
                    <a>آزمون mbti</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>درباره ما</a>
            </li>
          </ul>
        </div>

        <div className="flex gap-4 ltr">
          <label className="input rounded-full bg-gray-100 border-0 !outline-0 !shadow-none px-4 h-12 min-w-64" >
            <input
              type="search"
              required
              placeholder="چی میخوای یاد بگیری ؟"
              className="peer"
            />
            <svg
              className="h-6 opacity-50 transition-transform peer-focus:scale-120"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
          </label>

          <div className="w-12 h-12 min-w-12 flex justify-center items-center rounded-full bg-gray-950">
            <img alt="Tailwind CSS Navbar component" src={ProfileIcon} className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;

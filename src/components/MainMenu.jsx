import React from "react";
import logo from "../assets/logo.png";
import ProfileIcon from "../assets/icons/Profile.svg";

const MainMenu = () => {
  return (
    <div className="navbar px-16 py-6">
      <div className="">
        <a className="">
          <img alt="Tavanasho logo" src={logo} />
        </a>
      </div>

      <div className="flex-1">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>دوره ها</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>دوره 1</a>
                </li>
                <li>
                  <a>دوره 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>مقالات آموزشی</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>مقاله 1</a>
                </li>
                <li>
                  <a>مقاله 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>آزمون ها</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>آزمون 1</a>
                </li>
                <li>
                  <a>آزمون 2</a>
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
        <label className="input rounded-full bg-gray-100 border-0 !outline-0 !shadow-none">
          <input type="search" required placeholder="چی میخوای یاد بگیری ؟" className="peer" />
          <svg
            className="h-[1em] opacity-50 transition-transform peer-focus:scale-120"
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

        <div className="w-9 h-9 min-w-9 p-2 flex justify-center rounded-full bg-gray-950">
          <img alt="Tailwind CSS Navbar component" src={ProfileIcon} />
        </div>
      </div>
    </div>
  );
};

export default MainMenu;

import React, { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const MainMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="fixed w-full left-0 top-0 z-50 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <a>
          <img alt="Tavanasho logo" src="images/logo.png" className="h-10" />
        </a>

        <DesktopMenu />

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {/* {mobileOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />} */}
          {mobileOpen ? "open" : "close"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && <MobileMenu />}
    </div>
  );
};

export default MainMenu;

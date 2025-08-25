import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Hamburger from "./Hamburger"

const MainMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="fixed w-full left-0 top-0 z-50 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <a>
          <img alt="Tavanasho logo" src="images/logo.png" />
        </a>

        <DesktopMenu />

        {/* Mobile Menu Button */}
        <Hamburger
          open={mobileOpen}
          onToggle={() => setMobileOpen(!mobileOpen)}
        />
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && <MobileMenu />}
    </div>
  );
};

export default MainMenu;

import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [toggleMobileHeader, setToggleMobileHeader] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const location = useLocation();

  const darkModeToggle = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  return (
    <header
      data-testid="header"
      className="sticky w-full flex justify-center top-0 h-14 z-40 bg-white shadow-md"
    >
      <nav
        data-testid="header-nav"
        className={`max-w-[1200px] w-full flex items-center justify-between flex-wrap h-full z-50 px-4 py-2 shadow-md md:shadow-none bg-white`}
      >
        <div className="flex flex-col text-sm text-left items-start flex-shrink-0  text-white mr-6">
          {/* <div className="font-semibold tracking-tight">Bodrum</div>
          <div className="font-semibold tracking-tight">Sualtı Hizmetleri</div> */}
        </div>

        <div className="block md:hidden ">
          <button
            onClick={() => {
              setToggleMobileHeader(!toggleMobileHeader);
            }}
            className="flex items-center px-3 py-2 border border-blue-600 rounded text-blue-600 "
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          style={{ transition: "height .25s ease-out" }}
          className={`w-full overflow-hidden absolute top-full left-0 md:top-auto md:left-auto bg-white  flex-grow 
        md:h-auto md:relative md:flex md:items-center md:w-auto ${
          toggleMobileHeader ? "h-56" : "h-0"
        }`}
        >
          <div
            data-testid="header-nav-links"
            onClick={() => setToggleMobileHeader(false)}
            className="text-sm md:flex-grow md:flex md:justify-end"
          >
            <NavLink path="/#anasayfa" text="Anasayfa" />
            <NavLink path="/#hizmetlerimiz" text="Hizmetlerimiz" />
            {/* <NavLink path="/#hakkımızda" text="Hakkımızda" /> */}
            <NavLink path="/#foto-galeri" text="Galeri" />
            <NavLink path="/#iletişim" text="İletişim" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

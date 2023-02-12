import React from "react";
import { Link } from "react-router-dom";

type NavProps = {
  text: string;
  path: string;
  style?: React.CSSProperties;
};

const NavLink: React.FC<NavProps> = ({ style, text, path }) => {
  return (
    <a
      href={path}
      style={style}
      className={`block p-2 font-semibold rounded text-base uppercase text-white md:inline-block md:mt-0 dark:hover:bg-primary hover:bg-primaryDark mr-4`}
    >
      {text}
    </a>
  );
};

export default NavLink;

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
      className={`block p-2 font-semibold rounded text-lg text-blue-600 md:inline-block md:mt-0 hover:bg-blue-600 hover:text-white mx-4 md:mx-0 md:mr-4`}
    >
      {text}
    </a>
  );
};

export default NavLink;

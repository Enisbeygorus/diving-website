import React from "react";

interface IButton {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Button = ({ children, onClick, style }: IButton) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`bg-primary hover:bg-primaryHover w-full text-white font-bold py-2 px-4 rounded`}
    >
      {children}
    </button>
  );
};

export default Button;

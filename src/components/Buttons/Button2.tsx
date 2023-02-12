import React from "react";

interface IButton2 {
  title: string;
  content?: JSX.Element | JSX.Element[];
  className?: string;
  onClick?: () => void;
}

const Button2 = ({ title, content, onClick, className }: IButton2) => {
  return (
    <button
      onClick={onClick}
      className={`${className} font-bold flex w-32 mx-2 md:mx-4 cursor-pointer border-b-4 border-primaryDark2 hover:bg-primaryDark2 
      p-2 rounded-md md:w-40 justify-around bg-primary text-white`}
    >
      <span>{title}</span>
      {content}
    </button>
  );
};

export default Button2;

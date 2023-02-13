import React from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

export const ButtonPrimary: React.FC<ButtonProps> = (props) => {
  const { className, children, ...rest } = props;

  return (
    <button
      className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export const ButtonSecondary: React.FC<ButtonProps> = (props) => {
  const { className, children, ...rest } = props;

  return (
    <button
      className={`py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

import React from "react";

const Button = ({
  variant = "contained",
  children,
  onClick,
  type = "button",
}) => {
  if (variant === "text") {
    return (
      <button
        className="text-slate-400 text-xs sm:text-sm md:text-md lg:text-base hover:text-teal-500"
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    );
  }
  if (variant === "contained") {
    return (
      <button
        className="bg-teal-500 flex justify-center items-center flex-0 min-w-fit py-3 px-3 sm:px-4 md:px-5 text-xs sm:text-sm md:text-md lg:px-5 font-semibold  text-teal-100 rounded hover:bg-teal-600 hover:shadow-md"
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    );
  }
  if (variant === "icon") {
    return (
      <button
        className="bg-transparent hover:bg-red-300 p-2 flex justify-center items-center flex-0 min-w-fit text-xs sm:text-sm md:text-md font-semibold text-teal-100 rounded-full"
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    );
  }
};

export default Button;

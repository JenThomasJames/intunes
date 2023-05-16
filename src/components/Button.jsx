import React from "react";

const Button = ({ variant = "text", children, onClick }) => {
  if (variant === "text") {
    return (
      <button
        className="text-slate-400 text-lg hover:text-teal-500"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
};

export default Button;

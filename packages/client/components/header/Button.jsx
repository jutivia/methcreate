import React from "react";

const Button = ({ text, style, onClickHandle }) => {
  return (
    <button
      onClick={onClickHandle}
      className={`rounded-[24px] p-2 px-4 bg-[#6624FF] ${style}`}
    >
      {text}
    </button>
  );
};

export default Button;

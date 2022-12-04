import React from "react";

const Button = ({ text, onClickHandle }) => {
  return (
    <button
      onClick={onClickHandle}
      className="rounded-[24px] p-2 px-4 bg-[#6624FF]"
    >
      {text}
    </button>
  );
};

export default Button;

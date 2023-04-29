import React from "react";

export const MenuIcon = ({
  border = "border-2",
  width = "w-12",
  gap = "gap-2",
  setIsMenuToggled,
  isMenuToggled,
}) => {
  return (
    <button
      className={`flex flex-col items-center text-white ${gap} cursor-pointer`}
      onClick={() => setIsMenuToggled(!isMenuToggled)}
    >
      <span className={`${border} ${width} h-1`}></span>
      <span className={`${border} ${width} h-1`}></span>
      <span className={`${border} ${width} h-1`}></span>
    </button>
  );
};

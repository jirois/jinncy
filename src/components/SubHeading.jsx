import React from "react";

const SubHeading = ({ text }) => {
  return (
    <div className="flex gap-4 ">
      <span className="text-deep-orange font-bold">/</span>
      <p className="text-orange font-bold text-[16px]">{text}</p>
    </div>
  );
};

export default SubHeading;

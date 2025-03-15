import React from "react";

const Chips = ({ img, heading, subHeading, icon, bgColor, textColor }) => {
  return (
    <div className="box-container w-[300px] h-[90px]">
      <div
        style={{ backgroundColor: bgColor }}
        className="box flex rounded-2xl items-center p-4 gap-6 h-full w-full justify-between"
      >
        <div className="flex gap-6">
          <img className="h-[50px]" src={img} alt="icon" />
          <div className="flex flex-col gap-1">
            <div className="text-md font-bold text-left leading-[19px]">
              {heading}
            </div>
            <div
              style={{ color: textColor }}
              className="text-xs font-semibold text-left"
            >
              {subHeading}
            </div>
          </div>
        </div>
        {icon}
      </div>
    </div>
  );
};

export default Chips;

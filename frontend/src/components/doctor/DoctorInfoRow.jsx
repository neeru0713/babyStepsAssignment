import React from "react";

const DoctorInfoRow = ({heading, data, icon}) => {
  return (
    <div className="text-sm text-gray-700 flex flex-col gap-2 text-left">
      <p className="flex flex-row items-center gap-2">
        {icon}
        <span className="font-semibold"> {heading}: </span>
      </p>

      <span> {data}</span>
    </div>
  );
};

export default DoctorInfoRow;

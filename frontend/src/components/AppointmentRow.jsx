import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const suffix =
    day === 1 || day === 21 || day === 31
      ? "st"
      : day === 2 || day === 22
      ? "nd"
      : day === 3 || day === 23
      ? "rd"
      : "th";

  return `${day}${suffix} ${date.toLocaleString("en-US", {
    month: "short",
  })} ${date.getFullYear()}`;
};

const formatTime = (dateString) => {
  return new Date(dateString).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const AppointmentRow = ({ appointment, handleDelete }) => {
  return (
    <tr className="text-center">
      <td className="p-3 border border-gray-300">{appointment.doctorId.name}</td>
      <td className="p-3 border border-gray-300">{appointment.patientName}</td>
      <td className="p-3 border border-gray-300">{formatDate(appointment.date)}</td>
      <td className="p-3 border border-gray-300">{formatTime(appointment.date)}</td>
      <td className="p-3 border border-gray-300">
        <button className="text-blue-500 hover:text-blue-700 mr-3">
          <TbEdit size={18} />
        </button>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => handleDelete(appointment._id)}
        >
          <MdDeleteOutline size={18} />
        </button>
      </td>
    </tr>
  );
};

export default AppointmentRow;

import React from "react";
import { FaUserMd, FaUser, FaCalendarAlt, FaClock, FaTools } from "react-icons/fa";
import AppointmentRow from "./AppointmentRow";

const AppointmentTable = ({ appointments, handleCancelAppointment }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-50">
            <th className="p-3 border border-gray-300 text-center">
              <div className="flex items-center justify-center gap-2">
                <FaUserMd className="text-blue-500" /> <span>Doctor</span>
              </div>
            </th>
            <th className="p-3 border border-gray-300 text-center">
              <div className="flex items-center justify-center gap-2">
                <FaUser className="text-green-500" /> <span>Patient</span>
              </div>
            </th>
            <th className="p-3 border border-gray-300 text-center">
              <div className="flex items-center justify-center gap-2">
                <FaCalendarAlt className="text-red-500" /> <span>Date</span>
              </div>
            </th>
            <th className="p-3 border border-gray-300 text-center">
              <div className="flex items-center justify-center gap-2">
                <FaClock className="text-purple-500" /> <span>Time Slot</span>
              </div>
            </th>
            <th className="p-3 border border-gray-300 text-center">
              <div className="flex items-center justify-center gap-2">
                <FaTools className="text-gray-600" /> <span>Actions</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <AppointmentRow
              key={appointment._id}
              appointment={appointment}
              handleCancelAppointment={handleCancelAppointment}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentTable;

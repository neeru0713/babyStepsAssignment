import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from "react-redux";
import { updateSelectedDate } from "../redux/actions/appointmentAction";

const Slots = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.appointment.selectedDate);
  const [availableDates, setAvailableDates] = useState([]);
  const selectedDoctor = useSelector((state) => state.doctor.selectedDoctor);

  useEffect(() => {
    if (selectedDoctor) {
      const today = new Date();
      const next7Days = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(today.getDate() + i);
        return date;
      });

      setAvailableDates(next7Days);
    }
  }, [selectedDoctor]);

  const handleDateChange = (date) => {
    dispatch(updateSelectedDate(date));
  };

  return (
    <div className="slots-card bg-white p-4 rounded-xl border border-gray-200 w-[80%] h-full flex flex-col">
      {selectedDoctor ? (
        <div className="mt-4 flex flex-col items-start gap-1">
          <label className="block text-gray-700 font-medium text-center">
            Select Date:
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            includeDates={availableDates}
            dateFormat="MMMM d, yyyy"
            className="border p-2 rounded-md w-full mt-2"
          />
        </div>
      ) : (
        <p className="text-center text-gray-500">
          Please select a doctor first.
        </p>
      )}

      <div className="flex-grow mt-4">slot</div>
    </div>
  );
};

export default Slots;

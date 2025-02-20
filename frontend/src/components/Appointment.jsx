import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAppointmentDetails, bookAppointment } from "../redux/actions/appointmentAction";
import Selector from "./form/Selector";
import { Link } from "react-router-dom";
const Appointment = () => {
  const dispatch = useDispatch();
  const appointment = useSelector((state) => state.appointment.appointment);

  const appointmentTypes = [
    { label: "Routine Check-Up", value: "Routine Check-Up" },
    { label: "Dental Consultation", value: "Dental Consultation" },
    { label: "Eye Check-Up", value: "Eye Check-Up" },
    { label: "General Consultation", value: "General Consultation" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setAppointmentDetails({ ...appointment , [name]: value }));
  };

  const onSelectorChange = (name, value, type) => {
    dispatch(setAppointmentDetails({ ...appointment , [name]: value }));
  };

  const bookAppointmentHandler = () => {
   dispatch(bookAppointment())
  };

  return (
    <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-lg mx-auto mt-20">
      <h2 className="text-xl font-bold text-gray-700 mb-8">
        Book an Appointment
      </h2>

      <div className="gap-8 flex flex-col w-full items-center text-left">
        <div className="w-full ">
          <label className="block text-gray-600 font-medium mb-1 ml-2 p-1">
            Appointment Type
          </label>

          <Selector
            options={appointmentTypes}
            name="appointmentType"
            value={appointment.appointmentType}
            updateValue={onSelectorChange}
            className="w-full  focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="w-full ml-2">
          <label className="block text-gray-600 font-medium mb-1 p-1">
            Patient Name
          </label>
          <input
            type="text"
            name="patientName"
            value={appointment.patientName}
            onChange={handleChange}
            className="w-full border py-[8px] px-2 rounded-md focus:ring focus:ring-blue-300 border-gray-600"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="w-full ml-2">
          <label className="block text-gray-600 font-medium mb-1 p-1">
            Additional Notes
          </label>
          <textarea
            name="notes"
            value={appointment.notes}
            onChange={handleChange}
            className="w-full border p-2 rounded-md focus:ring focus:ring-blue-300"
            rows="3"
            placeholder="Enter any additional information..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 text-white p-2 rounded-md hover:bg-orange-700 transition"
          onClick={bookAppointmentHandler}
        >
          Book Appointment
        </button>
      </div>

      <Link to="/">
        <button className="absolute bottom-[20%] left-[35%] bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600 cursor-pointer transition">
          {" "}
          Go Back{" "}
        </button>
      </Link>
    </div>
  );
};

export default Appointment;

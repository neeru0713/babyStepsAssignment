import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setAppointmentDetails,
  bookAppointment,
  pay
} from "../../redux/actions/appointmentAction";
import Selector from "../form/Selector";
import { Link, useNavigate } from "react-router-dom";
import { FaUserMd } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdAccessTime } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";





const Appointment = () => {
  const dispatch = useDispatch();
  const appointment = useSelector((state) => state.appointment.appointment);
  const mode = useSelector((state) => state.appointment.mode);
  const selectedSlot = useSelector((state) => state.appointment.selectedSlot);
  const selectedDate = useSelector((state) => state.appointment.selectedDate);

  const selectedDoctorDetails = useSelector(
    (state) => state.doctor.selectedDoctorDetails
  );

  const navigate = useNavigate();
  const appointmentTypes = [
    { label: "Routine Check-Up", value: "Routine Check-Up" },
    { label: "General Consultation", value: "General Consultation" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setAppointmentDetails({ ...appointment, [name]: value }));
  };

  const onSelectorChange = (name, value, type) => {
    dispatch(setAppointmentDetails({ ...appointment, [name]: value }));
  };

  const bookAppointmentHandler = () => {
    dispatch(pay());
  };

function formattedDate(selectedDate) {
  return new Date(selectedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

 

  return (
    <div className="flex gap-[100px] mt-10">
      <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-lg ">
        <h2 className="text-xl font-bold text-gray-700 mb-8">
          Patient Details
        </h2>

        <div className="gap-3 flex flex-col w-full items-center text-left">
          <div className="w-full ">
            <label className="block text-gray-600 font-medium mb-1 ml-2 p-1">
              Appointment Type
            </label>

            <Selector
              options={appointmentTypes}
              name="appointmentType"
              value={appointment.appointmentType}
              updateValue={onSelectorChange}
              className="w-full focus:ring focus:ring-blue-300"
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
              className="w-full border py-[4px] px-2 rounded-md focus:ring focus:ring-blue-300 border-gray-600"
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
              className="w-full border p-1 rounded-md focus:ring focus:ring-blue-300"
              rows="3"
              placeholder="Enter any additional information..."
            ></textarea>
          </div>

          {/* <div class="btn-group flex gap-4 items-center">
            <Link to="/">
              <button className="w-30 bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600 cursor-pointer transition">
                Go Back
              </button>
            </Link>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white p-2 rounded-md hover:bg-orange-700 transition cursor-pointer"
              onClick={bookAppointmentHandler}
            >
              {mode === "create" ? "Create" : "Edit"} Appointment
            </button>
          </div> */}
        </div>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-lg flex flex-col gap-2">
        <h2 className="text-xl font-bold text-gray-700 mb-8">
          Book an Appointment
        </h2>
        <div className="flex flex-col gap-[120px]">
          <div className="flex flex-col gap-4">
            <h3 className="flex items-center gap-2 text-lg font-bold">
              <FaUserMd className="text-blue-500" />
              <p className="font-bold text-gray-500  text-gray-700 ">
                {selectedDoctorDetails.name}
              </p>
            </h3>
            <h3 className="flex items-center gap-2 text-lg font-bold">
              <SlCalender className="text-gray-800" />
              <p className="font-semibold text-gray-500  text-gray-700">
                {formattedDate(selectedDate)}
              </p>
            </h3>
            <h3 className="flex items-center gap-2 text-lg">
              <MdAccessTime className="text-gray-500" />
              <p className="font-semibold text-gray-500  text-gray-700">
                {selectedSlot}
              </p>
            </h3>
            <h3 className="flex items-center gap-2 text-lg font-bold">
              <RiMoneyRupeeCircleFill className="text-green-500" />
              <p className="font-semibold text-gray-500  text-gray-700">
                {`${selectedDoctorDetails.consultationFee}`}
              </p>
            </h3>
          </div>
          <div className="flex">
            <button
              type="submit"
              className="w-full bg-orange-600 text-white p-2 rounded-md hover:bg-orange-700 transition cursor-pointer"
              onClick={bookAppointmentHandler}
            >
              Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;

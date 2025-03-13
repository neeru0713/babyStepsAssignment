import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaQuestion, FaUserMd } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdAccessTime } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { BiCheckCircle } from "react-icons/bi";

const BookingConfirmed = () => {
  const dispatch = useDispatch();
  const selectedDoctorDetails = useSelector(
    (state) => state.doctor.selectedDoctorDetails
  );
  const appointment = useSelector((state) => state.appointment.appointment);
  const selectedDate = useSelector((state) => state.appointment.selectedDate);
  const selectedSlot = useSelector((state) => state.appointment.selectedSlot);

  function formattedDate(selectedDate) {
    return new Date(selectedDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <div>
      <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-lg flex flex-col gap-4 m-auto mt-[5%] ">
        <div className="flex items-center gap-2">
          <BiCheckCircle className="text-green-600 text-3xl" />
         <h2 className="text-2xl font-bold text-gray-900">
            Appointment Confirmed
          </h2>
        </div>
        <div className="flex flex-col gap-[120px]">
          <div className="flex flex-col gap-4">
            <h3 className="flex items-center gap-4 text-lg font-bold">
              <FaUserMd className="text-blue-500" />
              <p className="font-bold text-gray-500  text-gray-700 ">
                Appointment with {selectedDoctorDetails.name}
              </p>
            </h3>
            <h3 className="flex items-center gap-4 text-lg font-bold">
              <BiCheckCircle className="text-red-500" />
              <p className="font-bold text-gray-500  text-gray-700 ">
                {appointment.patientName}
              </p>
            </h3>
            <h3 className="flex items-center gap-4 text-lg font-bold">
              <SlCalender className="text-gray-800" />
              <p className="font-semibold text-gray-500  text-gray-700">
                {formattedDate(selectedDate)} / {selectedSlot}
              </p>
            </h3>
            <h3 className="flex items-center gap-4 text-lg font-bold">
              <FaQuestion className="text-green-500" />
              <p className="font-semibold text-gray-500  text-gray-700">
                {appointment.appointmentType}
              </p>
            </h3>
            <h3 className="flex items-center gap-4 text-lg font-bold">
              <RiMoneyRupeeCircleFill className="text-green-500" />
              <p className="font-semibold text-gray-500  text-gray-700">
                {`${selectedDoctorDetails.consultationFee}`}
              </p>
            </h3>
          </div>
          {/* <div className="flex">
                      <button
                        type="submit"
                        className="w-full bg-orange-600 text-white p-2 rounded-md hover:bg-orange-700 transition cursor-pointer"
                        onClick={bookAppointmentHandler}
                      >
                        Appointment
                      </button>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmed;

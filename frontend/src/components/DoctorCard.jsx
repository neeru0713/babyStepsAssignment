import React from "react";
import Selector from "./form/Selector.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  FaUserMd,
  FaStar,
  FaMoneyBillWave,
  FaClock,
  FaGraduationCap,
} from "react-icons/fa";
import DoctorInfoRow from "./DoctorInfoRow.jsx";
import { updateSelectedDoctor } from "../redux/actions/doctorAction.js";

const DoctorCard = ({ doctorOptions, doctors }) => {
  const dispatch = useDispatch();
  const selectedDoctor = useSelector((state) => state.doctor.selectedDoctor);
  const selectedDoctorDetails = useSelector(
    (state) => state.doctor.selectedDoctorDetails
  );

  const onDoctorChange = (name, value, type) => {
    const doctor = doctors.find((doc) => doc._id === value);
    dispatch(updateSelectedDoctor(value, doctor));
  };

  return (
    <div className="doctor-card bg-white p-6 rounded-xl border border-gray-200 w-[20%] h-full flex flex-col">
      <h2 className="text-lg font-semibold text-center mb-2">Select Doctor</h2>
      <div className="flex-grow">
        <Selector
          options={doctorOptions}
          name="doctor"
          value={selectedDoctor}
          updateValue={onDoctorChange}
        />
      </div>
      {selectedDoctorDetails?._id && (
        <div className=" border-gray-300 pt-4 mt-4 bg-gray-50 p-4 rounded-lg flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <FaUserMd className="text-blue-500" /> 
            <p className="truncate overflow-hidden text-ellipsis">  {selectedDoctorDetails.name}</p>
          </h3>

          <DoctorInfoRow
            data={selectedDoctorDetails.qualifications}
            heading="Qualifications"
            icon={<FaGraduationCap className="text-purple-500 text-xl" />}
          />
          <DoctorInfoRow
            data={selectedDoctorDetails.specialization}
            heading="Specialization"
            icon={<FaUserMd className="text-green-500" />}
          />
          <DoctorInfoRow
            data={`${selectedDoctorDetails.workingHours.start} - ${selectedDoctorDetails.workingHours.end}`}
            heading="Working Hours"
            icon={<FaClock className="text-yellow-500" />}
          />
          <DoctorInfoRow
            data={selectedDoctorDetails.rating}
            heading="Rating"
            icon={<FaStar className="text-orange-400" />}
          />
          <DoctorInfoRow
            data={`₹${selectedDoctorDetails.consultationFee}`}
            heading="Consultation Fee"
            icon={<FaMoneyBillWave className="text-green-600" />}
          />
        </div>
      )}
    </div>
  );
};

export default DoctorCard;

import React, { useState, useEffect } from "react";
import Selector from "./form/Selector.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  getDoctors,
  updateSelectedDoctor,
} from "../redux/actions/doctorAction.js";
import {
  FaSun,
  FaCloudSun,
  FaMoon,
  FaUserMd,
  FaStar,
  FaMoneyBillWave,
  FaClock,
  FaGraduationCap,
} from "react-icons/fa";
import DoctorInfoRow from "./DoctorInfoRow.jsx";

const BookAppointment = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctor.doctors);
  const selectedDoctor = useSelector((state) => state.doctor.selectedDoctor);
  const [doctorOptions, setDoctorOptions] = useState([]);
  const [selectedDoctorDetails, setSelectedDoctorDetails] = useState({});

  useEffect(() => {
    dispatch(getDoctors());
  }, []);

  useEffect(() => {
    let labelValOptions = [{}];
    labelValOptions = [
      ...labelValOptions,
      ...doctors.map((item, index) => {
        return {
          label: item.name,
          value: item._id,
        };
      }),
    ];
    setDoctorOptions(labelValOptions);
  }, [doctors]);

  const onDoctorChange = (name, value, type) => {
    const doctor = doctors.find((doc) => doc._id === value);
    setSelectedDoctorDetails(doctor);

    dispatch(updateSelectedDoctor(value));
  };

  const getGreeting = () => {
    const hours = new Date().getHours();

    if (hours < 12) {
      return {
        text: "Good Morning!",
        icon: <FaSun className="text-yellow-500" />,
      };
    } else if (hours < 18) {
      return {
        text: "Good Afternoon!",
        icon: <FaCloudSun className="text-orange-500" />,
      };
    } else {
      return {
        text: "Good Evening!",
        icon: <FaMoon className="text-blue-500" />,
      };
    }
  };

  return (
    <>
      <h1 className="flex text-2xl items-center gap-3 font-semibold">
        <span>{getGreeting().text} </span>
        <span className="text-3xl">{getGreeting().icon} </span>
      </h1>

      <div className="flex mt-10 gap-5 items-stretch min-h-screen">

        <div className="doctor-card bg-white p-6 rounded-xl border border-gray-200 w-[20%] h-full flex flex-col">
          <h2 className="text-xl font-semibold text-center mb-4">
            Select Doctor
          </h2>
          <div className="flex-grow">
            <Selector
              options={doctorOptions}
              name="doctor"
              value={selectedDoctor}
              updateValue={onDoctorChange}
            />
          </div>
          {selectedDoctorDetails._id && (
            <div className=" border-gray-300 pt-4 mt-4 bg-gray-50 p-4 rounded-lg flex flex-col gap-6">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <FaUserMd className="text-blue-500" />{" "}
                {selectedDoctorDetails.name}
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

        <div className="slots-card bg-white p-6 rounded-xl border border-gray-200 w-[80%] h-full flex flex-col">
          <h2 className="text-xl font-semibold text-center mb-4">
            Available Slots
          </h2>
          <div className="flex-grow">slot</div>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;

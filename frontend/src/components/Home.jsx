import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getDoctors,
} from "../redux/actions/doctorAction.js";
import {
  FaSun,
  FaCloudSun,
  FaMoon,
} from "react-icons/fa";

import Slots from "./Slots.jsx";
import DoctorCard from "./DoctorCard.jsx";

const Home = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctor.doctors);
  const [doctorOptions, setDoctorOptions] = useState([]);

  useEffect(() => {
    dispatch(getDoctors());
  }, []);

  useEffect(() => {
    let labelValOptions = [{label: "Select Doctor", value: ""}];
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
        <span className="text-2xl">{getGreeting().icon} </span>
      </h1>

      <div className="flex mt-10 gap-5 items-stretch min-h-screen">
        <DoctorCard doctorOptions={doctorOptions} doctors={doctors}/>
        <Slots />
      </div>
    </>
  );
};

export default Home;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearAppointmentState } from "../../redux/actions/appointmentAction";
import { clearDoctorState } from "../../redux/actions/doctorAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNewAppointment = () => {
    dispatch(clearAppointmentState()); 
    dispatch(clearDoctorState()); 
    navigate("/"); 
  };

  return (
    <nav className="bg-blue-600 text-white py-2 px-6 shadow-md rounded-lg mb-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-xl font-bold">The DoctorApp</h1>
        </Link>
        <div className="flex gap-6">
          <button onClick={handleNewAppointment} className="hover:underline">
            New Appointment
          </button>
          <Link to="/my-appointments" className="hover:underline">
            My Appointments
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

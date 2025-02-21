import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-3 px-6 shadow-md rounded-lg mb-8">
      <div className="container mx-auto flex justify-between items-center">
      <Link to="/">
        <h1 className="text-xl font-bold">The DoctorApp</h1>
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="hover:underline">
            New Appointment
          </Link>
          <Link to="/my-appointments" className="hover:underline">
            My Appointments
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

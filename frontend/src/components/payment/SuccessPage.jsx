import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookAppointment } from "../../redux/actions/appointmentAction";
import MyAppointments from "../appointment/MyAppointments";

const SuccessPage = () => {
  const dispatch = useDispatch();
  const appointment = useSelector((state) => state.appointment.appointment);

  useEffect(() => {
    console.log("appointment:", appointment);
    // dispatch(bookAppointment());
  }, [appointment]);

  return (
    <MyAppointments/>
  )
};

export default SuccessPage;

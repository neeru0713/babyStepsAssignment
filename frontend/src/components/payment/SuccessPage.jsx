import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookAppointment } from "../../redux/actions/appointmentAction";
import BookingConfirmed from "../appointment/BookingConfirmed";

const SuccessPage = () => {
  const dispatch = useDispatch();
  const appointment = useSelector((state) => state.appointment.appointment);

  useEffect(() => {
    console.log("appointment:", appointment);
    // dispatch(bookAppointment());
  }, [appointment]);

  return (
    <BookingConfirmed/>
  )
};

export default SuccessPage;

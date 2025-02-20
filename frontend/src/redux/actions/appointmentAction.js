import axios from "axios";
import {
  UPDATE_SELECTED_DATE,
  FETCH_SLOTS_SUCCESS,
  FETCH_SLOTS_ERROR,
  SELECT_SLOT_TIME,
  SET_APPOINTMENT_DETAILS
} from "../types";
import { API_URL } from "../../config/config";
import moment from "moment";
export const updateSelectedDate = (date) => async (dispatch, getState) => {
  try {
    const doctorId = getState().doctor.selectedDoctor;
    const formattedDate = moment(date).format("YYYY-MM-DD");
    const response = await axios.get(
      `${API_URL}/api/doctors/${doctorId}/slots?date=${formattedDate}`
    );
    dispatch({ type: UPDATE_SELECTED_DATE, payload: date });
    dispatch({ type: FETCH_SLOTS_SUCCESS, payload: response.data.slots });
  } catch (error) {
    console.error("Error fetching slots:", error);
    dispatch({ type: FETCH_SLOTS_ERROR, payload: error.message });
  }
};

export const selectSlotTime = (slotTime) => (dispatch) => {
  dispatch({ type: SELECT_SLOT_TIME, payload: slotTime });
};

export const setAppointmentDetails = (appointmentData) => (dispatch) => {
  dispatch({ type: SET_APPOINTMENT_DETAILS, payload: appointmentData });
};

export const bookAppointment = () => async (dispatch, getState) => {
  try {
    debugger;
    const state = getState();
    const doctorId = state.doctor.selectedDoctor;
    const selectedDate = state.appointment.selectedDate;
    const selectedSlot = state.appointment.selectedSlot;
    const { appointmentType, patientName, notes } =
      state.appointment.appointment;
    const formattedDate = selectedDate.toLocaleDateString("en-CA");
    const appointmentDateTime = `${formattedDate}T${selectedSlot}:00`;

    const payload = {
      doctorId,
      date: appointmentDateTime,
      duration: 30,
      appointmentType,
      patientName,
      notes,
    };

    const response = await axios.post(
      `${API_URL}/api/appointments`,
      payload
    );
    console.log("Appointment booked successfully:", response.data);
  } catch (error) {
    console.error("Error booking appointment:", error);
  }
};

import {
  UPDATE_SELECTED_DATE,
  FETCH_SLOTS_SUCCESS,
  FETCH_SLOTS_ERROR,
  SELECT_SLOT_TIME,
  SET_APPOINTMENT_DETAILS,
  APPOINTMENTS_SUCCESS,
  APPOINTMENTS_FAIL,
  CANCEL_APPOINTMENT,
} from "../types";
const initialState = {
  selectedDate: null,
  slots: [],
  selectedSlot: null,
  appointment: {
    appointmentType: "Routine Check-Up",
    patientName: "",
    notes: "",
  },
  appointments: [],
};

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload,
      };
    case FETCH_SLOTS_SUCCESS:
      return { ...state, slots: action.payload };
    case FETCH_SLOTS_ERROR:
      return { ...state, slots: [] };
    case SELECT_SLOT_TIME:
      return { ...state, selectedSlot: action.payload };
    case SET_APPOINTMENT_DETAILS:
      return {
        ...state,
        appointment: action.payload,
      };
    case APPOINTMENTS_SUCCESS:
      return { ...state, appointments: action.payload };

    case APPOINTMENTS_FAIL:
      return { ...state, error: action.payload };

    case CANCEL_APPOINTMENT:
      return {
        ...state,
        appointments: state.appointments.filter(
          (appointment) => appointment._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default doctorReducer;

import { GET_DOCTORS, UPDATE_SELECTED_DOCTOR } from "../types";
const initialState = {
  doctors: [],
  selectedDoctor: "",
};

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOCTORS:
      return {
        ...state,
        doctors: [...action.payload],
      };
    case UPDATE_SELECTED_DOCTOR:
      return {
        ...state,
        selectedDoctor: action.payload,
      };
    default:
      return state;
  }
};

export default doctorReducer;

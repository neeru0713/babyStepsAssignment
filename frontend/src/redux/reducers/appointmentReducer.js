import {
  UPDATE_SELECTED_DATE,
  FETCH_SLOTS_SUCCESS,
  FETCH_SLOTS_ERROR,
} from "../types";
const initialState = {
  selectedDate: null,
};

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload,
      };
    case FETCH_SLOTS_SUCCESS:
      return { ...state, slots: action.payload, error: null };
    case FETCH_SLOTS_ERROR:
      return { ...state, slots: [], error: action.payload };
    default:
      return state;
  }
};

export default doctorReducer;

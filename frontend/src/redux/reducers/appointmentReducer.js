import {
  UPDATE_SELECTED_DATE,
  FETCH_SLOTS_SUCCESS,
  FETCH_SLOTS_ERROR,
  SELECT_SLOT_TIME
} from "../types";
const initialState = {
  selectedDate: null,
  slots: [],
  selectedSlot: null,
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
    default:
      return state;
  }
};

export default doctorReducer;

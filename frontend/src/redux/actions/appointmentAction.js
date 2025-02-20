import axios from "axios";
import {
  UPDATE_SELECTED_DATE,
  FETCH_SLOTS_SUCCESS,
  FETCH_SLOTS_ERROR,
  SELECT_SLOT_TIME,
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

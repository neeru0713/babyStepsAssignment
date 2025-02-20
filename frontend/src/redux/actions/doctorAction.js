import axios from "axios";
import { GET_DOCTORS, UPDATE_SELECTED_DOCTOR } from "../types";

import  {API_URL}  from "../../config/config";

export const getDoctors = () => async (dispatch) => {
  try {
    const res = await axios.get(API_URL + "/api/doctors");
    dispatch({ type: GET_DOCTORS, payload: res.data.doctors });
  } catch (error) {
    console.log(error);
  }
};

export const updateSelectedDoctor = (id) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_SELECTED_DOCTOR, payload: id });
    } catch (error) {
      console.log(error);
    }
  };

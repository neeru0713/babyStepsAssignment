import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import doctorReducer from "./reducers/doctorReducer";
import appointmentReducer from "./reducers/appointmentReducer";
import spinnerReducer from "./reducers/spinnerReducer";
const rootReducer = combineReducers({
  doctor: doctorReducer,
  appointment: appointmentReducer,
  spinner: spinnerReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import doctorReducer from "./reducers/doctorReducer";
import appointmentReducer from "./reducers/appointmentReducer";
const rootReducer = combineReducers({
  doctor: doctorReducer,
  appointment: appointmentReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import doctorReducer from "./reducers/doctorReducer";
const rootReducer = combineReducers({
  doctor: doctorReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

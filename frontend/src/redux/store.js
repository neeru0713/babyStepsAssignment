import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import doctorReducer from "./reducers/doctorReducer";
import appointmentReducer from "./reducers/appointmentReducer";
import spinnerReducer from "./reducers/spinnerReducer";
import notificationReducer from "./reducers/notificationReducer";


const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) return undefined; // No saved state, return undefined to use default reducer initial state
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Could not load state from localStorage:", error);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (error) {
    console.error("Could not save state to localStorage:", error);
  }
};

const persistedState = loadState();


const rootReducer = combineReducers({
  doctor: doctorReducer,
  appointment: appointmentReducer,
  spinner: spinnerReducer,
  notification: notificationReducer
});

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;

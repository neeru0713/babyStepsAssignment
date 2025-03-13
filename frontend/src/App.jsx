import "./App.css";
import Home from "./components/Home"; 
import Appointment from "./components/appointment/Appointment";
import { Provider } from "react-redux";
import store from "./redux/store";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import MyAppointments from "./components/appointment/MyAppointments";
import Spinner from "./components/spinner/Spinner";
import Notification from "./components/notification/Notification";
import SuccessPage from "./components/payment/SuccessPage";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Notification />
        <Spinner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/appointment" element={<Appointment />}></Route>
          <Route path="/my-appointments" element={<MyAppointments />}></Route>
          <Route path="/success" element={<SuccessPage />}></Route>
          <Route path="/landing" element={<LandingPage />}></Route>
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;

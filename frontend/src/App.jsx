import "./App.css";
import Home from "./components/Home"; 
import Appointment from "./components/appointment/Appointment";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import MyAppointments from "./components/appointment/MyAppointments";
import Spinner from "./components/spinner/Spinner";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Spinner/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/appointment" element={<Appointment />}></Route>
          <Route path="/my-appointments" element={<MyAppointments />}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

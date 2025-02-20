import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Home from "./components/Home"; 
import Appointment from "./components/Appointment";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MyAppointments from "./components/MyAppointments";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
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

import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HeaderSection from "./components/header";
import FooterSection from "./components/footer";

import HomeScreen from "./pages/home-page";
import LoginScreen from "./pages/login-page";
import ProfileScreen from "./pages/profile-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="login" element={<LoginScreen></LoginScreen>}></Route>
        <Route path="details" element={<ProfileScreen></ProfileScreen>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

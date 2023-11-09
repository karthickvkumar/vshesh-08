import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import HeaderSection from "./components/header";
// import FooterSection from "./components/footer";

import HomeScreen from "./pages/home-page";
import LoginScreen from "./pages/login-page";
import ProfileScreen from "./pages/profile-page";
import LandingScreen from "./pages/landing-page";
import RegistationScreen from "./pages/register-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LandingScreen></LandingScreen>} ></Route>
        <Route path="home" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="login" element={<LoginScreen></LoginScreen>}></Route>
        <Route path="details" element={<ProfileScreen></ProfileScreen>}></Route>
        <Route path="signup" element={<RegistationScreen></RegistationScreen>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// Naming Convention 

// 1. Pascal Case - KarthickKumar (Component Name)
// 2. Camel Case - karthickKumar (Variable or Function Name)
// 3. Snake Case - karthick_kumar (Variable or Function Name)
// 4. Kebab Case - karthick-kumar (HTML Attribute and CSS Class)
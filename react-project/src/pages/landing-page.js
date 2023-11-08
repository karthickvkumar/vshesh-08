import React from "react";
import {NavLink} from "react-router-dom";

const LandingScreen = () => {
  return(
    <div>
      <h1>Landing Page</h1>
      <br/>
      <NavLink to="/home">Click here to go Home Page</NavLink>
      <br/>
      <NavLink to="/login">Go to Login Page</NavLink>
      <br/>
      <NavLink to="/details">Go to Proile Page</NavLink>
      <br/>
      <NavLink to="/signup">Go to Registation Page</NavLink>
    </div>
  )
}

export default LandingScreen;
import React from "react";

import {NavLink} from "react-router-dom";

const HomeScreen = () => {
  return(
    <div>
      <h1>Home Page</h1>
      <NavLink to="/">Go back to Landing Page</NavLink>
    </div>
  )
}

export default HomeScreen;
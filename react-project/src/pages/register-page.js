import React from "react";

import "../css/register.css";

const RegistationScreen = () => {
  return(
    <div>
      <h1>Registation Page</h1>
      <div className="space">
        <label className="align-label">Enter your Name :</label>
        <input type="text" placeholder="Enter your name" />
      </div>
      <div className="space">
        <label className="align-label">Enter your Email ID :</label>
        <input type="text" placeholder="Enter your email id" />
      </div>
      <div className="space">
        <label className="align-label">Enter your Passoword :</label>
        <input type="password" placeholder="Enter your password" />
      </div>
      <div className="space">
        <label className="align-label">Select your Date of Birth :</label>
        <input type="date" />
      </div>
      <div className="space">
        <label className="align-label">Select your Gender :</label>
        <input type="radio" name="gender" />Male
        <input type="radio" name="gender" />Female
        <input type="radio" name="gender" />Others
      </div>
      <div className="space">
        <label className="align-label">Select your Hobbies :</label>
        <input type="checkbox" />Cricket
        <input type="checkbox" />Football
        <input type="checkbox" />Hockey
        <input type="checkbox" />Tennis
        <input type="checkbox" />Chess
        <input type="checkbox" />Baseball
      </div>
      <div className="space">
        <label className="align-label">Select your Qualification :</label>
        <select>
          <option>Please choose any one value</option>
          <option>10th</option>
          <option>12th</option>
          <option>B.E</option>
          <option>M.B.A</option>
          <option>B.Sc</option>
          <option>B.Com</option>
        </select>
      </div>
      <div className="space">
        <label className="align-label">Enter your Address :</label>
        <textarea placeholder="Enter your address"></textarea>
      </div>
      <div className="space">
        <button className="register-btn">Create Account</button>
      </div>
    </div>
  )
}

// Shift + Alt + down arrow - Short for copy and pase code

export default RegistationScreen;
import React, {useState} from "react";

import "../css/register.css";

const RegistationScreen = () => {

  const [registerForm, updateRegister] = useState({
    name : "",
    email : "",
    password : "",
    date_of_birth : "",
    gender : "",
    hobbies : [],
    qualification : "",
    address : ""
  })

  const getValueFromInput = (event) => {
    // console.log(event.target.value)
    if(event.target.id === "hobbies"){
      registerForm.hobbies.push(event.target.value);
    }
    else{
      updateRegister({...registerForm, [event.target.id] : event.target.value });
    }
  }

  const createAccout = () => {
    console.log(registerForm);
  }

  return(
    <div>
      <h1>Registation Page</h1>
      <div className="space">
        <label className="align-label">Enter your Name :</label>
        <input type="text" id="name" placeholder="Enter your name" onChange={getValueFromInput} />
      </div>
      <div className="space">
        <label className="align-label">Enter your Email ID :</label>
        <input type="text" id="email" placeholder="Enter your email id" onChange={getValueFromInput}/>
      </div>
      <div className="space">
        <label className="align-label">Enter your Passoword :</label>
        <input type="password" id="password" placeholder="Enter your password" onChange={getValueFromInput}/>
      </div>
      <div className="space">
        <label className="align-label">Select your Date of Birth :</label>
        <input type="date" id="date_of_birth" onChange={getValueFromInput} />
      </div>
      <div className="space">
        <label className="align-label">Select your Gender :</label>
        <input type="radio" name="gender" onChange={getValueFromInput} id="gender" value="Male"/>Male
        <input type="radio" name="gender" onChange={getValueFromInput} id="gender" value="Female"/>Female
        <input type="radio" name="gender" onChange={getValueFromInput} id="gender" value="Others" />Others
      </div>
      <div className="space">
        <label className="align-label">Select your Hobbies :</label>
        <input type="checkbox" onChange={getValueFromInput} id="hobbies" value="Cricket"/>Cricket
        <input type="checkbox" onChange={getValueFromInput} id="hobbies" value="Football"/>Football
        <input type="checkbox" onChange={getValueFromInput} id="hobbies" value="Hockey"/>Hockey
        <input type="checkbox" onChange={getValueFromInput} id="hobbies" value="Hockey"/>Hockey
        <input type="checkbox" onChange={getValueFromInput} id="hobbies" value="Chess"/>Chess
        <input type="checkbox" onChange={getValueFromInput} id="hobbies" value="Baseball"/>Baseball
      </div>
      <div className="space">
        <label className="align-label">Select your Qualification :</label>
        <select onChange={getValueFromInput} id="qualification">
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
        <textarea placeholder="Enter your address" id="address" onChange={getValueFromInput}></textarea>
      </div>
      <div className="space">
        <button className="register-btn" onClick={() => createAccout()}>Create Account</button>
      </div>
    </div>
  )
}

// Shift + Alt + down arrow - Short for copy and pase code

export default RegistationScreen;
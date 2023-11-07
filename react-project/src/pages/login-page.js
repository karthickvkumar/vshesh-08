import React from "react";

const LoginScreen = () => {

  const getValueFromInput = (event) => {
    console.log(event.target.value, event.target.id);
  }

  return(
    <div>
      <h1>Login Page</h1>
      <div>
        <label>Enter your Email ID :</label>
        <input type="text" id="emailIdField" placeholder="Enter your email Id" onChange={getValueFromInput} />
      </div>
      <div>
        <label>Enter your Password :</label>
        <input type="password" id="passwordField" placeholder="Enter your password" onChange={getValueFromInput} />
      </div>
      <button>Login</button>
    </div>
  )
}

export default LoginScreen;
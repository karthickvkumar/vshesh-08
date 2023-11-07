import React, {useState} from "react";

const LoginScreen = () => {

  const [loginForm, updateLogin] = useState({
    emailIdField : "",
    passwordField : ""
  })

  const getValueFromInput = (event) => {
    // console.log(event.target.value, event.target.id);
    updateLogin({...loginForm, [event.target.id] : event.target.value });
  }

  const onLoginSubmit = () => {
    console.log(loginForm)
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
      <button onClick={() => onLoginSubmit()}>Login</button>
    </div>
  )
}

export default LoginScreen;
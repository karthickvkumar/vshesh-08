import React, {useState} from "react";
import axios from "axios";

const LoginScreen = () => {

  const [loginForm, updateLogin] = useState({
    email : "",
    password : ""
  })

  const getValueFromInput = (event) => {
    // console.log(event.target.value, event.target.id);
    updateLogin({...loginForm, [event.target.id] : event.target.value });
  }

  const onLoginSubmit = () => {
    // console.log(loginForm)
    const url = "https://reqres.in/api/login";

    axios.post(url, loginForm)
      .then((response) => {
        console.log(response);
        alert("Successfully Login");
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid UserName or Password");
      })
  }

  return(
    <div>
      <h1>Login Page</h1>
      <div>
        <label>Enter your Email ID :</label>
        <input type="text" id="email" placeholder="Enter your email Id" onChange={getValueFromInput} />
      </div>
      <div>
        <label>Enter your Password :</label>
        <input type="password" id="password" placeholder="Enter your password" onChange={getValueFromInput} />
      </div>
      <button onClick={() => onLoginSubmit()}>Login</button>
    </div>
  )
}

export default LoginScreen;
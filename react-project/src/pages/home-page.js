import React, {useState} from "react";

import {NavLink} from "react-router-dom";

const HomeScreen = () => {

  // const [varaibleName, functionName] = useState(initialValue)
  const [textMessage, updateText] = useState("");

  const getValueFromInput = (event) => {
    // console.log(event.target.value);
    updateText(event.target.value);
  }

  const printTextMessage = () => {
    alert(textMessage);
  }

  return(
    <div>
      <h1>Home Page</h1>
      <NavLink to="/">Go back to Landing Page</NavLink>
      <div>
        <label>Enter your Message : </label>
        <input type="text" placeholder="Enter your message" onChange={getValueFromInput} />
        <h2>{textMessage}</h2>
        <button onClick={() => printTextMessage()}>Click me</button>
      </div>
    </div>
  )
}

export default HomeScreen;
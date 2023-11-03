import React from "react";

import "../css/header.css";

const HeaderSection = () => {

  var textMessage = "Hello All!";

  const welcomeMessage = () => {
    let messsage = "Hello! Everyone";
    alert(messsage);
  }

  const dispalyMessage = () => {
    let messsage = "Hello! Everyone";
    alert(messsage);
  }

  return(
    <div>
      <h2>{textMessage}</h2>
      <h2 className="heading-text">This is a Header Section {textMessage}</h2>
      
      <button onClick={() => welcomeMessage()}>Click here!</button>
      <button onClick={() => dispalyMessage()} >Pint Message</button>
      
      <img src={require("../images/shinchan.png")} width="300" />
      <img src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Ultraviolette-Automotive-F77-071220221608.jpg&w=872&h=578&q=75&c=1" width="300" />
    </div>
  )
}

export default HeaderSection


// ES5 Syntax 

// import React from "react";
// function ComponentName(){
  //   return(
    
//   )
// }
    
// ES6 or ES2015 Syntax
    
// import React from "react";
// const ComponentName = () => {
//   return(

//   )
// }

// ComponentName - Should be a meaning Text, allows only a-z, A-Z

// Naming Convention
// 1. Pascal Case - KarthickKumar (1 letter of each word should be in capital)(Create Component Name)

// 2. Camel Case - karthickKumar (1 letter of 1 word should be in lower case and remaining word 1st letter be in captial)(Creating variable and function name)

// 3. Kebab Case - karthick-kumar (All will be in lowser, inbetween word use - ) (HTML attribe)
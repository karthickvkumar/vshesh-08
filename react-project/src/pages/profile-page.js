import React from "react";
import axios from "axios";

const ProfileScreen = () => {

  const listAllUsers = () => {
    const url = "https://reqres.in/api/users?page=2";

    axios.get(url)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return(
    <div>
      <h1>Profile Page</h1>
      <button onClick={() => listAllUsers()}>List Users</button>
    </div>
  )
}

export default ProfileScreen;
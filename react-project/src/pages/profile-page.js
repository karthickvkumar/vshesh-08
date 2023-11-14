import React, {useState} from "react";
import axios from "axios";

import "../css/profile.css";

const ProfileScreen = () => {

  const [users, updateUsers] = useState([]);

  const listAllUsers = () => {
    const url = "https://reqres.in/api/users?page=2";

    axios.get(url)
      .then((response) => {
        updateUsers(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return(
    <div>
      <h1>Profile Page</h1>
      <button onClick={() => listAllUsers()}>List Users</button>
      <table id="customers">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((value, index) => {
              return(
                <tr key={index}>
                  <td>{value.first_name}</td>
                  <td>{value.last_name}</td>
                  <td>{value.email}</td>
                  <td>
                    <img src={value.avatar} alt="" />
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ProfileScreen;
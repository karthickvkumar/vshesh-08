import React, {useState} from "react";
import axios from "axios";

const UserPage = () => {

  const [users, updateUsers] = useState([]);
  const [userForm, updateUserForm] = useState({
    firstname : "",
    lastname : "",
    age : "",
    location : ""
  });

  const loadUserList = () => {
    const url = "http://localhost:5000/api/user-list";

    axios.get(url)
      .then((response) => {
        updateUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const getValuefromInput = (event) => {
    updateUserForm({...userForm, [event.target.id] : event.target.value})
  }

  const submitUser = () => {
    // console.log(userForm);
    const url = "http://localhost:5000/api/submit-user";

    axios.post(url, userForm)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return(
    <div>
      <h2>User List Page</h2>
      <div>
        <label>Enter your First Name :</label>
        <input id="firstname" type="text" placeholder="Enter first name" onChange={getValuefromInput} />
      </div>
      <div>
        <label>Enter your Last Name :</label>
        <input id="lastname" type="text" placeholder="Enter last name" onChange={getValuefromInput}/>
      </div>
      <div>
        <label>Enter your Age :</label>
        <input id="age" type="number" placeholder="Enter age" onChange={getValuefromInput}/>
      </div>
      <div>
        <label>Enter your Location :</label>
        <input id="location" type="text" placeholder="Enter Location" onChange={getValuefromInput}/>
      </div>
      <div>
        <button onClick={() => submitUser()}>Submit User</button>
      </div>

      <button onClick={() => loadUserList()}>Load User</button>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((value, index) => {
              return(
                <tr key={index}>
                  <td>{value.firstname}</td>
                  <td>{value.lastname}</td>
                  <td>{value.age}</td>
                  <td>{value.location}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default UserPage;
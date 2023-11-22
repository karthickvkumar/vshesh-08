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
        alert(response.data);
        loadUserList();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const deleteUser = (Id) => {
    const url = "http://localhost:5000/api/delete/" + Id;
    
    axios.delete(url)
    .then((response) => {
      alert(response.data);
      loadUserList();
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const editUser = (user) => {
    updateUserForm({...userForm, ...user});
  }

  const modifyUser = () => {
    // console.log(userForm);
    const url = "http://localhost:5000/api/edit/user";

    axios.put(url, userForm)
    .then((response) => {
      alert(response.data);
      loadUserList();
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
        <input id="firstname" type="text" placeholder="Enter first name" onChange={getValuefromInput} value={userForm.firstname} />
      </div>
      <div>
        <label>Enter your Last Name :</label>
        <input id="lastname" type="text" placeholder="Enter last name" onChange={getValuefromInput} value={userForm.lastname}/>
      </div>
      <div>
        <label>Enter your Age :</label>
        <input id="age" type="number" placeholder="Enter age" onChange={getValuefromInput} value={userForm.age}/>
      </div>
      <div>
        <label>Enter your Location :</label>
        <input id="location" type="text" placeholder="Enter Location" onChange={getValuefromInput} value={userForm.location}/>
      </div>
      <div>
        <button onClick={() => submitUser()}>Submit User</button>
        <button onClick={() => modifyUser()}>Update User</button>
      </div>

      <button onClick={() => loadUserList()}>Load User</button>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Location</th>
            <th>Delete</th>
            <th>Edit</th>
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
                  <td>
                    <button onClick={() => deleteUser(value.Id)}>delete</button>
                  </td>
                  <td>
                    <button onClick={() => editUser(value)}>edit</button>
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

export default UserPage;
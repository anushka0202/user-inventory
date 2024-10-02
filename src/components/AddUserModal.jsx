import React, { useState } from "react";
import Modal from "@mui/material/Modal";

const AddUserModal = (props) => {
  const [newUser, setNewUser] = useState({
    name: "",
    age: "",
    date: "",
    gender: "",
    food: "",
    hobbies: "",
  });

  const add = (e) => {
    e.preventDefault();
    if (
      newUser.name === "" ||
      newUser.age === "" ||
      newUser.date === "" ||
      newUser.gender === "" ||
      newUser.food === "" ||
      newUser.hobbies === ""
    ) {
      alert("All the fields are mandatory!");
      return;
    }
    props.addUserHandler(newUser);
    setNewUser({
      name: "",
      age: "",
      date: "",
      gender: "",
      food: "",
      hobbies: "",
    });

    props.handleClose();
  };

  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <div className="add-user-modal">
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          ADD USER
        </h2>
        <form className="form">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "5%",
            }}
          >
            <div className="field">
              <label>NAME</label>
              <br />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newUser.name}
                onChange={(e) =>
                  setNewUser({ ...newUser, name: e.target.value })
                }
              />
            </div>
            <div className="field">
              <label>AGE</label>
              <br />
              <input
                type="text"
                name="age"
                placeholder="Age"
                value={newUser.age}
                onChange={(e) =>
                  setNewUser({ ...newUser, age: e.target.value })
                }
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "5%",
            }}
          >
            <div className="field">
              <label>DOB</label>
              <br />
              <input
                type="date"
                name="date"
                value={newUser.date}
                onChange={(e) =>
                  setNewUser({ ...newUser, date: e.target.value })
                }
              />
            </div>
            <div className="field">
              <label>GENDER</label>
              <br />
              <input
                type="radio"
                id="Male"
                name="gender"
                value="Male" // Set the value attribute to the desired value
                checked={newUser.gender === "Male"} // Check if newUser.gender is "Male"
                onChange={(e) =>
                  setNewUser({ ...newUser, gender: e.target.value })
                }
              />
              <label htmlFor="Male"> Male</label>
              <input
                type="radio"
                id="Female"
                name="gender"
                value="Female" // Set the value attribute to the desired value
                checked={newUser.gender === "Female"} // Check if newUser.gender is "Female"
                onChange={(e) =>
                  setNewUser({ ...newUser, gender: e.target.value })
                }
              />
              <label htmlFor="Female"> Female</label>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "5%",
            }}
          >
            <div className="field">
              <label htmlFor="food">FAVOURITE FOOD</label>
              <br />
              <select
                id="food"
                name="food" // Set the name attribute to match the property in newUser
                value={newUser.food} // Set the selected value to newUser.food
                onChange={(e) =>
                  setNewUser({ ...newUser, food: e.target.value })
                }
              >
                <option value="" disabled selected>
                  Select Food
                </option>
                <option value="Pizza">Pizza</option>
                <option value="Burger">Burger</option>
                <option value="Pasta">Pasta</option>
              </select>
            </div>

            <div className="field">
              <label>HOBBIES</label>
              <br />
              <textarea
                name="hobbies"
                maxLength={100}
                value={newUser.hobbies}
                onChange={(e) =>
                  setNewUser({ ...newUser, hobbies: e.target.value })
                }
              />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <button className="delete-button" onClick={props.handleClose}>
              CANCEL
            </button>
            <button className="edit-button" onClick={add}>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddUserModal;

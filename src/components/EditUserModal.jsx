import React, { useState } from "react";
import Modal from "@mui/material/Modal";

const EditUserModal = (props) => {
  const [updatedUser, setUpdatedUser] = useState({ ...props.user });

  const update = (e) => {
    e.preventDefault();
    if (
      updatedUser.name === "" ||
      updatedUser.age === "" ||
      updatedUser.date === "" ||
      updatedUser.gender === "" ||
      updatedUser.food === "" ||
      updatedUser.hobbies === ""
    ) {
      alert("All the fields are mandatory!");
      return;
    }
    props.updateUserHandler(updatedUser);
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
          EDIT USER
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
                value={updatedUser.name}
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, name: e.target.value })
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
                value={updatedUser.age}
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, age: e.target.value })
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
                value={updatedUser.date}
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, date: e.target.value })
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
                checked={updatedUser.gender === "Male"} // Check if updatedUser.gender is "Male"
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, gender: e.target.value })
                }
              />
              <label htmlFor="Male"> Male</label>
              <input
                type="radio"
                id="Female"
                name="gender"
                value="Female" // Set the value attribute to the desired value
                checked={updatedUser.gender === "Female"} // Check if updatedUser.gender is "Female"
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, gender: e.target.value })
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
                name="food" // Set the name attribute to match the property in updatedUser
                value={updatedUser.food} // Set the selected value to updatedUser.food
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, food: e.target.value })
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
                value={updatedUser.hobbies}
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, hobbies: e.target.value })
                }
              />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <button className="delete-button" onClick={props.handleClose}>
              CANCEL
            </button>
            <button className="edit-button" onClick={update}>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditUserModal;

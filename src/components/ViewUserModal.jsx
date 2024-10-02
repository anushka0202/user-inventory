import React, { useState } from "react";
import Modal from "@mui/material/Modal";

const ViewUserModal = (props) => {
  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <div className="add-user-modal">
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          VIEW USER
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
              <input type="text" name="name" value={props.user.name} readOnly />
            </div>
            <div className="field">
              <label>AGE</label>
              <br />
              <input type="text" name="age" value={props.user.age} readOnly />
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
              <input type="date" name="date" value={props.user.date} readOnly />
            </div>
            <div className="field">
              <label>GENDER</label>
              <br />
              <input
                type="radio"
                id="Male"
                name="gender"
                value="Male" // Set the value attribute to the desired value
                checked={props.user.gender === "Male"} // Check if props.user.gender is "Male"
                readOnly
              />
              <label htmlFor="Male"> Male</label>
              <input
                type="radio"
                id="Female"
                name="gender"
                value="Female" // Set the value attribute to the desired value
                checked={props.user.gender === "Female"} // Check if props.user.gender is "Female"
                readOnly
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
                value={props.user.food} // Set the selected value to props.user.food
                readOnly
              >
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
                value={props.user.hobbies}
                readOnly
              />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <button className="edit-button" onClick={props.handleClose}>
              CLOSE
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ViewUserModal;

import React, { useState } from "react";
import ViewUserModal from "./ViewUserModal";
import EditUserModal from "./EditUserModal";

const User = (props) => {
  const [openView, setOpenView] = useState(false);
  const handleOpenView = () => setOpenView(true);
  const handleCloseView = () => setOpenView(false);

  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  // To determine the circle color based on age
  let circleColor = "";
  if (props.user.age <= 25) {
    circleColor = "green";
  } else if (props.user.age <= 50) {
    circleColor = "purple";
  } else {
    circleColor = "orange";
  }

  return (
    <div className="user">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "2%",
        }}
      >
        <div className="username">{props.user.name}</div>

        <div
          className="circle"
          style={{
            backgroundColor: circleColor,
            height: "24px",
            width: "24px",
            borderRadius: "12px",
          }}
        ></div>
      </div>

      <div style={{ overflow: "hidden" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2"
          viewBox="0 0 461 2"
          fill="none"
        >
          <path d="M0 1L460.107 1" stroke="black" />
        </svg>
      </div>

      <div className="user-details">
        <div style={{ margin: "4%" }}>
          AGE: &nbsp;&nbsp;<strong>{props.user.age}</strong>
        </div>
        <div style={{ margin: "4%" }}>
          DOB: &nbsp;&nbsp;<strong>{props.user.date}</strong>
        </div>
        <div style={{ margin: "4%" }}>
          GENDER: &nbsp;&nbsp;<strong>{props.user.gender}</strong>
        </div>
        <div style={{ margin: "4%" }}>
          FOOD: &nbsp;&nbsp;<strong>{props.user.food}</strong>
        </div>
        <div style={{ margin: "4%" }}>
          HOBBIES: &nbsp;&nbsp;<strong>{props.user.hobbies}</strong>
        </div>
      </div>

      <div style={{ overflow: "hidden" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2"
          viewBox="0 0 461 2"
          fill="none"
        >
          <path d="M0 1L460.107 1" stroke="black" />
        </svg>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "2%",
        }}
      >
        <button
          className="delete-button"
          onClick={() => props.clickHander(props.user.id)}
        >
          DELETE
        </button>
        <button className="edit-button" onClick={handleOpenView}>
          VIEW
        </button>
        <button className="edit-button" onClick={handleOpenEdit}>
          EDIT
        </button>
        <ViewUserModal
          open={openView}
          handleClose={handleCloseView}
          user={props.user}
        />
        <EditUserModal
          open={openEdit}
          handleClose={handleCloseEdit}
          updateUserHandler={props.updateUserHandler}
          user={props.user}
        />
      </div>
    </div>
  );
};

export default User;

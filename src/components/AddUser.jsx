import React from "react";
import AddUserModal from "./AddUserModal";

const AddUser = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="add-user-conatiner">
      <div className="add-user-title">list of users</div>
      <button className="add-user-button" onClick={handleOpen}>
        ADD USER
      </button>
      <AddUserModal
        open={open}
        handleClose={handleClose}
        addUserHandler={props.addUserHandler}
      />
    </div>
  );
};

export default AddUser;

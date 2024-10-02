import React from "react";
import user from "../assets/user.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">USER'S INVENTORY</div>
      <img className="header-image" src={user} alt="user" />
    </div>
  );
};

export default Header;

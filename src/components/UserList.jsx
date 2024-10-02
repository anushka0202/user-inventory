import React, { useState } from "react";
import User from "./User";

const UserList = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

  const deleteUserHandler = (id) => {
    props.getUserId(id);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = props.users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(props.users.length / usersPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="users-constainer">
      <div className="userList">
        {currentUsers.map((user) => {
          return (
            <User
              key={user.id}
              user={user}
              clickHander={deleteUserHandler}
              updateUserHandler={props.updateUserHandler}
            />
          );
        })}
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          <span class="material-symbols-outlined">arrow_back</span>
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            className={currentPage === pageNumber ? "active" : ""}
          >
            {pageNumber}
          </button>
        ))}
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          <span class="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default UserList;

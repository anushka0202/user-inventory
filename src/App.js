import { useEffect, useState } from "react";
import Header from "./components/Header";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import { v4 } from "uuid";

function App() {
  const LOCAL_STORAGE_KEY = "users";
  const [users, setUsers] = useState(() => {
    const retrieveUsers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return retrieveUsers || [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
  }, [users]);

  const addUserHandler = (newUser) => {
    console.log(newUser);
    setUsers([...users, { id: v4(), ...newUser }]);
  };

  const removeUserHandler = (id) => {
    const newUsers = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(newUsers);
  };

  const updateUserHandler = (updatedUser) => {
    console.log(updatedUser);
    setUsers(
      users.map((user) => {
        return user.id === updatedUser.id ? { ...user, ...updatedUser } : user;
      })
    );
  };

  return (
    <div>
      <Header />
      <AddUser addUserHandler={addUserHandler} />
      <UserList
        users={users}
        getUserId={removeUserHandler}
        updateUserHandler={updateUserHandler}
      />
    </div>
  );
}

export default App;

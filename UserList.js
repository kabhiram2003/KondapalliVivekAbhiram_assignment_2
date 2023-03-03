import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import UserProfile from "./UserProfile";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const handleUserUpdate = (updatedUser) => {
    const updatedUsers = users.map((user) => {
      if (user.id === updatedUser.id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.slice(0, 10))); // Get the first 10 users
  }, []);
  const deleteUser = (userId) => {
    // your code to delete the user with the given userId
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <Container>
      <Row>
        {users.map((user) => (
          <Col xs="12" sm="6" lg="4" key={user.id}>
            <UserProfile user={user} deleteUser={deleteUser} key={user.id} handleUserUpdate={handleUserUpdate}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserList;

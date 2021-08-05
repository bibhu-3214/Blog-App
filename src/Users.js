import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        const result = resp.data;
        setUsers(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <Container>
      <h1 className="display-5">Total users - {users.length}</h1>
      <ListGroup variant="flush">
        {users.map((user, id) => {
          return (
            <ListGroupItem key={id}>
              <Link style={{ textDecoration: "None" }} to={`/users/${user.id}`}>
                {user.name}
              </Link>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </Container>
  );
};

export default Users;

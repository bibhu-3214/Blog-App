import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const UserDetails = (props) => {
  const { id } = props.match.params;
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((resp) => {
        const result = resp.data;
        setUsers(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((resp) => {
        const result = resp.data;
        setPosts(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  return (
    <>
      <h1 className="display-4">{users.name}</h1>
      <h4 className="text-muted">Posts written by {users.name} ...</h4>
      <ListGroup variant="flush">
        {posts.map((post, id) => {
          return (
            <ListGroupItem key={id}>
              <Link style={{ textDecoration: "none" }} to={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </>
  );
};

export default UserDetails;

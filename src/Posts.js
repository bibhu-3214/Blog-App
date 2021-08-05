import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => {
        const result = resp.data;
        setPosts(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <Container>
      <h1 className="display-4">Total Posts - {posts.length}</h1>
      <ListGroup variant="flush">
        {posts.map((post, id) => {
          return (
            <ListGroupItem key={id}>
              <Link style={{ textDecoration: "None" }} to={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </Container>
  );
};

export default Posts;

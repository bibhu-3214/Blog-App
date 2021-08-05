import React from "react";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <h1 className="display-4 text-center">Home</h1>
      <p className="display-6 text-center">
        Welcome to Home, you can see the users and their title, body, posts and
        comments and etc.
      </p>
    </Container>
  );
};

export default Home;

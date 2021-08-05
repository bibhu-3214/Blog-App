import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import Posts from "./Posts";
import UserDetails from "./UserDetails";
import PostsShow from "./PostsShow";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";

const App = () => {
  return (
    <Container>
      <Navbar bg="light" variant="light">
        <Nav className="text-center" activeKey="/home">
          <Nav.Link>
            <Link style={{ textDecoration: "None" }} to="/">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link eventKey="link-1">
            <Link style={{ textDecoration: "None" }} to="/users">
              Users
            </Link>
          </Nav.Link>
          <Nav.Link eventKey="link-2">
            <Link style={{ textDecoration: "None" }} to="/posts">
              Posts
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar>

      <Switch>
        <Route path="/users/:id" component={UserDetails} />
        <Route path="/users" component={Users} />
        <Route path="/posts/:id" component={PostsShow} />
        <Route path="/posts" component={Posts} />
        <Route path="/" component={Home} />
      </Switch>
    </Container>
  );
};

export default App;

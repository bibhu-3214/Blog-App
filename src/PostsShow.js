import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const PostsShow = (props) => {
  const { id } = props.match.params;
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (posts.userId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${posts.userId}`)
        .then((resp) => {
          const result = resp.data;
          setUsers(result);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }, [posts.userId]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((resp) => {
        const result = resp.data;
        setPosts(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  useEffect(() => {
    if (posts.id)
      axios
        .get(`https://jsonplaceholder.typicode.com/comments?postId=${posts.id}`)
        .then((resp) => {
          const result = resp.data;
          setComments(result);
        })
        .catch((err) => {
          alert(err.message);
        });
  }, [posts.id]);

  return (
    <>
      <h2 className="display-4">{users.name}</h2>
      <hr />
      <h4 style={{ fontFamily: "arial" }}>
        <strong>Title : </strong>
        {posts.title}
      </h4>
      <h5 style={{ fontFamily: "arial" }}>
        <strong>Body : </strong>
        {posts.body}
      </h5>
      <hr />
      <h2>Comments : </h2>
      <ListGroup variant="flush">
        {comments.map((comment, id) => {
          return <ListGroupItem key={id}>{comment.body}</ListGroupItem>;
        })}
      </ListGroup>
      <hr />
      <h4>
        <Link style={{ textDecoration: "none" }} to={`/users/${posts.userId}`}>
          More posts of author : {users.name}
        </Link>
      </h4>
    </>
  );
};

export default PostsShow;

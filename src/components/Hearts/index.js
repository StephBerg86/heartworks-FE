import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import { incrementHearts } from "../../store/details/actions";
// import { useDispatch } from "react-redux";

export default function index({ hearts, incr }) {
  // const dispatch = useDispatch();

  return (
    <Container>
      <span role="img" aria-labelledby="heart">
        💖
      </span>{" "}
      {hearts}
      <Button variant="danger" onClick={incr}>
        Give heart
      </Button>
    </Container>
  );
}

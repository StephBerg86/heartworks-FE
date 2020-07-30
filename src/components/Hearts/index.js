import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function index({ hearts, incr }) {
  return (
    <Container>
      <span role="img" aria-labelledby="heart" className="heartsComp">
        💖{hearts}
      </span>

      <Button variant="danger" onClick={incr}>
        Give heart
      </Button>
    </Container>
  );
}

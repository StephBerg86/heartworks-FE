import React from "react";
import Button from "react-bootstrap/Button";

export default function index({ nrLikes, incr }) {
  return (
    <div>
      <span role="img" aria-labelledby="heart">
        💖
      </span>{" "}
      {nrLikes}
      <Button variant="danger" onClick={incr}>
        Give heart
      </Button>
    </div>
  );
}

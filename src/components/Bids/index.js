import React from "react";
// import Button from "react-bootstrap/Button";

export default function Bids(props) {
  console.log("props", props);
  return (
    <div>
      {props.artwork.map((bid) => {
        return (
          <div>
            <h3>{bid.bids}</h3>
          </div>
        );
      })}
    </div>
  );
}

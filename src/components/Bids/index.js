import React from "react";
const emoji = (
  <span role="img" aria-labelledby="hamer">
    🔨
  </span>
);

export default function Bids({ bid }) {
  return (
    <div key={bid.id}>
      <h3>
        {emoji}
        Bids{emoji}
      </h3>{" "}
      {bid.amount}
      {bid.map((b) => {
        return (
          <p key={b.id}>
            Email: {b.email}
            Bid (€){b.amount}
          </p>
        );
      })}
    </div>
  );
}

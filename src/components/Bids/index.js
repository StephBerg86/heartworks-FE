import React from "react";

export default function Bids({ id, bids }) {
  return (
    <div key={id}>
      hier komt bids
      <span role="img" aria-labelledby="hamer">
        🔨
      </span>
      {bids.email}
    </div>
  );
}

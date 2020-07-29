import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Artwork({
  id,
  title,
  imageUrl,
  bids,
  hearts,
  showLink,
}) {
  const nrBids = bids.length;

  return (
    <div key={id}>
      <h1>{title}</h1>
      <img className="artImage" src={imageUrl} alt="art" />
      <span role="img" aria-labelledby="heart">
        💖
      </span>
      <span role="img" aria-labelledby="hamer">
        🔨
      </span>
      {nrBids}

      {showLink ? (
        <Link to={`/artworks/${id}`}>
          <Button>View details</Button>
        </Link>
      ) : null}
    </div>
  );
}

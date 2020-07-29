import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Artwork({
  id,
  title,
  imageUrl,
  minimumBid,
  bids,
  showLink,
}) {
  return (
    <div key={id}>
      <h1>{title}</h1>
      <img className="artImage" src={imageUrl} alt="art" />
      <p>minimumBid: {minimumBid}</p>
      <p>{bids}</p>
      {showLink ? (
        <Link to={`/artworks/${id}`}>
          <Button>View details</Button>
        </Link>
      ) : null}
    </div>
  );
}

import React from "react";
import AuctionForm from "../../components/AuctionForm";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Auction() {
  return (
    <div>
      <Jumbotron>
        <h1>Start an auction</h1>
      </Jumbotron>

      <AuctionForm />
    </div>
  );
}

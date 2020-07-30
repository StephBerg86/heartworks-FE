import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { postBidSuccess } from "../../store/user/actions";
import { selectBids } from "../../store/details/selectors";
import { selectMinimumBid } from "../../store/artwork/selectors";

const emoji = (
  <span role="img" aria-labelledby="hamer">
    🔨
  </span>
);

export default function Bids({ bid, minimumBid }) {
  const min = useSelector(selectMinimumBid);
  const token = useSelector(selectToken);
  const bids = useSelector(selectBids);
  const [allBids, setAllBids] = useState(min);
  const dispatch = useDispatch();
  //console.log("bids", bids);

  function submitBid(event) {
    event.preventDefault();
    dispatch(postBidSuccess(bids));
  }

  const allTheBids = bid.map((b) => {
    return parseInt(b.amount);
  });

  const sum = allTheBids.reduce(function (a, b) {
    return Math.max(a, b) + 1;
  }, 0);

  const sortBids = allTheBids;
  sortBids.sort(function (a, b) {
    return b - a;
  });

  return (
    <Container key={bid.id}>
      <h3>
        {emoji}
        Bids{emoji}
      </h3>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>email</th>
            <th>bids</th>
          </tr>
        </thead>
        <tbody>
          {bid.map((b) => {
            return (
              <tr key={b.id}>
                <td>{b.email}</td>
                <td>€{b.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {token ? (
        <>
          <form onSubmit={submitBid} style={{ marginLeft: 10 + "em" }}>
            <h2> Starting bid: €{sum ? sum : minimumBid} </h2>
            <label>
              <FormControl
                type="number"
                pattern="[0–9]*"
                inputMode="numeric"
                value={allBids}
                onChange={(event) => setAllBids(event.target.value)}
              />
            </label>
            <Button
              variant="danger"
              type="submit"
              value="Submit"
              onClick={submitBid}
              style={{ marginLeft: 10 + "px" }}
            >
              Place Bid
            </Button>
          </form>
        </>
      ) : null}
    </Container>
  );
}

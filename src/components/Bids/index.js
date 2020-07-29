import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/FormControl";
import { selectToken } from "../../store/user/selectors";
import { useSelector } from "react-redux";

const emoji = (
  <span role="img" aria-labelledby="hamer">
    🔨
  </span>
);

export default function Bids({ bid }) {
  const token = useSelector(selectToken);
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
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>amount in €</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Amount (to the nearest dollar)"
              type="number"
            />
            <InputGroup.Append>
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          <button>bid</button>
        </>
      ) : null}
    </Container>
  );
}

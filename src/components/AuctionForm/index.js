import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useDispatch } from "react-redux";
import { postArt } from "../../store/user/actions";
import { selectId } from "../../store/user/selectors";
import { useSelector } from "react-redux";

export default function AuctionForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [minimumBid, setMinimumBid] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://source.unsplash.com/1600x900/?"
  );
  const userId = useSelector(selectId);

  function submitForm(event) {
    event.preventDefault();

    dispatch(postArt(title, minimumBid, imageUrl, userId));
    setTitle("");
    setMinimumBid("");
  }
  return (
    <Form as={Col} md={{ span: 6, offset: 3 }}>
      <h3 className="mt-5 mb-5">
        Post one of your artworks to start receiving offers
      </h3>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Name of your art"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>minimum price for your art</Form.Label>
        <Form.Control
          value={minimumBid}
          onChange={(event) => setMinimumBid(event.target.value)}
          type="number"
          placeholder="minimum bid"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Image url</Form.Label>
        <Form.Control
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          type="text"
          placeholder="image"
        />
        {imageUrl ? (
          <Col>
            <Image src={imageUrl} alt="preview" thumbnail />
          </Col>
        ) : null}
      </Form.Group>

      <Form.Group className="mt-5">
        <Button variant="danger" type="submit" onClick={submitForm}>
          Post!
        </Button>
      </Form.Group>
    </Form>
  );
}

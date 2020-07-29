import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Artwork from "../../components/Artwork";
import Bids from "../../components/Bids";
import { fetchArtworkById } from "../../store/bids/actions";
import { selectArtworkDetails } from "../../store/bids/selectors";

export default function DisplayArt() {
  const { id } = useParams();
  const artwork = useSelector(selectArtworkDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArtworkById(id));
  }, [dispatch, id]);

  console.log("artwork in index", artwork);

  return (
    <>
      hi test
      <Artwork
        id={artwork.id}
        title={artwork.title}
        imageUrl={artwork.imageUrl}
      />
      {/* <Bids bids={artwork} /> */}
    </>
  );
}

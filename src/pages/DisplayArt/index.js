import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Artwork from "../../components/Artwork";
import Bids from "../../components/Bids";
import { fetchArtworkById } from "../../store/details/actions";
import { selectArtworkDetails } from "../../store/details/selectors";

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
      <Artwork
        id={artwork.id}
        title={artwork.title}
        imageUrl={artwork.imageUrl}
      />
      {/* <Bids bids={artwork} /> */}
    </>
  );
}

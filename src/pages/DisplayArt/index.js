import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Artwork from "../../components/Artwork";
import { fetchArtworkById } from "../../store/details/actions";
import { selectArtworkDetails } from "../../store/details/selectors";
import Bids from "../../components/Bids";
import Hearts from "../../components/Hearts";
import { selectHearts } from "../../store/details/selectors";
import { fetchedHearts } from "../../store/details/actions";

export default function DisplayArt() {
  const { id } = useParams();
  const artwork = useSelector(selectArtworkDetails);
  const hearts = useSelector(selectHearts);
  console.log("hearts", hearts);
  const dispatch = useDispatch();
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes);

  const increment = () => {
    set_numLikes(numLikes + 1);
  };

  useEffect(() => {
    dispatch(fetchArtworkById(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchedHearts(id));
  }, [dispatch, id]);

  return (
    <>
      <Artwork
        id={artwork.id}
        title={artwork.title}
        imageUrl={artwork.imageUrl}
        hearts={artwork.hearts}
        bids={artwork.bids}
        minimumBid={artwork.minimumBid}
      />
      <Hearts hearts={hearts} nrLikes={numLikes} incr={increment} />
      <Bids bid={artwork.bids} />
    </>
  );
}

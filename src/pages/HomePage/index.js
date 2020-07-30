import React, { useEffect } from "react";
import Artwork from "../../components/Artwork";
import { useSelector, useDispatch } from "react-redux";
import { selectArtwork } from "../../store/artwork/selectors";
import { fetchArtwork } from "../../store/artwork/actions";

export default function HomePage() {
  const artwork = useSelector(selectArtwork);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArtwork());
  }, [dispatch]);

  return (
    <div className="displayArt">
      {artwork.map((art) => {
        return (
          <Artwork
            key={art.id}
            id={art.id}
            title={art.title}
            bids={art.bids}
            hearts={art.hearts}
            imageUrl={art.imageUrl}
            showLink={true}
          />
        );
      })}
    </div>
  );
}

import React, { useEffect } from "react";
import Artwork from "../../components/Artwork";
import { useSelector, useDispatch } from "react-redux";
import { selectArtwork } from "../../store/artwork/selectors";
import { fetchArtwork } from "../../store/artwork/actions";

export default function HomePage() {
  const homepage = useSelector(selectArtwork);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArtwork());
  }, [dispatch]);

  return (
    <div className="test">
      {homepage.map((hp) => {
        return (
          <Artwork
            key={hp.id}
            id={hp.id}
            title={hp.title}
            bids={hp.minimumBid}
            imageUrl={hp.imageUrl}
            showLink={true}
          />
        );
      })}
    </div>
  );
}

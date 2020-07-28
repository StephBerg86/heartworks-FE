import React, { useEffect } from "react";
import Artwork from "../../components/Artwork";
import { useSelector, useDispatch } from "react-redux";
import { selectHomepages } from "../../store/artwork/selectors";
import { fetchArtwork } from "../../store/artwork/actions";

export default function HomePage() {
  const homepages = useSelector(selectHomepages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArtwork());
  }, [dispatch]);

  return (
    <div>
      {homepages.map((hp) => {
        return (
          <div>
            <Artwork
              key={hp.id}
              id={hp.id}
              title={hp.title}
              imageUrl={hp.imageUrl}
              showLink={true}
            />{" "}
          </div>
        );
      })}
    </div>
  );
}

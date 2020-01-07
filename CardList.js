import React from "react";
import Card from "./Card";
import TrackVisibility from "react-on-screen";
import "tachyons";

const CardList = ({ photos }) => {
  return (
    <div className="">
      {photos.map((photo, i) => {
        return (
          <TrackVisibility key={i}>
            <Card
              key={i}
              thumbnailUrl={photo.thumbnailUrl}
              url={photo.url}
              id={photo.id}
              title={photo.title}
            />
          </TrackVisibility>
        );
      })}
    </div>
  );
};

export default CardList;

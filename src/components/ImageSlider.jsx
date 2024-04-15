import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ImageSlider({ photoDetails }) {
  console.log("check photos", photoDetails.photos);

  return (
    <Carousel>
      {photoDetails.photos.map((photo) => (
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-height"
            src={photo.url}
            alt="First slide"
            key={photo.id}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageSlider;

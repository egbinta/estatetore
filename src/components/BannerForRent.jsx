import React from "react";
import { Link } from "react-router-dom";

const BannerForRent = () => {
  return (
    <div
      style={{
        backgroundImage: "url(./image/rentHomeImage.jpg)",
        height: "400px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
      className="mb-3"
    >
      <div className="overlay"></div>
      <div className="bannerText">
        <p className="text-white fw-bolder fs-1 fs-sm-3 m-0">
          Explore Rent Home
        </p>
        <p className="text-light fw-normal fs-4 pb-1 m-0 display-1">
          Rent Home For Everyone
        </p>
        <div className="text-white fs-6 mb-4">
          Let's find a home that's perfect for you
        </div>
        <div className="btn btn-primary btn-lg d-none d-md-block rounded-pill px-5">
          Explore Homes For Renting
        </div>
        <Link
          to="/search?purpose=for-rent"
          className="btn btn-info btn-sm d-block d-md-none rounded-pill"
        >
          Explore Homes For Renting
        </Link>
      </div>
    </div>
  );
};

export default BannerForRent;

import React from "react";
import { Link } from "react-router-dom";

const BannerForSale = () => {
  return (
    <div>
      <div className="row g-0 overflow-hidden my-2">
        <div className="col-md-6">
          <img src="./image/buyhome.jpg" className="buyhomeImage" alt="" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start bg-white p-4">
          <h1 className="fw-bold fs-3">
            Need a home, Find & own your dream home
          </h1>
          <p className="display-6 fs-4 mb-4 ">
            Find and own your perfect home here in our beautiful estate, The
            nature here will inspire you.
          </p>
          <Link
            to="/search?purpose=for-sale"
            className="btn btn-info text-white fw-bolder rounded-pill px-5"
          >
            Explore Homes For Sale
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerForSale;

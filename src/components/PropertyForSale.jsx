import React from "react";
import { Link } from "react-router-dom";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FaTh } from "react-icons/fa";
import millify from "millify";

const PropertyForSale = ({ properties }) => {
  return (
    <div className="container cardContainer">
      <div className="row g-0">
        {properties.map((property) => (
          <div className="col-sm-12 col-md-6 col-lg-3" key={property.id}>
            <div
              className="card my-2 shadow-sm card-width"
              style={{ width: "19rem" }}
            >
              <Link to={`/homeDetails/${property.externalID}`}>
                <img
                  src={property.coverPhoto.url}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "200px" }}
                />
              </Link>
              <div className="card-body" style={{ marginTop: "-7px" }}>
                <div className="d-flex justify-content-between align-items-start">
                  <div className="d-flex">
                    <div className="text-success" style={{ marginTop: "-2px" }}>
                      {property.isVerified && <BsFillPatchCheckFill />}
                    </div>
                    <div className="ml-4 fw-bold text-muted">
                      ${millify(property.price)}
                    </div>
                  </div>
                  <div>
                    <img
                      src={property.agency.logo.url}
                      height="45"
                      width="45"
                      className="rounded-circle "
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-end mb-2">
                  <div className="text-info fs-6">
                    {property.rooms}{" "}
                    <span>
                      <FaBed />
                    </span>
                  </div>
                  <span className="text-info fw-bolder px-2">|</span>
                  <div className="text-info fs-6">
                    {property.baths}{" "}
                    <span>
                      <FaBath />
                    </span>
                  </div>
                  <span className="text-info fw-bolder px-2">|</span>
                  <div className="text-info fs-6">
                    {millify(property.area)} sqft{" "}
                    <span>
                      <FaTh />
                    </span>
                  </div>
                </div>
                <p className="card-text display-6 fs-6 fw-normal text-muted">
                  {property.title.length > 40
                    ? property.title.substring(0, 30) + "..."
                    : property.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyForSale;

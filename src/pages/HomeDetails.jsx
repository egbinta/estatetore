import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ImageSlider from "../components/ImageSlider";
import axios from "axios";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FaTh } from "react-icons/fa";
import millify from "millify";
import AgentForm from "../components/AgentForm";
import Loader from "../components/Loader";

const HomeDetails = () => {
  const [propertyDetails, setpropertyDetails] = useState();

  const externalValue = useParams();
  const externalId = externalValue.externalId;

  useEffect(() => {
    axios
      .get("https://bayut.p.rapidapi.com/properties/detail", {
        params: { externalID: externalId },
        headers: {
          "X-RapidAPI-Key":
            "499fbc6e61msh790dad8a6509f03p1cb807jsn9db05b7e546c",
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      })
      .then((response) => {
        setpropertyDetails(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [externalId]);
  console.log(propertyDetails);

  return (
    <div>
      <div className="container justify-content-start my-3">
        <span className="fw-bold fs-4">Property Details</span>
      </div>
      {!propertyDetails ? (
        <Loader />
      ) : (
        <>
          <div className="container my-4">
            <div className="row g-3">
              <div className="col-md-12 col-lg-9">
                <ImageSlider photoDetails={propertyDetails} />
                <div className="d-flex justify-content-between align-items-start pt-3">
                  <div className="d-flex">
                    <div className="text-success" style={{ marginTop: "-2px" }}>
                      {propertyDetails?.isVerified && <BsFillPatchCheckFill />}
                    </div>
                    <div
                      className=" fw-bold text-muted"
                      style={{ marginLeft: "5px" }}
                    >
                      ${millify(propertyDetails.price)}
                      {propertyDetails.rentFrequency &&
                        `/${propertyDetails.rentFrequency}`}
                    </div>
                  </div>
                  <div>
                    <img
                      src={propertyDetails.agency?.logo?.url}
                      height="50"
                      width="50"
                      className="rounded-circle "
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-end mb-2">
                  <div className="text-info fs-6">
                    {propertyDetails.rooms}{" "}
                    <span>
                      <FaBed />
                    </span>
                  </div>
                  <span className="text-info fw-bolder px-2">|</span>
                  <div className="text-info fs-6">
                    {propertyDetails.baths}{" "}
                    <span>
                      <FaBath />
                    </span>
                  </div>
                  <span className="text-info fw-bolder px-2">|</span>
                  <div className="text-info fs-6">
                    {millify(propertyDetails.area)} sqft{" "}
                    <span>
                      <FaTh />
                    </span>
                  </div>
                </div>
                <p className="card-text display-6 fs-6 fw-normal text-muted">
                  {propertyDetails.description}
                </p>
                <div className="bg-white p-1 p-md-5 border border-info mb-3">
                  <div className="d-flex justify-content-between align-self-center border-bottom boeder-muted">
                    <div className="fs-5 fw-bold ">Type:</div>
                    <div className="fs-5 fw-bold text-muted">
                      {propertyDetails.type}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-self-center border-bottom boeder-muted">
                    <div className="fs-5 fw-bold ">Purpose:</div>
                    <div className="fs-5 fw-bold text-muted">
                      {propertyDetails.purpose}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-self-center border-bottom boeder-muted">
                    <div className="fs-5 fw-bold ">Furnishing Status:</div>
                    <div className="fs-5 fw-bold text-muted">
                      {propertyDetails.furnishingStatus
                        ? propertyDetails.furnishingStatus
                        : "Not Furnish"}
                    </div>
                  </div>
                </div>
                <div className="">
                  {propertyDetails.amenities && (
                    <p className="fs-4 fw-bold">Amenities</p>
                  )}
                  <div className="d-flex flex-wrap">
                    {propertyDetails?.amenities?.map((item) =>
                      item?.amenities?.map((amenity) => (
                        <span
                          className="px-2 bg-white border border-info text-mutd rounded-pill m-1 fs-5 fw-normal"
                          key={amenity.id}
                        >
                          {amenity.text}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-3">
                <AgentForm />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeDetails;

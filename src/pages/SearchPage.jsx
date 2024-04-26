import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ImageCard from "../components/ImageCard";
import Loader from "../components/Loader";
import axios from "axios";

const SearchPage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();

  const purpose = query.get("purpose") || "for-rent";
  const rentFrequency = query.get("rentFrequency") || "yearly";
  // const minPrice = query.get("minPrice") || "0";
  // const maxPrice = query.get("maxPrice") || "1000000";
  // const roomsMin = query.get("roomsMin") || "0";
  // const bathsMin = query.get("bathsMin") || "0";
  const sort = query.get("sort") || "price-desc";
  // const areaMax = query.get("areaMax") || "35000";
  const locationExternalIDs = query.get("locationExternalIDs") || "5002";
  const categoryExternalID = query.get("categoryExternalID") || "4";

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://bayut.p.rapidapi.com/properties/list", {
        params: {
          locationExternalIDs: locationExternalIDs,
          purpose: purpose,
          hitsPerPage: "8",
          page: "0",
          lang: "en",
          sort: sort,
          rentFrequency: rentFrequency,
          categoryExternalID: categoryExternalID,
        },
        headers: {
          "X-RapidAPI-Key":
            "499fbc6e61msh790dad8a6509f03p1cb807jsn9db05b7e546c",
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      })
      .then((response) => {
        setProperties(response.data.hits);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [purpose, categoryExternalID, locationExternalIDs, sort, rentFrequency]);

  console.log(properties);
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div>
        <div className="container justify-content-start my-3">
          {!query.get("purpose") ? (
            <span className="fw-bold fs-4">Properties</span>
          ) : (
            <span className="fw-bold fs-4">Property {purpose}</span>
          )}
        </div>
        <ImageCard properties={properties} />
      </div>
    );
  }
};

export default SearchPage;

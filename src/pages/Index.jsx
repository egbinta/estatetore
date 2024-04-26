import React from "react";
import { useState, useEffect } from "react";
import BannerForRent from "../components/BannerForRent";
import BannerForSale from "../components/BannerForSale";
import ImageCard from "../components/ImageCard";
import Loader from "../components/Loader";
import axios from "axios";

const Index = () => {
  const [propertyForRent, setPropertyForRent] = useState([]);
  const [propertyForSale, setPropertyForSale] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://bayut.p.rapidapi.com/properties/list", {
        params: {
          locationExternalIDs: "5002",
          purpose: "for-rent",
          hitsPerPage: "8",
        },
        headers: {
          "X-RapidAPI-Key":
            "499fbc6e61msh790dad8a6509f03p1cb807jsn9db05b7e546c",
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      })
      .then((response) => {
        setPropertyForRent(response.data.hits);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://bayut.p.rapidapi.com/properties/list", {
        params: {
          locationExternalIDs: "5002",
          purpose: "for-sale",
          hitsPerPage: "8",
        },
        headers: {
          "X-RapidAPI-Key":
            "499fbc6e61msh790dad8a6509f03p1cb807jsn9db05b7e546c",
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      })
      .then((response) => {
        setPropertyForSale(response.data.hits);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(propertyForRent);
  return (
    <div className="mb-5">
      {loading ? (
        <Loader />
      ) : (
        <>
          <BannerForRent />
          <ImageCard properties={propertyForRent} />
          {/* <SubBanner /> */}
          <BannerForSale />
          <ImageCard properties={propertyForSale} />
        </>
      )}
    </div>
  );
};

export default Index;

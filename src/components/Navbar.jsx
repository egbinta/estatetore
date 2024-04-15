import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavDropdown from "./NavDropdown";

const Navbar = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension);
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  console.log(screenSize);
  return (
    <div className="bg-light p-3  ">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/">
          <img src="./image/logo.png" height="40" alt="" />
        </Link>
        {screenSize.width <= 768 ? (
          <NavDropdown />
        ) : (
          <div className="d-flex">
            <span className="mx-2">
              <Link to="/" className="linkStyle">
                Home
              </Link>
            </span>
            <span className="mx-2">
              <Link to="/search" className="linkStyle">
                Search
              </Link>
            </span>
            <span className="mx-2">
              <Link to="/search?purpose=for-sale" className="linkStyle">
                Buy Property
              </Link>
            </span>
            <span className="mx-2">
              <Link to="/search?purpose=for-rent" className="linkStyle">
                Rent Property
              </Link>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

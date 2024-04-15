import React, { useEffect, useState } from "react";
import MobileSubBanner from "./MobileSubBanner";

const SubBanner = () => {
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
  return (
    <div>
      {screenSize.width <= 768 ? (
        <MobileSubBanner />
      ) : (
        <div className="bg-secondary mb-4 relative">
          <div className="sub-overlay"></div>
          <div className="row g-0 sub-banner-height">
            <div className="col-md-4">
              <img src="./image/image2.jpg" height="300" width="100%" alt="" />
            </div>
            <div className="col-md-4">
              <img src="./image/image3.jpg" height="300" width="100%" alt="" />
            </div>
            <div className="col-md-4">
              <img src="./image/image4.jpg" height="300" width="100%" alt="" />
            </div>
          </div>
          <p className="text-white fw-bolder fs-3 sub-banner-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            voluptates perspiciatis earum, nostrum dolores quas.
          </p>
        </div>
      )}
    </div>
  );
};

export default SubBanner;

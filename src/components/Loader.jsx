import React from "react";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="lds-dual-ring"></div>
      <div className="loader-text pt-3">Fetching data...</div>
    </div>
  );
};

export default Loader;

import React from "react";
import "./Price.css";  // Import the CSS file

const Price = () => {
  return (
    <div className="price-container">
      {/* Main Price Section */}
      <div className="price-main">
        63,179.71{" "}
        <span className="price-currency">
          USD
        </span>
      </div>
      {/* Change Section */}
      <div className="price-change">
        +2,161.42 (3.54%)
      </div>
    </div>
  );
};

export default Price;


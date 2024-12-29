import React, { useState } from "react";
import "./Menu.css";  // Import the CSS file
import Chart from "./chart.jsx";
import FinancialChart from "./chart.jsx";
const Menu = () => {
  const [selectedTab, setSelectedTab] = useState("Summary");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        {["Summary", "Chart", "Statistics", "Analysis", "Settings"].map((tab) => (
          <div
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`nav-item ${selectedTab === tab ? "active" : ""}`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Content below Navbar */}
      <div className="content">
        {selectedTab === "Summary" && <div>Summary Content</div>}
        {selectedTab === "Chart" && <div><FinancialChart /></div>}
        {selectedTab === "Statistics" && <div>Statistics Content</div>}
        {selectedTab === "Analysis" && <div>Analysis Content</div>}
        {selectedTab === "Settings" && <div>Settings Content</div>}
      </div>
    </div>
  );
};

export default Menu;

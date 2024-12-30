import React, { useState, useMemo } from 'react';
import './Menu.css';
import FinancialChart from './chart.jsx';
import Actions from './actions';

const baseDate = new Date("2024-01-01");

// Function to generate synthetic data points with extreme highs and lows
const generateDataPoints = (startDate, numPoints) => {
  const dataPoints = [];
  
  for (let i = 0; i < numPoints; i++) {
    // Increment the date by the number of months
    const date = new Date(startDate);
    date.setMonth(date.getMonth() + i);
    const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
    
    // Randomly introduce very high or very low values
    let value, volume;
    if (Math.random() < 0.1) { // 10% chance of extreme value
      value = Math.random() < 0.5 
        ? Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000 
        : Math.floor(Math.random() * (12000 - 10000 + 1)) + 10000;
      volume = Math.random() < 0.5 
        ? Math.floor(Math.random() * (1000 - 100 + 1)) + 500 
        : Math.floor(Math.random() * (3000 - 1000 + 1)) + 2000;
    } else {
      value = Math.floor(Math.random() * (5000 - 1000 + 1)) + 2000;
      volume = Math.floor(Math.random() * (1300 - 500 + 1)) + 700;
    }

    dataPoints.push({ date: formattedDate, value, volume });
  }

  return dataPoints;
};

const Menu = () => {
  const [selectedTab, setSelectedTab] = useState('Summary');
  const [timeRange, setTimeRange] = useState('1w');

  // Memoize chart data based on timeRange
  const chartData = generateDataPoints(baseDate, 100);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleTimeRangeChange = (range) => {
    setTimeRange(range);
  };
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreenToggle = () => {
    setIsFullScreen(!isFullScreen);
  };
  

  
  return (
    <div>
      <div className="navbar">
        {['Summary', 'Chart', 'Statistics', 'Analysis', 'Settings'].map((tab) => (
          <div
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`nav-item ${selectedTab === tab ? 'active' : ''}`}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="content">
        {selectedTab === 'Summary' && <div>Summary Content</div>}
        {selectedTab === 'Chart' && (
          <div>
    
          <Actions onTimeRangeChange={handleTimeRangeChange} />
          <FinancialChart data={chartData} />
          </div>
        )}
        {selectedTab === 'Statistics' && <div>Statistics Content</div>}
        {selectedTab === 'Analysis' && <div>Analysis Content</div>}
        {selectedTab === 'Settings' && <div>Settings Content</div>}
      </div>
    </div>
  );
};

export default Menu;


// Menu.jsx
import React, { useState } from 'react';
import './Menu.css';
import FinancialChart from './chart.jsx';
import Actions from './actions';
import { generateRandomData } from './utils/dataGenerator';

const Menu = () => {
  const [selectedTab, setSelectedTab] = useState('Summary');
  const [timeRange, setTimeRange] = useState('1w');
  const [chartData, setChartData] = useState(generateRandomData('1w'));

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleTimeRangeChange = (range) => {
    setTimeRange(range);
    setChartData(generateRandomData(range));
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

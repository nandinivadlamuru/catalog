import React, { useState } from 'react';
import { Maximize2, CirclePlus } from 'lucide-react';
import './Actions.css'; // Optional: Link your CSS file for styling

const Actions = ({ onFullScreen, onTimeRangeChange, onCompare }) => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('1w');

  const handleTimeRangeClick = (timeRange) => {
    setSelectedTimeRange(timeRange);
    if (onTimeRangeChange) {
      onTimeRangeChange(timeRange); // Callback to update the chart's time range
    }
  };

  return (
    <div className="actions-container">
      {/* Fullscreen button */}
      <button onClick={onFullScreen} className="action-button">
        <Maximize2 className='icon'/> Fullscreen
      </button>

      {/* Compare button */}
      <button onClick={onCompare} className="action-button">
        <CirclePlus /> Compare
      </button>

      {/* Time range selectors */}
      <div className="time-range-buttons">
        {['1d', '3d', '1w', '1m', '6m', '1y', 'max'].map((range) => (
          <button
            key={range}
            onClick={() => handleTimeRangeClick(range)}
            className={`time-button ${
              selectedTimeRange === range ? 'selected' : ''
            }`}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Actions;

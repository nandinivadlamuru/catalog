import React, { useState } from "react";
import {
  Line,
  Bar,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";
import "./Chart.css";

const FinancialChart = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const values = data.map((d) => d.value);
  const currentValue = values[values.length - 1]; // Get the last value for the current price
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);

  const renderVerticalLines = () => {
    const lines = [];
    for (let i = 0; i < data.length; i += 5) {
      lines.push(
        <ReferenceLine
          key={i}
          x={new Date(data[i].date).getTime()}
          stroke="#E2E8F0"
          strokeDasharray="3 3"
          strokeWidth={1}
        />
      );
    }
    return lines;
  };

  // Custom Dot for the Latest Point Only
  const CustomDot = ({ cx, cy, index }) => {
    if (index === data.length - 1) {
      return (
        <g>
          {/* The Circle Dot */}
          <circle
            cx={cx}
            cy={cy}
            r={5} // Radius for the dot
            stroke="white"
            strokeWidth={2}
            fill="#4B40EE"
          />
          
          {/* Background for the text */}
          <rect
            x={cx - 49} // Adjust to center the text
            y={cy - 40} // Position the background above the dot
            width={98}   // Width of the background
            height={33}  // Height of the background
            rx={5}       // Border radius for rounded corners
            fill="#4B40EE" // Violet background color
          />
          
          {/* Current Value Text */}
          <text
            x={cx}
            y={cy - 20} // Adjust to position the text in the center of the background
            textAnchor="middle"
            fill="white" // White text color
            fontSize="12px"
            fontWeight="bold"
          >
            {currentValue.toLocaleString()}
          </text>
        </g>
      );
    }
    return null; // Don't render for other points
  };
  

  return (
    <div className="financial-chart-container">
      <div className="financial-chart-content">
        <div className="financial-chart-header">
          <div className="financial-chart-badge-container">
            <span className="financial-chart-badge financial-chart-badge-current">
              {currentValue.toLocaleString()} {/* Display the current value */}
            </span>
          </div>
        </div>
        <div className="financial-chart">
          <ComposedChart
            width={800}
            height={400}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            onMouseMove={(state) => {
              if (state && state.activeTooltipIndex !== undefined) {
                setActiveIndex(state.activeTooltipIndex);
              }
            }}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#7C3AED" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={true} stroke="#E2E8F0" />
            <XAxis dataKey="date" axisLine={false} tickLine={false} tick={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={false}
              domain={[minValue - 1000, maxValue + 1000]}
              allowDataOverflow={true}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="financial-chart-tooltip">
                      <p className="financial-chart-tooltip-text">
                        {payload[0].payload.value.toLocaleString()}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            {renderVerticalLines()}

            {activeIndex !== null && (
              <>
                <ReferenceLine
                  x={data[activeIndex].date}
                  stroke="#E2E8F0"
                  strokeDasharray="3 3"
                  strokeWidth={1.5}
                />
                <ReferenceLine
                  y={data[activeIndex].value}
                  stroke="#E2E8F0"
                  strokeDasharray="3 3"
                  strokeWidth={1.5}
                />
              </>
            )}

            <Bar dataKey="volume" fill="#E2E8F0" barSize={20} isAnimationActive={false} />
            <Line
              type="Linear"
              dataKey="value"
              stroke="#4B40EE"
              strokeWidth={2}
              dot={<CustomDot />}
              isAnimationActive={false}
              fill="url(#colorValue)"
            />
          </ComposedChart>
        </div>
      </div>
    </div>
  );
};

export default FinancialChart;


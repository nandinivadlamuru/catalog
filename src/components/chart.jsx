// FinancialChart.jsx
import React from 'react';
import {
  Line,
  Bar,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from 'recharts';
import './Chart.css';

const FinancialChart = ({ data }) => {
  const values = data.map((d) => d.value);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const currentValue = values[values.length - 1]; // Get the last value for current price

  const scaleInterval = 5; // Interval for vertical lines (every 5th data point)

  const renderVerticalLines = () => {
    const lines = [];
    for (let i = 0; i < data.length; i += scaleInterval) {
      lines.push(
        <ReferenceLine
          key={i}
          x={new Date(data[i].date).getTime()} // Convert date string to timestamp
          stroke="#E2E8F0"
          strokeDasharray="3 3"
          strokeWidth={1}
        />
      );
    }
    return lines;
  };

  return (

    <div className="financial-chart-container">
      
      <div className="financial-chart-content">
        <div className="financial-chart-header">
          <div className="financial-chart-badge-container">
  
            <span className="financial-chart-badge financial-chart-badge-current">
              {values[values.length - 1].toLocaleString()}
            </span>
          </div>
        </div>
        <div className="financial-chart">
          <ComposedChart
            width={800}
            height={400}
            data={data}
            margin={{ top: 10, right: 30, left:0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#7C3AED" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid  vertical={true} stroke="#E2E8F0" />
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

            {/* Render vertical lines at scale intervals */}
            {renderVerticalLines()}

            <Bar dataKey="volume" fill="#E2E8F0" barSize={20} isAnimationActive={false} />
            <Line
              type="Linear"
              dataKey="value"
              stroke="#4B40EE"
              strokeWidth={2}
              dot={false}
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

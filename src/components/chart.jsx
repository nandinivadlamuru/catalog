// FinancialChart.jsx
import React from 'react';
import { Line, Bar, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import './Chart.css';

const FinancialChart = ({ data }) => {
  const values = data.map(d => d.value);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);

  return (
    <div className="financial-chart-container">
      <div className="financial-chart-content">
        <div className="financial-chart-header">
          <div className="financial-chart-badge-container">
            <span className="financial-chart-badge financial-chart-badge-high">
              {maxValue.toLocaleString()}
            </span>
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
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#7C3AED" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
            <XAxis dataKey="date" axisLine={false} tickLine={false} tick={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={false}
              domain={[minValue, maxValue]}
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
            <Bar dataKey="volume" fill="#E2E8F0" barSize={20} isAnimationActive={false} />
            <Line
              type="Linear"
              dataKey="value"
              stroke="#7C3AED"
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

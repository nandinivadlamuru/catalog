import React from 'react';
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar, ComposedChart } from "recharts";
import './Chart.css';

// Sample data - replace with actual data points
const data = [
    {date: "2024-01", value: 61877, volume: 1428},
    {date: "2024-01", value: 67757, volume: 621},
    {date: "2024-03", value: 62599, volume: 544},
    {date: "2024-03", value: 69385, volume: 609},
    {date: "2024-04", value: 62449, volume: 1364},
    {date: "2024-05", value: 62434, volume: 948},
    {date: "2024-06", value: 61828, volume: 776},
    {date: "2024-07", value: 66870, volume: 608},
    {date: "2024-08", value: 60671, volume: 1003},
    {date: "2024-09", value: 66012, volume: 917},
    {date: "2024-10", value: 66738, volume: 734},
    {date: "2024-11", value: 62787, volume: 589},
    {date: "2024-12", value: 64076, volume: 836},
    {date: "2025-01", value: 68943, volume: 576},
    {date: "2025-02", value: 64523, volume: 700},
    {date: "2025-03", value: 68938, volume: 890},
    {date: "2025-04", value: 65901, volume: 1270},
    {date: "2025-05", value: 67469, volume: 1391},
    {date: "2025-06", value: 69537, volume: 683},
    {date: "2025-07", value: 68775, volume: 1375},
    {date: "2025-08", value: 60342, volume: 1464},
    {date: "2025-09", value: 66360, volume: 1344},
    {date: "2025-10", value: 61422, volume: 1223},
    {date: "2025-11", value: 65635, volume: 1226},
    {date: "2025-12", value: 67656, volume: 604},
    {date: "2026-01", value: 60162, volume: 1466},
    {date: "2026-02", value: 64110, volume: 934},
    {date: "2026-03", value: 60054, volume: 513},
    {date: "2026-04", value: 62795, volume: 1160},
    {date: "2026-05", value: 64268, volume: 1418}
].map(item => ({
    ...item,
    tooltipValue: item.value.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
}));

export default function FinancialChart() {
    const currentValue = "63,179.71";
    const highValue = "64,850.35";

    return (
        <div className="financial-chart-container">
            <div className="financial-chart-content">
                <div className="financial-chart-header">
                    <div className="financial-chart-badge-container">
                        <span className="financial-chart-badge financial-chart-badge-high">
                            {highValue}
                        </span>
                        <span className="financial-chart-badge financial-chart-badge-current">
                            {currentValue}
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
                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke="#E2E8F0"
                        />
                        <XAxis
                            dataKey="date"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#64748B', fontSize: 12 }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#64748B', fontSize: 12 }}
                        />
                        <Tooltip
                            content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div className="financial-chart-tooltip">
                                            <p className="financial-chart-tooltip-text">
                                                {payload[0].payload.tooltipValue}
                                            </p>
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                        <Bar
                            dataKey="volume"
                            fill="#E2E8F0"
                            barSize={20}
                            isAnimationActive={false}
                        />
                        <Line
                            type="monotone"
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
}